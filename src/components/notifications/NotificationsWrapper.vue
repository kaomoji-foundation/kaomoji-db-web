<script setup lang="ts">
import { notificationsStore } from "@/stores/notifications";
import BasicAlert from "./basicAlert.vue";
console.log("loading notifications")

let notifStore = notificationsStore()

</script>
<template>
    <div class="w-fit max-w-screen-sm overflow-visible right-0 
    fixed z-50 flex flex-col justify-start items-end">
        <div v-for="n in notifStore.notifications"
             :key="n.id">
            <BasicAlert :notification="n"></BasicAlert>
        </div>
    </div>
</template>