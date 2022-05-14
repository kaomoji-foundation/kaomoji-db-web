<script setup lang="ts">
import KaomojiBlob from "./KaomojiBlob.vue";

</script> 
<template>
    <main id="content" class="min-h-screen w-auto p-0 m-0 flex justify-center items-start">
        <!-- tried to go using grid, tho didnt figure out the way to make it work, I think for what I want, it cant be grid, but definitely not flexbox -->

        <!-- grid gap-2 grid-cols-auto-! auto-cols-max grid-flow-row -->
        <!-- flex flex-row flex-grow items-start justify-start flex-wrap -->
        <ul
            class="min-h-fit w-full mt-4 mr-3 flex flex-row flex-grow items-start justify-start flex-wrap"
            x-data="{kaomojis: getKaomojiData()}"
        >
            <KaomojiBlob></KaomojiBlob>

            <!-- <template x-for="kaomoji in kaomojis">
                <div class="kaomoji-card">
                    <span class="kaomoji-string" x-text="kaomoji.str"></span>
                    <div class="separator"></div>
                    <ul class="kaomoji-tags">
                        <template x-for="key in kaomoji.keys">
                            <span class="key-tag" x-text="key"></span>
                        </template>
                    </ul>
                </div>
            </template>
            -->
        </ul>
    </main>
</template>