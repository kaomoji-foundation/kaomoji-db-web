<script setup lang="ts">
import { filtersStore } from "@/stores/filters";
import router from "@/router";
import { ref } from "vue";


let filters = filtersStore()

let query = router.currentRoute.value.params.q
if (typeof query == "string") {
    filters.queryString = query
}

const searchBar = ref<HTMLInputElement | null>(null)

function focusSearchBar() {
    if (searchBar.value) {
        searchBar.value.focus()
    }
}

function focusTop() {
    setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }, 200
    )
}

</script>

<template>
    <div id="search-bar"
         class="flex justify-center w-1/2 bg-gray-800">
        <form method="dialog"
              class="w-full">
            <div class="relative text-gray-600 transition-colors duration-300 focus-within:text-gray-400">
                <input type="text"
                       name="q"
                       placeholder="Search..."
                       autocomplete="on"
                       v-model.trim="filters.queryString"
                       v-on:input="focusTop()"
                       ref="searchBar"
                       class="py-2 pl-10 w-full text-sm text-white bg-gray-800 rounded-md transition-colors duration-300 focus:outline-none focus:bg-gray-900 focus:text-gray-100" />
                <span class="flex absolute inset-y-0 right-0 items-center pl-2">
                    <button type="button"
                            v-if="!filters.queryString"
                            v-on:click="focusSearchBar()"
                            class="p-1 my-v-center focus:outline-none focus:shadow-outline">
                        <ion-icon name="search"
                                  class="w-6 h-6 text-slate-50"></ion-icon>
                    </button>
                    <button type="button"
                            v-if="filters.queryString"
                            v-on:click="filters.queryString = ''"
                            class="p-1 my-v-center focus:outline-none focus:shadow-outline">
                        <ion-icon name="close"
                                  class="w-6 h-6 text-slate-50"></ion-icon>
                    </button>
                </span>
            </div>
        </form>
    </div>
</template>