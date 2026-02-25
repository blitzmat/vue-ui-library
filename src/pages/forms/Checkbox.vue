<script setup lang="ts">
import { VYCCheckbox } from "@/components";
import { ref } from "vue";

const checkboxValue1 = ref<boolean>(true)
const checkboxValue2 = ref<Array<string>>(['Input 1'])
const checkboxGroup = [
    {
        id: 'input-1',
        name: 'Input 1',
        label: 'Input 1',
    },
    {
        id: 'input-2',
        name: 'Input 2',
        label: 'Input 2',
    }
]

</script>

<template>
    <h1 class="h1">Input Checkbox</h1>
    <hr class="hr">

    <form action="">
        <h2 class="h2">Input checkbox with no styles</h2>
        <VYCCheckbox 
            v-model="checkboxValue1"
            id="input-checkbox"
            name="Input checkbox"
            label="<p>Input checkbox</p>"

            no-styles />
        {{ checkboxValue1 }}

        <h2 class="h2">Input checkbox with default styles</h2>
        <VYCCheckbox 
            v-model="checkboxValue1"
            id="input-checkbox"
            name="Input checkbox"
            label="<p>Input checkbox</p>"
            />
        {{ checkboxValue1 }}

        <h2 class="h2">Default grouped checkboxes</h2>
        <div class="flex gap-4">
            <VYCCheckbox
                v-model:group-value="checkboxValue2"
                :group="checkboxGroup"
                groupKey="asj"
            />
        </div>
        {{ checkboxValue2 }}

        <hr>
        <h2 class="h1">Properties</h2>

        <div class="property">
            name: modelValue<br>
            type: boolean<br>
            default: false<br>
            description: value for the checkbox
        </div>
        <div class="property">
            name: groupValue<br>
            type: string[]<br>
            default: []<br>
            description: values for the group of checkboxes
        </div>
        <div class="property">
            name: groupKey<br>
            type: string<br>
            default: name<br>
            description: The key of the group object that should be used as the value. eg. user = { id: 1, title: 'Pieter' }
        </div>
        <div class="property">
            name: id<br>
            type: string<br>
            description: adds id for the checkbox
        </div>
        <div class="property">
            name: name<br>
            type: string<br>
            description: Name attribute for the checkbox
        </div>
        <div class="property">
            name: label<br>
            type: string<br>
            description: Label for the checkbox
        </div>
        <div class="property">
            name: required<br>
            type: boolean<br>
            default: false<br>
            description: Makes checkbox required
        </div>
        <div class="property">
            name: labelClasses<br>
            type: string<br>
            description: Custom classes for label
        </div>
        <div class="property">
            name: inputClasses<br>
            type: string<br>
            description: Custom classes for checkbox
        </div>
        <div class="property">
            name: group<br>
            type: array<br>
            description: Display error message for custom validation
        </div>
        <div class="property">
            name: error<br>
            type: string<br>
            description: Display error message for custom validation
        </div>
    </form>
</template>
