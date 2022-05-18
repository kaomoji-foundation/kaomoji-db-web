<script setup lang="ts">
import type { Kaomoji } from "@/types/kaomoji";
import KaomojiBlob from "../KaomojiBlob.vue";
import { kaomojiStore } from '@/stores/kaomojis';
import { reactive } from "vue";

const props = defineProps<{
        scope: string
    }>()

let kaoStore = kaomojiStore()

let kaomojis: Array<Kaomoji>

function isAtBottom(): boolean {
    const offsetHeight = 70
    let top = document.documentElement.scrollTop
    let bottom = document.documentElement.offsetHeight
    let position = top + window.innerHeight
    console.debug(`pos: ${position}; bottom: ${bottom} bottom+offset:${bottom - offsetHeight}`)
    return position >= (bottom - offsetHeight);
}

let fillPage = async () => {
    while(isAtBottom()) {
        console.debug(isAtBottom())
        console.debug("[Loading]: startup, filling the page with kaomojis")
        await kaoStore.loadChunks(1)
    }

}
if (props.scope == "home") {
    kaomojis = reactive(kaoStore.kaomojis)
    kaoStore.loadChunks(1)
    fillPage()
}



window.onscroll = () => {
    fillPage()
}

</script> 
<template>
    <main id="content" class="min-h-screen w-auto p-0 m-0 flex justify-center items-start">
        <!-- tried to go using grid, tho didnt figure out the way to make it work, I think for what I want, it cant be grid, but definitely not flexbox -->

        <!-- grid gap-2 grid-cols-auto-! auto-cols-max grid-flow-row -->
        <!-- flex flex-row flex-grow items-start justify-start flex-wrap -->
        <ul class="
        min-h-fit w-full mt-4 mr-3
        flex flex-row flex-grow
        items-start justify-start flex-wrap">      
            <KaomojiBlob v-for="kao in kaomojis" :key="kao.id" :kaomoji="kao" >
            </KaomojiBlob>
        </ul>
    </main>
</template>