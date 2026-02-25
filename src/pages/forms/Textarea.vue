<script setup lang="ts">
import { VYCTextArea } from "@/components";
import { ref } from "vue";

const inputValue = ref<string>('')
</script>

<template>
    <h1 class="h1">Textarea</h1>
    <hr class="hr">

    <form action="">
        <h2 class="h2">Textarea no styles & label</h2>
        <VYCTextArea v-model="inputValue" id="text-area" no-styles />
        <h2 class="h2">Default Textarea</h2>
        <VYCTextArea v-model="inputValue" id="text-area-1" label="Textarea" />

        {{ inputValue }}
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
            description: value on the textarea
        </div>
        <div class="property">
            name: id<br>
            type: string<br>
            description: adds id for the textarea
        </div>
        <div class="property">
            name: label<br>
            type: string<br>
            description: Label for the inpuy
        </div>
        <div class="property">
            name: required<br>
            type: boolean<br>
            default: false<br>
            description: Makes textarea required
        </div>
        <div class="property">
            name: labelClasses<br>
            type: string<br>
            description: Custom classes for label
        </div>
        <div class="property">
            name: textareaClasses<br>
            type: string<br>
            description: Custom classes for textarea
        </div>
        <div class="property">
            name: error<br>
            type: string<br>
            description: Display error message for custom validation
        </div>
    </form>
</template>