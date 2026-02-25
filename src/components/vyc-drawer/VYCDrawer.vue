
<script setup lang="ts">
import { computed, ref, watch } from "vue"

const props = withDefaults(defineProps<{
    active?: boolean
    position?: string
    transition?: string
    overlayClasses?: string
    drawerClasses?: string
}>(), {
    active: false,
    position: 'left',
    transition: 'slide-from-left',
    drawerClasses: 'bg-white'
})

const isActive = ref<boolean>(props.active)

const transition = computed(() => {
    if (props.position == 'left') return 'slide-from-left'
    if (props.position == 'right') return 'slide-from-right'
    if (props.position == 'top') return 'slide-from-top'
    if (props.position == 'bottom') return 'slide-from-bottom'
})

const computedOverlayClasses = computed(() => {
    return 'fixed inset-0 bg-black bg-opacity-50 z-40'
})

const computedDrawerClasses = computed(() => {
    return {
        'fixed z-50 p-4': true,
        'top-0 left-0 h-full': props.position == 'left',
        'top-0 right-0 h-full': props.position == 'right',
        'top-0 left-0 w-full': props.position == 'top',
        'bottom-0 left-0 w-full': props.position == 'bottom',
    }
})

function close() {
    isActive.value = false
}

defineExpose({
    close
})

</script>

<template>
    <span @click="isActive = true">
        <slot name="trigger">
            <button>Open</button>
        </slot>
    </span>
    <div v-if="isActive" :class="[computedOverlayClasses, overlayClasses]" @click="isActive = false"></div>
    <Transition :name="transition">
        <div v-if="isActive" :class="[computedDrawerClasses, drawerClasses]">
            <slot></slot>
        </div>
    </Transition>
</template>