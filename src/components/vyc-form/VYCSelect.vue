<script setup lang="ts">
import { computed, reactive, ref, useModel } from "vue"

interface Props {
    noStyles?: boolean
    modelValue?: string
    id?: string
    name?: string
    label?: string
    required?: boolean
    error?: string
    classes?: string
    style?: string
    labelClasses?: string
    selectClasses?: string
    focusClasses?: string
    errorClasses?: string
    disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    noStyles: false,
    modelValue: '',
    inline: false,
    required: false,
    classes: '',
    labelClasses: '',
    selectClasses: '',
    focusClasses: '',
})

const emit = defineEmits<{
    'update:modelValue': [event: Event]
}>()

const selectValue = useModel(props, 'modelValue')

const computedClasses = computed(() => {
    if (props.noStyles) return
    return `
        relative border rounded cursor-pointer leading-none bg-white bg-gradient-to-t from-gray-50 to-white
        after:pointer-events-none after:absolute after:right-2 after:w-0 after:h-0 after:top-1/2 after:-translate-y-1/2 after:border-l-8 after:border-r-8 after:border-l-transparent after:border-r-transparent after:border-t-8 after:border-t-black
    `
})

const labelComputedClasses = computed(() => {
    if (props.noStyles) return
    return 'mb-2 px-2 inline-block'
})
const selectComputedClasses = computed(() => {
    if (props.noStyles) return
    return 'peer appearance-none outline-0 bg-transparent border-0 m-0 w-full px-2 py-3 pr-8'
})
const focusComputedClasses = computed(() => {
    if (props.noStyles) return
    return 'peer-focus:absolute peer-focus:left-0 peer-focus:top-0 peer-focus:right-0 peer-focus:bottom-0 peer-focus:border-2 peer-focus:rounded peer-focus:border-black'
})

const errorComputedClasses = computed(() => {
    if (props.noStyles) return
    return 'text-red-500 text-sm'
})


</script>
<template>
    <section>
        <label v-if="label" :for="id" :class="[labelClasses, labelComputedClasses]">{{ label }}</label>
        <div :class="[computedClasses, classes]">
            <select v-model="selectValue" :id="id" :name="name" :required="required" :class="[selectClasses, selectComputedClasses]" :disabled="disabled" :style="style">
                <slot />
            </select>
            <span :class="[focusClasses, focusComputedClasses]"></span>
        </div>
        <p v-if="error" :class="[errorClasses, errorComputedClasses]">{{ error }}</p>
    </section>
</template>

  
