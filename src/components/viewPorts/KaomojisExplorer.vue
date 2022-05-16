<script setup lang="ts">
import type { kaomoji } from "@/types/kaomoji";
import KaomojiBlob from "../KaomojiBlob.vue";

const props = defineProps<{
        kaomojis?: Array<kaomoji>
    }>()
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
            <KaomojiBlob v-for="kao in props.kaomojis" :key="kao.id" :kaomoji="kao" >
            </KaomojiBlob>
        </ul>
    </main>
</template>