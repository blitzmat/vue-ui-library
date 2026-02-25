<script setup lang="ts">
import { computed, ref, useModel, watch } from "vue";

interface Group {
    id?: string,
    name?: string,
    label?: string,
    checked?: boolean
}
interface Props {
    modelValue?: boolean,
    groupValue?: Array<string>,
    groupKey?: keyof Record<string, any>,
    noStyles?: boolean,
    id?: string,
    name?: string,
    label?: string,
    style?: string,
    inputClasses?: string,
    labelClasses?: string,
    group?: Record<string, any>[],
    required?: boolean,
    error?: string
    errorClasses?: string
    class?: string
}
const props = defineProps<Props>()

const checkboxValue = useModel(props, 'modelValue')
const groupVal = useModel(props, 'groupValue')

const emit = defineEmits<{
    'update:modelValue': [event: Event]
    'update:groupValue': [val: Array<string>]
}>()

// const groupVal = ref(props.groupValue)

const classes = computed(() => {
    let style = ''
    if (props.noStyles) return style
    if (props.class) style += `${props.class}`
    style += ' checkbox-wrapper relative'
    return style
})

const inputComputedClasses = computed(() => {
    if (props.noStyles) return ''
    return 'peer appearance-none absolute top-0 left-0 w-5 h-5'
})

const labelComputedClasses = computed(() => {
    if (props.noStyles) return
    return `
        flex items-start justify-start relative text-lg mb-2 leading-snug gap-2
        before:pointer-events-none before:flex before:h-6 before:w-6 before:min-w-[1.5rem] before:border-2 before:border-black before:bg-white
        after:pointer-events-none after:absolute after:top-[7px] after:left-[5px] after:flex after:h-[8px] after:w-[15px] after:border-b-4 after:border-l-4 after:border-black after:bg-none after:rotate-45 after:scale-0 after:transition after:origin-center
        peer-checked:after:-rotate-45 peer-checked:after:scale-[0.8]
    `
})

const errorComputedClasses = computed(() => {
    if (props.noStyles) return
    return 'text-red-500 text-sm'
})


</script>

<template>
    <template v-if="group">
        <div v-for="g in group" :key="g.id" :class="classes">
            <input
                v-model="groupVal"
                :id="g.id"
                type="checkbox"
                :name="g.name"
                :class="[inputComputedClasses, inputClasses]"
                :value="groupKey && groupKey in g ? g[groupKey] : g.name"
                :required="required"
            > 
            <label :for="g.id" :class="[labelComputedClasses, labelClasses]">{{ g.label }}</label>
        </div>
    </template>
    <div v-else :class="classes">
        <input
            v-model="checkboxValue"
            type="checkbox"
            :id="id"
            :name="name"
            :class="[inputComputedClasses, inputClasses]"
            :value="name"
            :required="required"
            :style="style"
        > 
        <label :for="id" :class="[labelComputedClasses, labelClasses]" v-html="label"></label>
    </div>
    <div v-if="error" :class="[errorComputedClasses, errorClasses]">{{ error }}</div>
</template>
