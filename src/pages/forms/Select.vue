<script setup lang="ts">
import { VYCSelect } from "@/components";
import { reactive, ref } from "vue";

const options = reactive([
    {value: 'Option 1'},
    {value: 'Option 2'},
    {value: 'Option 3'},
    {value: 'Option 4'},
    {value: 'Option 5'},
])
const selectedOption = ref<string>(options[1].value)
const selectedOption2 = ref<string>(options[4].value)

const onChange = function(event: Event) {
    selectedOption.value = (event.target as HTMLSelectElement).value
}
const onChange2 = function(event: Event) {
    selectedOption2.value = (event.target as HTMLSelectElement).value
}
</script>

<template>
    <h1 class="h1">Select Text</h1>
    <hr class="hr">

    <form action="">
        <h2 class="h2">Select text no styles and label</h2>
        <VYCSelect id="select-text" no-styles v-model="selectedOption" @change="onChange">
            <option v-for="option in options" :key="option.value" :selected="selectedOption == option.value">{{ option.value }}</option>
        </VYCSelect>
        {{ selectedOption }}
        <h2 class="h2">Default Select</h2>
        <VYCSelect id="select-text-1" label="Select label" v-model="selectedOption2" @change="onChange2">
            <option v-for="option in options" :key="option.value" :selected="selectedOption2 == option.value">{{ option.value }}</option>
        </VYCSelect>
        {{ selectedOption2 }}
        <hr>
        <h2 class="h1">Properties</h2>
        <div class="property">
            name: noStyles<br>
            type: boolean<br>
            default: false<br>
            description: removes all styles
        </div>
        <div class="property">
            name: id<br>
            type: string<br>
            description: adds id for the select
        </div>
        <div class="property">
            name: label<br>
            type: string<br>
            description: Label for the select
        </div>
        <div class="property">
            name: labelClasses<br>
            type: string<br>
            description: Custom classes for label
        </div>
        <div class="property">
            name: selectClasses<br>
            type: string<br>
            description: Custom classes for select
        </div>
        <div class="property">
            name: focusClasses<br>
            type: string<br>
            description: Custom classes for select focus
        </div>
    </form>
</template>