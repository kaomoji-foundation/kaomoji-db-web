<script setup lang="ts">
import HomeTopBar from '../components/HomeTopBar.vue'
import ListsSideBar from '../components/CategoriesAndListsSideBar.vue'
import KaomojisExplorer from '../components/KaomojisExplorer.vue'
import PageFooter from '../components/PageFooter.vue'
</script> 

<template>
<body class="bg-gray-800 min-h-screen">
  <HomeTopBar></HomeTopBar>
  <ListsSideBar></ListsSideBar>
  <KaomojisExplorer></KaomojisExplorer>
  <PageFooter></PageFooter>
</body>
</template>
