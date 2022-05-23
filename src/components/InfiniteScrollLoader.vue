<script setup lang="ts" >
import { onMounted, ref, reactive } from "vue";

const props = defineProps<{
    loaderFn: () => Promise<boolean>,
    scrollElementSelector: string,
}>()

const emit = defineEmits(['trigger']);

let options: IntersectionObserverInit = {
    root: document.querySelector(props.scrollElementSelector),
    rootMargin: '0px',
    threshold: 1.0,
}

let state = reactive({ depleated: false }) // true when all the data is loaded

const observerCallback = async (entries: Array<IntersectionObserverEntry>) => {
    state.depleated = await props.loaderFn()
}

let observer = new IntersectionObserver(observerCallback, options);

let infiniteScrollSpinner = ref(null)

onMounted(() => {
    if (infiniteScrollSpinner.value) {
        observer.observe(infiniteScrollSpinner.value);
    }
})
</script>
<template>
    <div class="w-auto p-0 m-0 mx-v-center min-h-[10rem] flex
    flex-col items-center justify-center align-middle font-NottoSansJP">
        <div v-if="!state.depleated"
             id="infinite-scroll-spinner"
             ref="infiniteScrollSpinner"
             class="animate-spin-2 text-slate-50 text-center w-fit h-full h mx-v-center">
            (ノಠ益ಠ)ノ
        </div>
        <!-- end of list -->
        <div v-if="state.depleated"
             id="infinite-scroll-eol"
             ref="infiniteScrollEOL"
             class="text-slate-50 text-center w-fit h-full mx-v-center flex flex-col">
            <span class="text-4xl font-normal">
                ¯\_(シ)_/¯
            </span>
            <span class="mt-1 flex">
                <span class="hidden sm:block">
                    This is the end I guess
                </span>
                <span class="ml-2 font-bold">
                    There are no more results
                </span>
            </span>
        </div>

    </div>
</template>