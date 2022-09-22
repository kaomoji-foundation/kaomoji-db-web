<script setup lang="ts">
import { notificationsStore } from '@/stores/notifications';
import type { Kaomoji } from '@/types/kaomoji';

const props = defineProps<{
    kaomoji: Kaomoji
}>()

const canCopy = !!navigator.clipboard

let notificator = notificationsStore()
async function copy() {
    if (canCopy) {
        await navigator.clipboard.writeText(props.kaomoji.string)
        console.info(`[copied]: ${props.kaomoji.string}`)
        notificator.emit({ msg: `Copied!: ${props.kaomoji.string}`, type: 'sucess' })
    } else {
        notificator.emit({ msg: `Could not copy: ${props.kaomoji.string}`, type: 'error' })
    }
}
</script>

<template>
    <a class="before:h-16 before:-mt-16 before:invisible before:block
        relative mx-2 my-1 px-3 flex flex-col flex-grow items-center justify-around
   min-w-max min-h-[8.5em] w-fit h-fit bg-gray-900 rounded-2xl font-NottoSansJP text-slate-100
   border-2 hover:border-teal-800 focus:border-teal-800 border-transparent"
       v-on:click="copy()">
        <span class="min-h-[2em] max-h-fit min-w-max mb-3 mt-6 mx-auto px-4 text-sm
     md:text-lg xl:text-xl font-NottoSansJP whitespace-nowrap text-clip overflow-scroll">
            {{ kaomoji.string }}
        </span>
        <div class="flex flex-col items-center w-full">
            <div class="w-full mx-7 h-1 my-0 bg-gray-500 rounded-full">
                <!-- separator -->
            </div>

            <div class="w-full h-fit mx-2 my-1 flex flex-row flex-wrap items-start justify-start">
                <!-- All kaomoji keys go here -->
                <span class="bg-teal-800 text-slate-200 text-xs md:text-sm 
            px-2 py-[0.025rem] mx-0.5 my-1 h-fit rounded-full"
                      v-for="cat in kaomoji.categories"
                      :key="cat">
                    {{ cat }}
                </span>
            </div>
        </div>
    </a>
</template>
