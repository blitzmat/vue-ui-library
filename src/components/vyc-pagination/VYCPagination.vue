<script setup lang="ts">
import { computed, ref, useModel } from "vue";

const props = withDefaults(defineProps<{
    modelValue: number
    noStyles?: boolean
    numberOfPages: number
    displayPages?: number
    paginationClasses?: string
    buttonNextClasses?: string
    buttonPrevClasses?: string
    indicatorClasses?: string
    currentPageClasses?: string
}>(), {
    noStyles: false,
    numberOfPages: 0,
    displayPages: 5,
    currentPageClasses: 'font-bold'
})

const emit = defineEmits<{
    'update:modelValue': [val: number]
}>()

const currentPage = useModel(props, 'modelValue')

const computedPaginationClasses = computed(() => {
    if (props.noStyles) return
    return 'flex items-center gap-2'
})
const computedButtonClasses = computed(() => {
    if (props.noStyles) return
    return 'disabled:text-gray-500'
})
const computedIndicatorClasses = computed(() => {
    if (props.noStyles) return
    return 'mx-2 cursor-pointer'
})

const displayedPages = computed(() => {
    let pages = []
    let offsetCenter = Math.ceil(props.displayPages / 2)
    let offsetStart = currentPage.value - offsetCenter
    let offsetEnd = offsetStart + props.displayPages

    for (let i = 1; i <= props.numberOfPages; i++) {
        pages.push(i)
    }

    if (currentPage.value < offsetCenter) {
        pages = pages.slice(0, props.displayPages)
    } else if (currentPage.value > props.numberOfPages - offsetCenter) {
        pages = pages.slice(props.numberOfPages - props.displayPages, props.numberOfPages)
    } else {
        pages = pages.slice(offsetStart, offsetEnd)
    }
    return pages
})

function isCurrentPage(page: number) {
    return currentPage.value == page ? props.currentPageClasses : ''
}

function setCurrentPage(page: number) {
    currentPage.value = page
}

function prev() {
    if (currentPage.value > 1) {
        currentPage.value--
    }
}

function next() {
    if (currentPage.value < props.numberOfPages) {
        currentPage.value++
    }
}

function begin() {
    currentPage.value = 1
}
function end() {
    currentPage.value = props.numberOfPages
}
</script>

<template>
    <div :class="[computedPaginationClasses, props.paginationClasses]">
        <button :class="[computedButtonClasses, props.buttonPrevClasses]" @click="begin" :disabled="currentPage == 1">
            <slot name="arrow-begin">
                <svg class="w-8 rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m13 16 4-4-4-4M7 16l4-4-4-4" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </slot>
        </button>
        <button :class="[computedButtonClasses, props.buttonPrevClasses]" @click="prev" :disabled="currentPage == 1">
            <slot name="arrow-prev">
                <svg class="w-8" width="100%" height="100%"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 8.5L9.5 12L13 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </slot>
        </button>
        <button v-for="page in displayedPages" :key="page" :class="[computedIndicatorClasses, props.indicatorClasses, isCurrentPage(page)]" @click="setCurrentPage(page)">
            <slot>
                {{ page }}
            </slot>
        </button>
        <button :class="[computedButtonClasses, props.buttonNextClasses]" @click="next" :disabled="currentPage == props.numberOfPages">
            <slot name="arrow-next">

                <svg class="w-8 rotate-180" width="100%" height="100%"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 8.5L9.5 12L13 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </slot>
        </button>
        <button :class="[computedButtonClasses, props.buttonNextClasses]" @click="end" :disabled="currentPage == props.numberOfPages">
            <slot name="arrow-end">
                <svg class="w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m13 16 4-4-4-4M7 16l4-4-4-4" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </slot>
        </button>
    </div>
</template>