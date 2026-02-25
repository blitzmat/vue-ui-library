<script setup lang="ts">
import { ref } from "vue"


interface Props {
    action?: string,
    customValidation?: boolean
    serverValidation?: boolean
}
const props = defineProps<Props>()

const emit = defineEmits<{
    'failed': [val: object|any],
    'success': [val: object|any],
    'submit': [],
}>()

const formData = ref<{[index: string]:any}>({})
const errors = ref<{[index: string]:any}>({})

function onSubmit(e: Event) {

    validate(e.target as Element)

    if (Object.keys(errors.value).length > 0) {
        emit('failed', errors.value)
        return
    }

    if (props.serverValidation) {
        emit('submit')
        return
    }
    emit('success', formData.value)

}

function validate(el:Element) {
    for (let i = 0; i < el.children.length; i++) {
        const element = el.children[i]
        validateField(element)
    }
}
let currentGroup: string = ''
let radioGroup: Array<HTMLInputElement> = []

function validateField(element: Element) {

    if (element.nodeName == 'INPUT')  {
        const input = element as HTMLInputElement
        if (input.required) {
            const name = dashToCamelCase(input.name)
            const title = dashToTitleCase(input.name)
            if (input.type == 'text' || input.type == 'email' || input.type == 'number' || input.type == 'password') {
                if (!input.value) {
                    errors.value[name] = `${title} field is required`
                } else {
                    formData.value[name] = input.value
                    delete errors.value[name]
                }
            } else if (input.type == 'radio') {
                if (currentGroup != name) {
                    radioGroup = []
                } else {
                    if (radioGroup.length) return
                }
                currentGroup = name
                
                if (input.checked) {
                    radioGroup.push(input)
                    formData.value[name] = input.value
                    delete errors.value[name]
                } else if (!input.checked) {
                    errors.value[name] = `${title} field is required`
                }
            } else if (input.type == 'checkbox') {
                if (!input.checked) {
                    errors.value[name] = `${title} field is required`
                } else {
                    formData.value[name] = true
                    delete errors.value[name]
                }
            }
        }
    }
    else if (element.nodeName == 'TEXTAREA') {
        const textArea = element as HTMLTextAreaElement
        if (textArea.required) {
            const name = dashToCamelCase(textArea.name)
            const title = dashToTitleCase(textArea.name)
            if (!textArea.value) {
                errors.value[name] = `${title} field is required`
            } else {
                formData.value[name] = textArea.value
                delete errors.value[name]
            }
        }
    }
    else if (element.nodeName == 'SELECT') {
        const select = element as HTMLSelectElement
        if (select.required) {
            const name = dashToCamelCase(select.name)
            const title = dashToTitleCase(select.name)
            if (!select.value) {
                errors.value[name] = `${title} field is required`
            } else {
                formData.value[name] = select.value
                delete errors.value[name]
            }
        }
    }
    else {
        validate(element as Element)
    }
    if (Object.keys(errors.value).length > 0) {
        emit('failed', errors.value)
    } else {
        emit('success', formData.value)
    }
}

function dashToCamelCase(input: string) { 
    return input.toLowerCase().replace(/-(.)/g, function(match, group) {
        return group.toUpperCase();
    });
}
function dashToTitleCase(input: string) {
    return input.toLowerCase().replace(/(?:^|[\s-/])\w/g, function (match) {
        return match.toUpperCase().replace(/-|_/, ' ');
    });
}

defineExpose({
    validateField
})
</script>

<template>
<form :action="props.action ?? 'POST'" @submit.prevent="onSubmit($event)" :novalidate="customValidation" >
    <slot/>
</form>    
</template>
