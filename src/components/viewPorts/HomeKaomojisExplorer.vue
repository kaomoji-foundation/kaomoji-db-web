<script setup lang="ts">
import { kaomojiStore } from '@/stores/kaomojis';
import { filtersHomeStore } from "@/stores/filters-home";
import router from "@/router";
import KaomojiExplorer from "@/components/viewPorts/KaomojiExplorer.vue";

let viewportKey = 0

function forceRerender() {
    viewportKey += 1
}

let store = kaomojiStore()

let fillPage: () => Promise<boolean>

fillPage = async (): Promise<boolean> => {
    await store.loadNewChunk()
    console.debug("[Loading]: filled the page with more kaomojis")

    return store.fullyLoaded
}

let filters = filtersHomeStore()

let query = router.currentRoute.value.params.q
if (typeof query == "string") {
    store.search(query)
} else {
    fillPage()
}


filters.$subscribe(async (mutation, state) => {
    await store.search(state.queryString)
})
</script> 
<template>
    <KaomojiExplorer :kaomojis="store.kaomojis"
                     :fill-page="fillPage">
    </KaomojiExplorer>
</template>
