<script setup lang="ts">
import { notificationsStore } from "@/stores/notifications";
import BasicAlerts from "./basicAlerts.vue";
console.log("loading notifications")

let notifStore = notificationsStore()

notifStore.emit({ msg: "Welcome!", type: "sucess" })
console.log(notifStore.notifications);

</script>
<template>
    <div class="w-fit overflow-visible right-0 absolute z-50 flex flex-col justify-start items-end">
        <div v-for="n in notifStore.notifications"
             :key="n.id">
            <BasicAlerts :notification="n"></BasicAlerts>
        </div>
    </div>
</template>