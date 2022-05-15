<script setup lang="ts">
import HomeTopBar from '../components/HomeTopBar.vue'
import ListsSideBar from '../components/CategoriesAndListsSideBar.vue'
import KaomojisExplorer from '../components/KaomojisExplorer.vue'
import PageFooter from '../components/PageFooter.vue'
import type { kaomoji } from '@/types/kaomoji';

const kaomojis: Array<kaomoji> = [
    {
        id: "627cfffde881bb799fc303f5",
        string:"(╮°-°)╮┳━━┳ ( ╯°□°)╯ ┻━━┻",
        description:"",
        categories: [
            "flip the table",
            "mad",
        ],
    },
]

</script> 

<template>
    <body class="bg-gray-800 min-h-screen">
        <HomeTopBar></HomeTopBar>
        <ListsSideBar></ListsSideBar>
        <KaomojisExplorer :kaomojis="kaomojis"></KaomojisExplorer>
        <PageFooter></PageFooter>
    </body>
</template>
