<script setup lang="ts">
import { notificationsStore } from '@/stores/notifications';


const notifications = notificationsStore()

</script> 
<template>
    <nav
         class="float-left mx-3 my-4 w-10 md:w-16 h-auto rounded-2xl bg-gray-900 text-slate-100 flex flex-col flex-nowrap justify-center items-center sticky top-[5rem]">
        <!-- favourites def list -->
        <div id="list-favourites"
             v-on:click="
             notifications.emit(
                 {
                     msg: 'Favourites list not implemented yet, comming soon',
                     type: 'info',
                     timeout: 0,
                     dimisable: true
                 }
             )"
             class="mt-2 h-9 md:h-10 lg:h-12 w-9 md:w-10 lg:w-12 flex flex-col flex-nowrap justify-center items-center text-2xl md:text-3xl lg:text-4xl hover:text-[2.5rem] focus-within:text-rose-600 transition-all duration-500">
            <a href="#"
               class>
                <ion-icon name="heart"></ion-icon>
            </a>
        </div>
        <!-- User saved lists -->
        <div id="saved-lists"
             v-on:click="
             notifications.emit(
                 {
                     msg: 'User defined lists comming soon, showing placeholders',
                     type: 'info',
                     timeout: 0,
                     dimisable: true
                 }
             )"
             class="dropdown-container flex flex-col flex-nowrap justify-center items-center">
            <a href="#"
               id="categories-collapse"
               class="text-2xl md:text-3xl lg:text-4xl text-slate-50 focus-within:text-teal-500 active:text-teal-500 focus:text-teal-500 transition-colors duration-400 mb-2">
                <ion-icon name="bookmark"></ion-icon>
            </a>
            <ul class="dropdown-elements-wrapper flex-col items-center justify-start">
                <!-- User lists  -->
                <div v-on:click="notifications.emit(
                    {
                        msg: 'User defined lists comming soon, this is a placeholder list',
                        type: 'info',
                        timeout: 0,
                        dimisable: true
                    }
                )"
                     class="user-created-list mb-1 py-0 mt-0 h-8 md:h-10 lg:h-11 w-8 md:w-10 lg:w-11 flex flex-col flex-nowrap justify-center items-center">
                    <a href="#"
                       class="text-center flex justify-center items-center font-bold text-xl md:text-2xl lg:text-3xl hover:text-red-600 focus-within:text-red-600 transition-colors duration-500">
                        <ion-icon name="rocket"></ion-icon>
                    </a>
                </div>

                <div v-on:click="notifications.emit(
                    {
                        msg: 'User defined lists comming soon, this is a placeholder list',
                        type: 'info',
                        timeout: 0,
                        dimisable: true
                    }
                )"
                     class="user-created-list mb-1 py-0 mt-0 h-8 md:h-10 lg:h-11 w-8 md:w-10 lg:w-11 flex flex-col flex-nowrap justify-center items-center">
                    <a href="#"
                       class="text-center flex justify-center items-center font-bold text-xl md:text-2xl lg:text-3xl hover:text-rose-500 focus-within:text-rose-500 transition-colors duration-500">
                        <ion-icon name="medical"></ion-icon>
                    </a>
                </div>
                <!-- create new list button -->
                <div v-on:click="
                notifications.emit(
                    {
                        msg: 'User defined lists comming soon, this button would create a new list',
                        type: 'info',
                        timeout: 0,
                        dimisable: true
                    }
                )"
                     class="new-list mb-1 mt-0 py-0 h-8 md:h-10 lg:h-11 w-8 md:w-10 lg:w-11 flex flex-col flex-nowrap justify-center items-center bg-gray-1000 rounded-full">
                    <a href="#"
                       class="text-center flex justify-center items-center font-bold text-xl md:text-2xl lg:text-3xl hover:text-teal-600 focus-within:text-teal-600 hover:rotate-[540deg] focus-within:rotate-[540deg] transition-all duration-700">
                        <ion-icon name="add"></ion-icon>
                    </a>
                </div>
            </ul>
        </div>

        <div id="category-group"
             v-on:click="
             notifications.emit(
                 {
                     msg: 'Categories global lists, comming soon',
                     type: 'info',
                     timeout: 0,
                     dimisable: true
                 }
             )"
             class="dropdown-container flex flex-col flex-nowrap justify-center items-center">
            <a href="#"
               id="categories-collapse"
               class="text-2xl md:text-3xl lg:text-4xl text-slate-50 hover:rotate-45 focus-within:text-teal-500 focus-within:rotate-45 transition-all duration-300 mb-2">
                <ion-icon name="grid"></ion-icon>
            </a>
            <ul class="dropdown-elements-wrapper pb-3">
                <!-- Categories list  -->
                <div id="list-category-flipTheTable"
                     v-on:click="
                     notifications.emit(
                         {
                             msg: 'Categories global lists, comming soon',
                             type: 'info',
                             timeout: 0,
                             dimisable: true
                         }
                     )"
                     class="category mb-1 py-0 mt-0 h-9 md:h-10 lg:h-12 w-9 md:w-10 lg:w-12 flex flex-col flex-nowrap justify-center items-center">
                    <a href="#"
                       class="text-center flex justify-center items-center font-bold text-xs md:text-lg lg:text-xl hover:rotate-180 focus-within:rotate-180 hover:translate-y-2 hover:text-amber-800 focus-within:text-amber-800 transition-transform duration-500">┳━┳</a>
                </div>

                <div id="list-category-love"
                     v-on:click="
                     notifications.emit(
                         {
                             msg: 'Categories global lists, comming soon',
                             type: 'info',
                             timeout: 0,
                             dimisable: true
                         }
                     )"
                     class="category mb-1 mt-0 py-0 h-9 md:h-10 lg:h-12 w-9 md:w-10 lg:w-12 flex flex-col flex-nowrap justify-center items-center">
                    <a href="#"
                       class="text-center flex justify-center items-center font-bold text-xs md:text-lg lg:text-xl hover:text-rose-600 focus-within:text-rose-600 transition-colors duration-500">♥‿♥</a>
                </div>

                <div id="list-category-cry"
                     v-on:click="
                     notifications.emit(
                         {
                             msg: 'Categories global lists, comming soon',
                             type: 'info',
                             timeout: 0,
                             dimisable: true
                         }
                     )"
                     class="category mb-1 mt-0 py-0 h-9 md:h-10 lg:h-12 w-9 md:w-10 lg:w-12 flex flex-col flex-nowrap justify-center items-center">
                    <a href="#"
                       class="text-center flex justify-center items-center font-bold text-xs md:text-sm lg:text-lg hover:text-cyan-500 focus-within:text-cyan-500 transition-colors duration-500">╥﹏╥</a>
                </div>
            </ul>
        </div>
    </nav>
</template>