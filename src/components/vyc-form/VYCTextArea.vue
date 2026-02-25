<script setup lang="ts">
import { computed, useModel } from 'vue';

interface Props {
    modelValue?: string,
    noStyles?: boolean,
    id?: string,
    label?: string,
    placeholder?: string,
    inline?: boolean,
    error?: string,
    style?: string,
    required?: boolean,
    labelClasses?: string,
    textAreaClasses?: string,
    errorClasses?: string,
}

const props = withDefaults(defineProps<Props>(), {
    noStyles: false,
    required: false,
    inline: false
})

const emit = defineEmits<{
    'update:modelValue': [val: string]
}>()

const textAreaValue = useModel(props, 'modelValue')

const classes = computed(() => {
    if (props.noStyles) return
    return !props.inline ? 'flex flex-col' : 'flex flex-row items-center gap-2'
})

const labelComputedClasses = computed(() => {
    if (props.noStyles) return
    return 'mb-2 px-2'
})
const textAreaComputedClasses = computed(() => {
    if (props.noStyles) return
    return 'mb-2 px-4 py-2 border'
})
const errorComputedClasses = computed(() => {
    if (props.noStyles) return
    return 'text-red-500 text-sm'
})


</script>

<template>
    <div :class="classes">
        <label v-if="label"
            :for="id"
            :class="[labelClasses, labelComputedClasses]">
            {{ label }}
        </label>
        <textarea
            v-model="textAreaValue"
            :id="id"
            :name="id"
            :class="[textAreaClasses, textAreaComputedClasses]"
            :required="required"
            :placeholder="placeholder"
            :style="style"
        >
        </textarea>
        <p v-if="error" :class="[errorClasses, errorComputedClasses]">{{ error }}</p>
    </div>
</template>

