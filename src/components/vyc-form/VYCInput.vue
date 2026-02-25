<script setup lang="ts">
import { computed, reactive, useModel, useSlots } from 'vue';

interface Props {
    modelValue: string,
    noStyles?: boolean,
    id?: string,
    name?: string,
    type?: string,
    label?: string,
    inline?: boolean,
    error?: string,
    placeholder?: string,
    required?: boolean,
    autocomplete?: string,
    labelClasses?: string,
    inputClasses?: string,
    inputErrorClasses?: string,
    errorClasses?: string,
    prefixClasses?: string,
    affixClasses?: string,
}

const props = withDefaults(defineProps<Props>(), {
    noStyles: false,
    type: 'text',
    inline: false,
    required: false,
})

const emit = defineEmits<{
    'update:modelValue': [val: string]
    'focus': [val: FocusEvent]
    'blur': [val: FocusEvent]
    'keypress': [val: KeyboardEvent]
    'keyup': [val: KeyboardEvent]
    'keydown': [val: KeyboardEvent]
}>()
const inputValue = useModel(props, 'modelValue')

const slots = useSlots()

const classes = computed(() => {
    if (props.noStyles) return
    return {
        'flex flex-row items-center gap-2': props.inline,
        'flex flex-col': !props.inline
    }
})

const labelComputedClasses = computed(() => {
    if (props.noStyles) return
    return 'mb-2 px-2'
})
const inputComputedClasses = computed(() => {
    if (props.noStyles) return
    return {
        'w-full px-4 py-2 border': true,
        'pl-8': slots.prefix,
        'pr-8': slots.affix
    }
})
const errorComputedClasses = computed(() => {
    if (props.noStyles) return
    return 'text-red-500 text-sm'
})
const prefixComputedClasses = computed(() => {
    return 'absolute left-3 top-1/2 -translate-y-1/2'
})
const affixComputedClasses = computed(() => {
    return 'absolute right-3 top-1/2 -translate-y-1/2'
})

</script>

<template>
    <div v-bind="$attrs" :class="classes">
        <label v-if="label"
            :for="id"
            :class="[labelClasses, labelComputedClasses]">
            {{ label }}
        </label>
        <div class="relative">
            <div v-if="slots.prefix" :class="[prefixComputedClasses, prefixClasses]">
                <slot name="prefix" />
            </div>
            <input
                v-model="inputValue"
                :id="id"
                :name="name ?? id"
                :type="type"
                :class="[inputClasses, inputComputedClasses, error ? inputErrorClasses : null]"
                :placeholder="placeholder"
                :required="required"
                :autocomplete="autocomplete"
                @blur="event => emit('blur', event)"
                @focus="event => emit('focus', event)"
                @keypress="event => emit('keypress', event)"
                @keyup="event => emit('keyup', event)"
                @keydown="event => emit('keydown', event)"
            />
            <div v-if="slots.affix" :class="[affixComputedClasses, affixClasses]">
                <slot name="affix" />
            </div>
        </div>
        <p v-if="error" :class="[errorClasses, errorComputedClasses]">{{ error }}</p>
    </div>
</template>

