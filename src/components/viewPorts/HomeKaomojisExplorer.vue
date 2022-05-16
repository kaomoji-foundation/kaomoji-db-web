<script setup lang="ts" >
import KaomojisExplorer from '@/components/viewPorts/KaomojisExplorer.vue'
import { kaomojiStore } from '@/stores/kaomojis';

let kaoStore = kaomojiStore()

kaoStore.loadChunks(1)

window.onscroll = () => {
    let top = document.documentElement.scrollTop
    let bottom = document.documentElement.offsetHeight
    let position = top + window.innerHeight
    const offsetHeight = 70
    console.debug(position)
    let bottomOfWindow = position >= bottom - offsetHeight;

    if (bottomOfWindow) {
        kaoStore.loadChunks(2)
    }
};

</script>

<template>
        <KaomojisExplorer :kaomojis="kaoStore.kaomojis"></KaomojisExplorer>
</template>