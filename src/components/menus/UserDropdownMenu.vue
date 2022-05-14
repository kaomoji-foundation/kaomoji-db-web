<script setup lang="ts">

</script> 
<template>
    <!-- User Dropdown menu (big screens) -->
    <div id="user" class="mr-3 hidden md:flex flex-col justify-center items-center">
        <div class="dropdown-container relative flex flex-col items-start justify-center text-left">
            <button
                class="inline-flex justify-center items-center w-12 h-12 p-0 rounded-full text-slate-100 transition-all bg-slate-900 hover:text-slate-50 focus:outline-none border-0 focus:border-2 border-teal-600 focus:shadow-outline-teal active:bg-gray-800 active:text-slate-50"
                type="button"
                aria-haspopup="true"
                aria-expanded="true"
                aria-controls="headlessui-menu-items-117"
            >
                <!-- User profile image here -->
                <ion-icon name="person-circle-outline" class="text-6xl -m-1 p-0"></ion-icon>
            </button>
            <div
                class="dropdown-elements-wrapper absolute top-12 right-4 hidden text-slate-100 transition-all duration-500 transform origin-top-right -translate-y-1 translate-x-6 scale-95"
            >
                <div
                    class="absolute right-0 w-56 mt-2 origin-top-right bg-gray-900 border border-gray-500 divide-y divide-gray-500 rounded-md shadow-lg outline-none"
                >
                    <div class="px-4 py-3">
                        <p class="text-sm leading-5">Signed in as:</p>
                        <a
                            href="#"
                            tabindex="3"
                            class="text-slate-50 font-medium flex justify-between items-center w-full px-4 py-1 text-sm leading-5 text-left"
                            role="menuitem"
                        >
                            Username
                            <ion-icon name="person-circle-outline" class="text-4xl m-0 p-0"></ion-icon>
                        </a>
                    </div>
                    <a
                        href="#"
                        tabindex="2"
                        class="text-slate-50 flex justify-between items-center w-full px-4 py-2 text-sm leading-5 text-left"
                        role="menuitem"
                    >
                        Settings
                        <ion-icon name="options" class="text-2xl m-0 p-0"></ion-icon>
                    </a>
                    <div class="py-1">
                        <a
                            href="#"
                            tabindex="3"
                            class="text-slate-50 flex justify-between items-center w-full px-4 py-2 text-sm leading-5 text-left"
                            role="menuitem"
                        >
                            Sign out
                            <ion-icon name="log-out-outline" class="text-2xl m-0 p-0"></ion-icon>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>