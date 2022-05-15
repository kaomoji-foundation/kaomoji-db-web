<script setup lang="ts">
import HomeTopBar from '../components/HomeTopBar.vue'
import ListsSideBar from '../components/menus/CategoriesAndListsSideBar.vue'
import KaomojisExplorer from '../components/KaomojisExplorer.vue'
import PageFooter from '../components/PageFooter.vue'
import { kaomojiStore } from '@/stores/kaomojis';

let kaoStore = kaomojiStore()

kaoStore.loadChunks(5)

</script> 

<template>
    <body class="bg-gray-800 min-h-screen">
        <HomeTopBar></HomeTopBar>
        <ListsSideBar></ListsSideBar>
        <KaomojisExplorer :kaomojis="kaoStore.kaomojis"></KaomojisExplorer>
        <PageFooter></PageFooter>
    </body>
</template>
