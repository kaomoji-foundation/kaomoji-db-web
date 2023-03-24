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
        if (scrollPos > 3) {
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
            class="flex sticky top-0 z-50 flex-row justify-between items-center h-16 bg-gray-800 border-b-4 border-transparent transition-colors duration-300 md:flex-row">
        <logo_text></logo_text>
        <!-- <Search_bar></Search_bar> -->
        <!-- <UserMenu></UserMenu> -->
    </header>
</template>