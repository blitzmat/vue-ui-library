<script setup lang="ts">
import { provide, ref } from "vue";

const props = withDefaults(defineProps<{
    noStyles?: boolean,
    activeItemKey?: number,
    multipleOpen?: boolean,
    panelsOpen?: boolean,
    scrollToPanel?: boolean,
    animationSpeed?: number,
    class?: string
}>(),{
    noStyles: false,
    activeItemKey: 1,
    multipleOpen: false,
    scrollToPanel: false,
    animationSpeed: 300,
})

const emit = defineEmits<{
    (e: 'update'): void
}>()

const activeItem = ref(props.activeItemKey)

function setActiveItemKey(key:number) {
    setTimeout(() => emit('update'), props.animationSpeed)
    activeItem.value = key
    return activeItem.value
}

provide('noStyles', props.noStyles)
provide('activeItemKey', activeItem)
provide('setActiveItemKey', setActiveItemKey)
provide('multipleOpen', props.multipleOpen)
provide('scrollToPanel', props.scrollToPanel)
provide('animationSpeed', props.animationSpeed)
provide('panelsOpen', props.panelsOpen)

defineExpose({
    setActiveItemKey
})


</script>

<template>
    <section :class="props.class">
        <slot></slot>
    </section>
</template>
