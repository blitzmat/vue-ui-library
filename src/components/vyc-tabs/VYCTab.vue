<template>
    <section v-if="isActive">
        <slot />
    </section>
</template>

<script setup lang="ts">
import { VYCTabType } from "@/types"
import { computed, inject, onBeforeMount, ref } from "vue"

const props = withDefaults(defineProps<VYCTabType>(), {
    name: 'No tab name',
    active: false
})

const _tab = ref<VYCTabType>()
const addTab = inject('addTab') as Function

const isActive = computed(() => {
    if (_tab.value?.active) return _tab.value?.active
    return props.active
})


onBeforeMount(() => {
    _tab.value = {
        name: props.name,
        active: props.active,
        index: props.index
    }
    addTab(_tab.value)
})


</script>