<script setup lang="ts">
import { computed } from 'vue';

const SIZES = { SM:'sm', BASE:'base', MD:'md', LG:'lg', FULL: 'full'}

interface Props {
    noStyles?: boolean
    noHover?: boolean
    elevated?: string
    outlined?: boolean
    rounded?: string
    flat?: boolean
    plain?: boolean
    loading?: boolean
    loadingNoText?: boolean
    prepend?: boolean
    append?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    noStyles: false,
    noHover: false,
    elevated: '',
    outlined: false,
    rounded: '',
    flat: false,
    plain: false,
    loading: false,
    loadingNoText: false,
    prepend: false,
    append: false,
});


const computedClasses = computed(() => {
    if (props.noStyles) return
    return {
        'bg-neutral-300': !props.plain,
        'py-2 px-4': !props.flat,
        'hover:bg-neutral-200 transition-colors': !props.noHover,
        'bg-transparent': props.flat,
        'border border-current-color': props.outlined,
        'shadow-sm': props.elevated == SIZES.SM,
        'shadow': props.elevated == SIZES.BASE,
        'shadow-md': props.elevated == SIZES.MD,
        'shadow-lg': props.elevated == SIZES.LG,
        'rounded-sm': props.rounded == SIZES.SM,
        'rounded': props.rounded == SIZES.BASE,
        'rounded-md': props.rounded == SIZES.MD,
        'rounded-lg': props.rounded == SIZES.LG,
        'rounded-full': props.rounded == SIZES.FULL,
        'flex gap-1 items-center': props.prepend || props.append || props.loading
    }
})

</script>

<template>
    <button v-bind="$attrs" :class="computedClasses" :disabled="loading">
        <slot v-if="loading && prepend" name="loading">
            <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </slot>
        <template v-if="!loadingNoText">
            <slot v-if="prepend" name="icon"></slot>            
            <slot />
            <slot v-if="append" name="icon"></slot>
        </template>
        <slot v-if="loading && append" name="loading">
            <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </slot>
    </button>
</template>

<style>
.border-current-color {
    border-color: currentColor;
}
</style>