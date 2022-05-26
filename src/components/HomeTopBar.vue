<script setup lang="ts">
import { ref } from 'vue'
import logo_text from '@/components/LogoText.vue'
import UserMenu from '@/components/menus/UserMenu.vue'
import Search_bar from '@/components/forms/SearchBar.vue'

const header = ref<HTMLElement | null>(null)
// const targets = document.querySelectorAll("header");
let lastKnownScrollPosition = 0;
let ticking = false;

function onNotTopOfPage(scrollPos: number) {
    if (header.value) {
        if (scrollPos > 0) {
            header.value.classList.remove("border-transparent");
            header.value.classList.add("border-slate-300");
            console.debug('header added Border');
        } else {
            header.value.classList.remove("border-slate-300");
            header.value.classList.add("border-transparent");
            console.debug('header removed Border');
        }
    }
}

document.addEventListener('scroll', function (e) {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(function () {
            onNotTopOfPage(lastKnownScrollPosition);
            ticking = false;
        });

        ticking = true;
    }
});
</script>
<template>
    <header ref="header"
            class="flex justify-between flex-row md:flex-row items-center h-16 sticky z-50 top-0
             bg-gray-800 border-b-4 border-transparent transition-colors duration-300">
        <logo_text></logo_text>
        <Search_bar></Search_bar>
        <UserMenu></UserMenu>
    </header>
</template>