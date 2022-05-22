<script setup lang="ts">
import type { Kaomoji } from "@/types/kaomoji";
import KaomojiBlob from "../KaomojiBlob.vue";
import InfiniteScrollLoader from "../InfiniteScrollLoader.vue";

defineProps<{
    kaomojis: Array<Kaomoji>,
    fillPage: () => Promise<boolean>
}>()

</script> 
<template>
    <main class="w-auto p-0 m-0 flex flex-col min-h-screen">
        <div id="kaomoji-viewport"
             class="w-auto p-0 m-0 flex justify-center items-start">
            <!-- tried to go using grid, tho didnt figure out the way to make it work,
             I think for what I want, it cant be grid, but definitely not flexbox -->

            <!-- grid gap-2 grid-cols-auto-! auto-cols-max grid-flow-row -->
            <!-- flex flex-row flex-grow items-start justify-start flex-wrap -->
            <ul class="
            min-h-fit w-full mt-4 mr-3
            flex flex-row flex-grow
            items-start justify-start flex-wrap">
                <KaomojiBlob v-for="kao in kaomojis"
                             :key="kao.id"
                             :id="kao.id"
                             :kaomoji="kao">
                </KaomojiBlob>
            </ul>
        </div>
        <InfiniteScrollLoader :loader-fn="fillPage"
                              scroll-element-selector="#kaomoji-viewport">
        </InfiniteScrollLoader>
    </main>
</template>