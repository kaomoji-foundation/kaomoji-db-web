<script setup lang="ts">
import router from '@/router';



</script> 
<template>
    <a v-on:click="router.push({ path: '/auth' })"
       class="px-2 py-1 mx-4 font-bold text-white bg-green-500 rounded-lg transition-colors w-fit hover:bg-green-600">
        Login/Register
    </a>
</template>