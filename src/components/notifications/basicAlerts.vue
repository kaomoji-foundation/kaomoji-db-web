<script setup lang="ts">
import IconcheckMark from "../icons/IconcheckMark.vue";
import type { Notification } from "@/types/notification";
import IconError from "../icons/iconError.vue";
import IconWarning from "../icons/iconWarning.vue";
import IconInfo from "../icons/iconInfo.vue";
console.log("loading alerts")
defineProps<{
    notification: Notification
}>()

</script>
<template>
    <div :class="{
        'bg-green-200': notification.type === 'sucess',
        'bg-red-200': notification.type === 'error',
        'bg-orange-200': notification.type === 'warn',
        'bg-blue-200': notification.type === 'info',
    }"
         class="px-6 py-4 mx-2 my-1 rounded-md text-lg flex items-center w-fit">
        <IconcheckMark class="text-green-600"
                       v-if="notification.type === 'sucess'">
        </IconcheckMark>
        <IconError class="text-red-600"
                   v-if="notification.type === 'error'">
        </IconError>
        <IconWarning class="text-yellow-600"
                     v-if="notification.type === 'warn'">
        </IconWarning>
        <IconInfo class="text-blue-600"
                  v-if="notification.type === 'info'">
        </IconInfo>
        <span :class="{
            'text-green-800': notification.type === 'sucess',
            'text-red-800': notification.type === 'error',
            'text-yellow-800': notification.type === 'warn',
            'text-blue-800': notification.type === 'info',
        }">
            {{ notification.msg }}
        </span>
    </div>
</template>