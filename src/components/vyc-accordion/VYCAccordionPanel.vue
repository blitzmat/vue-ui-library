<script setup lang="ts">
import { computed, inject, nextTick, onBeforeUnmount, onMounted, Ref, ref, watch } from "vue";

const props = withDefaults(defineProps<{
    itemKey: number
    disabled?: boolean
    headerClasses?: string
    bodyClasses?: string
    iconClasses?: string
    activeHeaderClasses?: string
    activeBodyClasses?: string
    activeIconClasses?: string
}>(), {
    iconClasses: '',
})

const noStyles = inject('noStyles') as boolean
const activeItemKey = inject('activeItemKey') as Ref<number>
const setActiveItemKey = inject('setActiveItemKey') as (key: number) => number
const multipleOpen = inject('multipleOpen') as boolean
const scrollToPanel = inject('scrollToPanel') as boolean
const animationSpeed = inject('animationSpeed') as number
const panelsOpen = inject('panelsOpen') as boolean

const isActive = ref<boolean>(true)
const panel = ref<HTMLElement>()
const body = ref<HTMLElement>()
const bodyHeight = ref<number>()
const resizeObserver = ref<ResizeObserver|null>(null);

const computedHeaderClasses = computed(() => {
    if (noStyles) return
    return {
        'flex items-center justify-between border border-black rounded p-2 w-full': true,
    }
})

const computedIconClasses = computed(() => {
    return {
        'transition': true,
        'rotate-180': isActive.value,
        'w-8': !props.iconClasses.length,
    }
})

const computedBodyClasses = computed(() => {
    if (noStyles) return
    return {
        'p-2': true
    }
})

const computedStyles = computed(() => {
    let styles = `transition-duration: ${animationSpeed}ms;`
    if (isActive.value) styles += `height: ${bodyHeight.value}px;`
    else styles += 'height: 0;'
    return styles
})

function activate(): void {
    calculateHeight()
    setActiveItemKey(props.itemKey ?? 0)
    if (multipleOpen) toggleActive(activeItemKey.value)
    if (scrollToPanel) runScrollToPanel()
}
function toggleActive(key:number) {
    // isActive.value = !isActive.value
    if (key == props.itemKey) isActive.value = !isActive.value
    else isActive.value = false
}

function setActive(): void {
    isActive.value = true
}
function unsetActive(): void {
    isActive.value = false
}

function calculateHeight(): void {
    if (window && body.value) {
        const mTop = parseInt(window.getComputedStyle(body.value as Element).marginTop)
        const mBottom = parseInt(window.getComputedStyle(body.value as Element).marginBottom)
        nextTick(() => {
            bodyHeight.value = body.value ? body.value?.offsetHeight + mTop + mBottom : 0
        })
    }
}

function runScrollToPanel(): void {
    if (window) {
        setTimeout(() => {
            window.scrollTo({top: panel.value?.offsetTop, behavior: 'smooth'})
        }, animationSpeed)
    }
}

onBeforeUnmount(() => {
    removeEventListener('resize', calculateHeight)
})

onMounted(() => {
    addEventListener('resize', calculateHeight)
    isActive.value = activeItemKey ? activeItemKey.value == props.itemKey : false
    if (multipleOpen && panelsOpen) isActive.value = true
    if (body.value) {
        resizeObserver.value = new ResizeObserver(() => calculateHeight())
        resizeObserver.value.observe(body.value)
        calculateHeight()
    }
})

watch(activeItemKey, () => {
    if (!multipleOpen) toggleActive(activeItemKey.value)
})

defineExpose({
    calculateHeight,
    body,
    activate,
    setActive,
    unsetActive,
})

</script>

<template>
    <div>
        <button
            v-bind="$attrs"
            ref="panel"
            @click="activate"
            :class="[computedHeaderClasses, headerClasses, isActive ? activeHeaderClasses : '']"
            :disabled="disabled"
        >
            <slot name="header"></slot>
            <div :class="[computedIconClasses, isActive ? activeIconClasses : '', iconClasses]">
                <slot name="header-icon">
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </slot>
            </div>
        </button>
        <div class="overflow-hidden transition-all" :style="computedStyles">
            <div ref="body" :class="[computedBodyClasses, bodyClasses, isActive ? activeBodyClasses : '']">
                <slot name="body"></slot>
            </div>
        </div>
    </div>
</template>
