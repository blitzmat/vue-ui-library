<script setup lang="ts">
import { VYCRadio } from "@/components";
import { ref } from "vue";

const radioGroup1 = ref('value-2')
const radioGroup2 = ref('value-2')

const onUpdate = function(val: string) {
    console.log(val)
}

</script>

<template>
    <h1 class="h1">Input Radio</h1>
    <hr class="hr">

    <form action="">
        <h2 class="h2">Input radio no styles</h2>
        <VYCRadio v-model="radioGroup1" id="group-1-input-radio-1" value="value-1" name="group-1" label="Value 1" no-styles @update:model-value="onUpdate" />
        <VYCRadio v-model="radioGroup1" id="group-1-input-radio-2" value="value-2" name="group-1" label="Value 2" no-styles @update:model-value="onUpdate" />
        <VYCRadio v-model="radioGroup1" id="group-1-input-radio-3" value="value-3" name="group-1" label="Value 3" no-styles @update:model-value="onUpdate" />
        {{ radioGroup1 }}
        <h2 class="h2">Default input radio</h2>
        <div class="flex gap-4">
            <VYCRadio v-model="radioGroup2" value="value-1" id="group-2-input-radio-1" name="group-2" label="Value 1"/>
            <VYCRadio v-model="radioGroup2" value="value-2" id="group-2-input-radio-2" name="group-2" label="Value 2"/>
            <VYCRadio v-model="radioGroup2" value="value-3" id="group-2-input-radio-3" name="group-2" label="Value 3"/>
        </div>
        {{ radioGroup2 }}
        <hr>
        <h2 class="h1">Properties</h2>
        <div class="property">
            name: noStyles<br>
            type: boolean<br>
            default: false<br>
            description: removes all styles
        </div>
        <div class="property">
            name: value<br>
            type: string<br>
            description: the value of the radio input
        </div>
        <div class="property">
            name: id<br>
            type: string<br>
            description: adds id for the radio
        </div>
        <div class="property">
            name: label<br>
            type: string<br>
            description: Label for the radio
        </div>
        <div class="property">
            name: required<br>
            type: boolean<br>
            default: false<br>
            description: Makes radio required
        </div>
        <div class="property">
            name: placeholder<br>
            type: string<br>
            description: Displays placeholder text within the radio
        </div>
        <div class="property">
            name: labelClasses<br>
            type: string<br>
            description: Custom classes for label
        </div>
        <div class="property">
            name: inputClasses<br>
            type: string<br>
            description: Custom classes for radio
        </div>
        <div class="property">
            name: error<br>
            type: string<br>
            description: Display error message for custom validation.
        </div>
    </form>
</template>