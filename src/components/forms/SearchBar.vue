<script setup lang="ts">
import { filtersStore } from "@/stores/filters";
import router from "@/router";


let filters = filtersStore()

let query = router.currentRoute.value.params.q
if (typeof query == "string") {
    filters.queryString = query
}

</script>

<template>
    <div id="search-bar"
         class="flex justify-center w-1/2 bg-gray-800 transition-colors duration-1000">
        <form class="w-full">
            <div class="relative text-gray-600 focus-within:text-gray-400">
                <input type="text"
                       name="q"
                       placeholder="Search..."
                       autocomplete="on"
                       v-model.trim="filters.queryString"
                       class="py-2 text-sm w-full text-white bg-gray-800 rounded-md pl-10 focus:outline-none focus:bg-gray-900 focus:text-gray-100" />
                <span class="absolute inset-y-0 right-0 flex items-center pl-2">
                    <button type="submit"
                            class="p-1 focus:outline-none focus:shadow-outline">
                        <ion-icon name="search"
                                  class="text-slate-50 h-6 w-6"></ion-icon>
                    </button>
                </span>
            </div>
        </form>
    </div>
</template>