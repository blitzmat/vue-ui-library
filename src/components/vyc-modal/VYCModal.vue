<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue"
import { onBeforeRouteLeave } from "vue-router";

const props = withDefaults(defineProps<{
    modelValue: boolean,
    transition?: string,
    overlayClasses?: string,
    modalClasses?: string,
    modalHeaderClasses?: string,
    closeBtnClasses?: string,
    closeWithHash?: string,
}>(), {
    modelValue: false,
    transition: 'fade',
})

const emit = defineEmits<{
    'close': [val: boolean]
}>()

const browserHash = ref<string>(typeof window === "undefined" ? '' : window.location.hash)
const urlHash = computed(() => {
    return browserHash.value
})

function close() {
    emit('close', false)
}

function toggleOverflowHidden(val: boolean) {
    if (val) document.body.classList.add('overflow-hidden')
    else document.body.classList.remove('overflow-hidden')
}

function keyboardEvents(event:KeyboardEvent) {
    if (event.code == 'Escape') close()
}

function handleHashChange() {
    browserHash.value = location.hash;
}

const computedOverlayClasses = computed(() => {
    return {
        'fixed w-screen h-screen top-0 left-0 z-40': true,
        'bg-black/80': !props.overlayClasses
    }
})

const computedModalClasses = computed(() => {
    return {
        'z-50 fixed overflow-y-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 before:block': true,
        'w-full h-full': !props.modalClasses,
        'bg-white max-w-6xl max-h-fit p-4 rounded': !props.modalClasses
    }
})

const computedBtnClasses = computed(() => {
    return {
        'w-8 absolute top-0 right-0': true,
    }
})

const isOpen = computed(() => {
    return props.modelValue
})

watch(isOpen, (val) => {
    toggleOverflowHidden(val)
})

watch(urlHash, (val) => {
    const url = val.replace('#', '')
    const hash = props.closeWithHash?.replace('#', '')
    if (hash === url) {
        location.hash = ''
        close()
    }
})

onMounted(() => {
    document.addEventListener('keydown', (event) => keyboardEvents(event))
    window.addEventListener('hashchange', handleHashChange)
    handleHashChange();

})

onBeforeUnmount(() => {
    document.removeEventListener('keydown', (event) => keyboardEvents(event))
    window.removeEventListener('hashchange', handleHashChange)
    toggleOverflowHidden(false)
})
</script>

<template>
    <Transition name="fade">
        <div v-if="props.modelValue" @click="close" :class="[computedOverlayClasses, overlayClasses]"></div>
    </Transition>
    <Transition :name="transition">
        <template v-if="props.modelValue">
            <div :class="[computedModalClasses, modalClasses]">
                <div :class="['flex ', modalHeaderClasses]">
                    <div class="flex-1">
                        <slot name="header"></slot>
                    </div>
                    <button :class="[computedBtnClasses, closeBtnClasses]" @click="close">
                        <slot name="close-btn">
                            <svg width="100%" height="100%" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/>
                            </svg>
                        </slot>
                    </button>
                </div>
                <slot/>
            </div>
        </template>
    </Transition>
</template>
