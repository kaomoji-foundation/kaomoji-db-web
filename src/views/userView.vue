<script setup lang="ts">
import MinimalTopBar from '../components/MinimalTopBar.vue'
import PageFooter from '../components/PageFooter.vue'
import Notifications from '../components/notifications/NotificationsWrapper.vue'

</script> 

<template>
    <body class="min-h-screen bg-gray-800">
        <MinimalTopBar></MinimalTopBar>
        <!-- <ListsSideBar></ListsSideBar> -->
        <Notifications></Notifications>
        <!-- <HomeKaomojisExplorer></HomeKaomojisExplorer> -->
        <PageFooter></PageFooter>
    </body>
</template>
