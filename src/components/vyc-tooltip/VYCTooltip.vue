<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

const props = withDefaults(defineProps<{
    noStyles?: boolean
    modelValue: boolean
    offset?: number
    click?: boolean
    direction?: string
    positionX?: string
    positionY?: string
    tooltipClasses?: string
    tooltipArrowClasses?: string
}>(), {
    noStyles: false,
    modelValue: false,
    offset: 5,
    click: false,
    direction: 'top',
    positionX: 'center',
    positionY: 'center'
})

const isActive = ref<boolean>(props.modelValue)
const tooltipAction = ref()
const tooltip = ref()

const computedTooltipClasses = computed(() => {
    return {
        'bg-gray-300 p-2 rounded shadow-sm': !props.noStyles,
        '-translate-y-full -translate-x-1/2': props.direction === 'top' && props.positionX === 'center',
        '-translate-y-full': props.direction === 'top' && props.positionX === 'left' || props.direction === 'right' && props.positionY === 'bottom',
        '-translate-y-full -translate-x-full': props.direction === 'top' && props.positionX === 'right',
        '-translate-x-1/2': props.direction === 'bottom' && props.positionX === 'center',
        '-translate-x-full': props.direction === 'bottom' && props.positionX === 'right' || props.direction === 'left' && props.positionY === 'top',
        '-translate-x-full -translate-y-1/2': props.direction === 'left' && props.positionY === 'center',
        '-translate-x-full -translate-y-full': props.direction === 'left' && props.positionY === 'bottom',
        '-translate-y-1/2': props.direction === 'right' && props.positionY === 'center',
    }
})
const computedTooltipArrowClasses = computed(() => {
    if (props.noStyles) return
    return {
        'text-gray-300 w-3 h-auto absolute': true,
        'bottom-1 translate-y-full left-1/2 -translate-x-1/2': props.direction === 'top' && props.positionX === 'center',
        'bottom-1 translate-y-full': props.direction === 'top' && props.positionX === 'left',
        'bottom-1 translate-y-full right-2': props.direction === 'top' && props.positionX === 'right',
        'top-1 -translate-y-full left-1/2 -translate-x-1/2 rotate-180': props.direction === 'bottom' && props.positionX === 'center',
        'top-1 -translate-y-full rotate-180': props.direction === 'bottom' && props.positionX === 'left',
        'top-1 -translate-y-full right-2 rotate-180': props.direction === 'bottom' && props.positionX === 'right',
        'top-1/2 -translate-y-1/2 -right-[8px] -rotate-90': props.direction === 'left' && props.positionY === 'center',
        'top-2 -right-[8px] -rotate-90': props.direction === 'left' && props.positionY === 'top',
        'bottom-2 -right-[8px] -rotate-90': props.direction === 'left' && props.positionY === 'bottom',
        'top-1/2 -translate-y-1/2 left-1 -translate-x-full rotate-90': props.direction === 'right' && props.positionY === 'center',
        'top-2 left-1 -translate-x-full rotate-90': props.direction === 'right' && props.positionY === 'top',
        'bottom-2 left-1 -translate-x-full rotate-90': props.direction === 'right' && props.positionY === 'bottom',
    }
})

onMounted(() => {
    setTooltipPosition()
})

function setTooltipPosition() {
    if (props.direction === 'top') {
        tooltip.value?.style.setProperty('top', `${tooltipAction.value?.offsetTop - props.offset}px`)
        if (props.positionX === 'center') {
            tooltip.value?.style.setProperty('left', `${tooltipAction.value?.offsetLeft + tooltipAction.value?.offsetWidth / 2}px`)
        }
        if (props.positionX === 'left') {
            tooltip.value?.style.setProperty('left', `${tooltipAction.value?.offsetLeft}px`)
        }
        if (props.positionX === 'right') {
            tooltip.value?.style.setProperty('left', `${tooltipAction.value?.offsetLeft + tooltipAction.value?.offsetWidth}px`)
        }
    } else if (props.direction === 'bottom') {
        tooltip.value?.style.setProperty('top', `${tooltipAction.value?.offsetTop + tooltipAction.value?.offsetHeight + props.offset}px`)
        if (props.positionX === 'center') {
            tooltip.value?.style.setProperty('left', `${tooltipAction.value?.offsetLeft + tooltipAction.value?.offsetWidth / 2}px`)
        }
        if (props.positionX === 'left') {
            tooltip.value?.style.setProperty('left', `${tooltipAction.value?.offsetLeft}px`)
        }
        if (props.positionX === 'right') {
            tooltip.value?.style.setProperty('left', `${tooltipAction.value?.offsetLeft + tooltipAction.value?.offsetWidth}px`)
        }
    } else if (props.direction === 'left') {
        tooltip.value?.style.setProperty('left', `${tooltipAction.value?.offsetLeft - props.offset}px`)
        if (props.positionY === 'center') {
            tooltip.value?.style.setProperty('top', `${tooltipAction.value?.offsetTop + tooltipAction.value?.offsetHeight / 2}px`)
        }
        if (props.positionY === 'top') {
            tooltip.value?.style.setProperty('top', `${tooltipAction.value?.offsetTop}px`)
        }
        if (props.positionY === 'bottom') {
            tooltip.value?.style.setProperty('top', `${tooltipAction.value?.offsetTop + tooltipAction.value?.offsetHeight}px`)
        }
    } else if (props.direction === 'right') {
        tooltip.value?.style.setProperty('left', `${tooltipAction.value?.offsetLeft + tooltipAction.value?.offsetWidth + props.offset}px`)
        if (props.positionY === 'center') {
            tooltip.value?.style.setProperty('top', `${tooltipAction.value?.offsetTop + tooltipAction.value?.offsetHeight / 2}px`)
        }
        if (props.positionY === 'top') {
            tooltip.value?.style.setProperty('top', `${tooltipAction.value?.offsetTop}px`)
        }
        if (props.positionY === 'bottom') {
            tooltip.value?.style.setProperty('top', `${tooltipAction.value?.offsetTop + tooltipAction.value?.offsetHeight}px`)
        }
    } else {
        return
    }
}

function onClick() {
    if (props.click) isActive.value = !isActive.value
}

function onMouseOver() {
    if (!props.click) isActive.value = true
}

function onMouseOut() {
    if (!props.click) isActive.value = false
}


</script>

<template>
    <div class="inline-block" ref="tooltipAction" @click="onClick" @mouseover="onMouseOver" @mouseout="onMouseOut">
        <slot name="trigger">Trigger</slot>
    </div>
    <Transition name="fade">
        <div ref="tooltip" v-show="isActive" :class="['absolute', computedTooltipClasses, tooltipClasses]">
            <slot>Target</slot>
            <svg v-if="!props.noStyles" :class="[computedTooltipArrowClasses, tooltipArrowClasses]" fill="currentColor" height="100%" width="100%" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 386.257 386.257" xml:space="preserve">
                <polygon points="0,96.879 193.129,289.379 386.257,96.879 "/>
            </svg>
        </div>
    </Transition>
</template>