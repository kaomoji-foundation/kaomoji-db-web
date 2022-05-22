<script setup lang="ts">
import { reactive } from 'vue'
import SearchBar from '../forms/SearchBar.vue'

const state = reactive({ open: false })

</script>

<template>
    <div id="mobile-menu-collapse"
         class="flex items-center justify-center md:hidden z-50 mr-3">
        <button class="text-gray-100 w-12 h-12 bg-slate-900 rounded-md flex flex-col items-center justify-center"
                @click="state.open = !state.open">
            <span aria-hidden="true"
                  class="h-[0.150rem] w-6 bg-current transition duration-500 ease-in-out rounded-full p-0 m-0"
                  :class="{ 'rotate-45': state.open, ' translate-y-[0.525rem]': state.open }"></span>
            <span aria-hidden="true"
                  class="h-[0.150rem] w-6 bg-current transition duration-500 ease-in-out rounded-full p-0 m-0 my-1.5"
                  :class="{ '-rotate-45': state.open }"></span>
            <span aria-hidden="true"
                  class="h-[0.150rem] w-6 bg-current transition duration-500 ease-in-out rounded-full p-0 m-0"
                  :class="{ '-rotate-45': state.open, ' -translate-y-[0.525rem]': state.open }"></span>
        </button>
    </div>
    <div id="mobile-menu"
         class="flex md:hidden bg-gray-900 bg-opacity-80 m-0 p-0 justify-between flex-col items-center w-screen h-screen absolute top-0 left-0 right-0 bottom-0 z-40 transition-all duration-400"
         :class="{ hidden: !state.open }">
        <div
             class="mobile-options absolute top-28 flex flex-col items-center justify-center text-left overflow-hidden w-full">
            <button class="flex justify-evenly items-center p-0 text-slate-100 transition-all hover:text-slate-50 focus:outline-none"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="true"
                    aria-controls="headlessui-menu-items-117">
                <!-- User profile image here -->
                <span class="mr-2 text-xl font-bold">Username</span>
                <ion-icon name="person-circle-outline"
                          class="text-6xl m-0 p-0 bg-slate-900 rounded-full"></ion-icon>
            </button>
            <div
                 class="flex flex-col justify-center items-center w-[85%] text-slate-100 mt-2 -translate-y-2 transition-all duration-1000 scale-95">
                <span class="bg-slate-500 w-full h-1 p-0 m-0 rounded-full my-1">
                    <!-- this is a separator -->
                </span>
                <a href="#"
                   tabindex="2"
                   class="text-slate-50 font-bold flex justify-between items-center w-[95%] px-4 py-2 text-sm leading-5 text-left"
                   role="menuitem">
                    Settings
                    <ion-icon name="options"
                              class="text-2xl m-0 p-0"></ion-icon>
                </a>
                <span class="bg-slate-500 w-full h-1 p-0 m-0 rounded-full my-1">
                    <!-- this is a separator -->
                </span>
                <a href="#"
                   tabindex="2"
                   class="text-slate-50 font-bold flex justify-between items-center w-[95%] px-4 py-2 text-sm leading-5 text-left"
                   role="menuitem">
                    Sign out
                    <ion-icon name="log-out-outline"
                              class="text-2xl m-0 p-0"></ion-icon>
                </a>
            </div>
        </div>
    </div>
</template>