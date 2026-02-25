<script setup lang="ts">
import { VYCTabType } from "@/types";
import { computed, getCurrentInstance, onMounted, provide, ref, watch } from "vue"

const props = withDefaults(defineProps<{
    noStyles?: boolean,
    active?: number,
    wrapperClasses?: string,
    tabTitleWrapperClasses?: string,
    tabTitleClasses?: string,
    tabTitleActiveClasses?: string
    tabContentClasses?: string
    wrap?: boolean
}>(), {
    noStyles: false,
    active: 0
})

const emit = defineEmits<{
    'update': [val: number]
}>()

const tabs = ref<Array<VYCTabType>>([])
const activeTab = ref<number>(props.active)

const activate = function(index: number) {
    activeTab.value = index
    emit('update', activeTab.value)
}

const computedWrapperClasses = computed(() => {
    return {
        'flex': props.wrap
    }
})
const computedTabTitleWrapperClasses = computed(() => {
    return {
        'flex': true,
        'gap-1': !props.noStyles,
        'flex-col': props.wrap
    }
})
const computedTabTitleClasses = computed(() => {
    return {
        'cursor-pointer border-black p-3': !props.noStyles,
        'border-t border-l border-b': !props.noStyles && props.wrap,
        'border-t border-l border-r ': !props.noStyles && !props.wrap,
    }
})
const computedActiveTabTitleClasses = computed(() => {
    return {
        'bg-white -mb-[1px]': !props.noStyles,
        'mb-0': !props.noStyles && props.wrap,
    }
})
const computedTabContentClasses = computed(() => {
    if (props.noStyles) return
    return 'border p-3 border-black bg-white'
})

onMounted(() => {
    tabs.value[activeTab.value].active = true
})

// const instance: any = getCurrentInstance();

provide('addTab', (tab:VYCTabType) => {
    tabs.value.push(tab)
    // instance?.ctx.$forceUpdate();
})

watch(() => activeTab.value, () => {
    tabs.value.forEach(tab => tab.active = false)
    tabs.value[activeTab.value].active = true
})

defineExpose({
    activate,
    activeTab
})

</script>

<template>
    <section :class="[computedWrapperClasses, wrapperClasses]">
        <div :class="[computedTabTitleWrapperClasses, tabTitleWrapperClasses]">
            <slot name="tabs">
                <div
                    v-for="(t, i) in tabs"
                    :key="i" @click="activate(i)"
                    :class="[computedTabTitleClasses, tabTitleClasses, activeTab != i ? '' : [computedActiveTabTitleClasses, tabTitleActiveClasses]]"
                >
                    {{ t.name }}
                </div>
            </slot>
        </div>
        <div :class="[computedTabContentClasses, tabContentClasses]">
            <slot />
        </div>
    </section>
</template>
