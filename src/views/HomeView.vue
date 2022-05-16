<script setup lang="ts">
import HomeTopBar from '../components/HomeTopBar.vue'
import ListsSideBar from '../components/menus/CategoriesAndListsSideBar.vue'
import HomeKaomojisExplorer from '../components/viewPorts/HomeKaomojisExplorer.vue'
import PageFooter from '../components/PageFooter.vue'

</script> 

<template>
    <body class="bg-gray-800 min-h-screen">
        <HomeTopBar></HomeTopBar>
        <ListsSideBar></ListsSideBar>
        <HomeKaomojisExplorer></HomeKaomojisExplorer>
        <PageFooter></PageFooter>
    </body>
</template>
