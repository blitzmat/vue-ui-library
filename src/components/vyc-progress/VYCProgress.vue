<script setup lang="ts">
import { computed, onMounted, ref } from "vue"


const props = withDefaults(defineProps<{
    steps?: Array<string>
    progress?: number
    trackHeight?: string
    trackClasses?: string
    indicatorClasses?: string
    stepClasses?: string
    activeStepClasses?: string
}>(), {
    progress: 0,
    trackHeight: '5px',
    trackClasses: 'bg-gray-300',
    indicatorClasses: 'bg-gray-500',
    stepClasses: 'rounded-full w-6 h-6 bg-gray-300',
    activeStepClasses: 'bg-gray-500 text-white'
})


const stepPercent = computed(() => props.steps ? ((props.steps?.length-1) * 100 / (props.steps?.length-1)) / (props.steps?.length-1) : 0)

const computedTrackClasses = computed(() => {
    return 'h-1'
})

const computedIndicatorClasses = computed(() => {
    return 'absolute top-0 left-0 '
})
const computedIndicatorStyles = computed(() => {
    return `height: ${props.trackHeight}; width: ${props.progress}%`
})

const computedStepClasses = computed(() => {
    return 'flex justify-center items-center m-0'
})


function setCurrentStep(value: number) {
    let stepProgress = stepPercent.value * (value)
    if (stepProgress <= props.progress) {
        return props.activeStepClasses
    }
}

</script>

<template>
    <div class="relative">
        <div :class="[computedTrackClasses, trackClasses]"></div>
        <div :class="[computedIndicatorClasses, indicatorClasses]" :style="computedIndicatorStyles"></div>
        <ul v-if="props.steps" class="absolute top-1/2 -translate-y-1/2 w-full flex justify-between">
            <li :class="[computedStepClasses, props.stepClasses, setCurrentStep(index)]" v-for="(step, index) in props.steps" :key="index">
                <slot><span>{{ step }}</span></slot>
            </li>
        </ul>
    </div>
</template>