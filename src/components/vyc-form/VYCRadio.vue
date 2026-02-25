<script setup lang="ts">
import { computed, ref, useModel } from "vue";

interface Props {
    modelValue?: string,
    noStyles?: boolean,
    id?: string,
    name?: string,
    label?: string,
    value?: string,
    required?: boolean,
    error?: string,
    style?: string,
    inputClasses?: string,
    labelClasses?: string,
    errorClasses?: string
}

const props = defineProps<Props>()


const radioValue = useModel(props, 'modelValue')

const emit = defineEmits<{
    'update:modelValue': [val: string]
}>()



const computedClasses = computed(() => {
    if (props.noStyles) return
    return 'checkbox-wrapper relative'
})

const inputComputedClasses = computed(() => {
    if (props.noStyles) return
    return 'peer appearance-none absolute top-0 left-0 w-5 h-5 focus:rounded-full'
})

const labelComputedClasses = computed(() => {
    if (props.noStyles) return
    return `
        flex items-start justify-start gap-1 relative text-lg mb-2 leading-snug
        before:pointer-events-none before:flex before:h-6 before:w-6 before:min-w-[1.5rem] before:border-2 before:border-black before:bg-white before:rounded-full
        after:pointer-events-none after:absolute after:top-[6px] after:left-[6px] after:flex after:h-3 after:w-3 after:bg-black after:scale-0 after:transition after:rounded-full
        peer-checked:after:-rotate-45 peer-checked:after:scale-[0.8]
    `
})

const errorComputedClasses = computed(() => {
    if (props.noStyles) return
    return 'text-red-500 text-sm'
})

</script>

<template>
    <div>
        <div :class="computedClasses">
            <input
                v-model="radioValue"
                :id="id"
                type="radio"
                :name="name"
                :value="value"
                :required="required"
                :class="[inputComputedClasses, inputClasses]"
                :style="style"
            > 
            <label :for="id" :class="[labelComputedClasses, labelClasses]">{{ label }}</label>
        </div>
        <div v-if="error" :class="[errorComputedClasses, errorClasses]">{{ error }}</div>
    </div>
</template>
