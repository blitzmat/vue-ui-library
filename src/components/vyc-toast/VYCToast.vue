<script setup lang="ts">
import { computed, ref, watch } from "vue"


const props = withDefaults(defineProps<{
    noStyles?: boolean
    modelValue: boolean
    positionX?: string
    positionY?: string
    offset?: number
    duration?: number
    persist?: boolean
    toastClasses?: string
}>(), {
    noStyles: false,
    modelValue: false,
    positionX: 'right',
    positionY: 'bottom',
    offset: 20,
    duration: 5000,
    persist: false,
    toastClasses: 'bg-gray-600 text-white'
})

const emit = defineEmits<{
    change: [val: boolean]
}>()

const isActive = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('change', value)
    }
})

const transitionDirection = computed(() => {
    let direction = 'slide-from-bottom'
    if (props.positionY === 'top') direction = 'slide-from-top'
    return direction
})

const computedToastClasses = computed(() => {
    return {
        'fixed z-100': true,
        'px-4 py-2 rounded flex gap-2 items-center': props.noStyles,
        'top-0': props.positionY === 'top',
        'bottom-0': props.positionY === 'bottom',
        'top-1/2 -translate-y-1/2': props.positionY === 'center',
        'left-0': props.positionX === 'left',
        'right-0': props.positionX === 'right',
        'left-1/2 -translate-x-1/2': props.positionX === 'center',
    }
})

function setTimer() {
    setTimeout(() => {
        onClose()
    }, props.duration)
}

function onClose() {
    isActive.value = false
}

watch(isActive, () => {
    if (isActive.value && !props.persist) setTimer()
})


</script>

<template>
    <Transition :name="transitionDirection">
        <div v-if="isActive" :class="[computedToastClasses, toastClasses]" :style="`margin: ${props.offset}px;`">
            <slot></slot>
            <button @click="onClose">
                <svg class="w-4" width="100%" height="100%" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/></svg>
            </button>
        </div>
    </Transition>
</template>