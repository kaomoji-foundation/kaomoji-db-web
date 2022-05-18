<script setup lang="ts">
import logo_text from '@/components/LogoText.vue'
import UserMenu from '@/components/menus/UserMenu.vue'
import Search_bar from '@/components/forms/SearchBar.vue'
</script>
<template>
    <header
        class="flex justify-between flex-row md:flex-row items-center h-16 sticky z-50 top-0 bg-gray-800 border-b-4 border-transparent"
    >
        <logo_text></logo_text>    
        <Search_bar></Search_bar>
        <UserMenu></UserMenu>
    </header>
</template>