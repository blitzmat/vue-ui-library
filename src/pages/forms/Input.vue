<script setup lang="ts">
import { VYCInput } from "@/components";
import { ref } from "vue";

const inputValue = ref<string>('')
</script>

<template>
    <h1 class="h1">Input Text</h1>
    <hr class="hr">

    <form action="">
        <h2 class="h2">Input text no styles</h2>
        <VYCInput v-model="inputValue" id="input-text" label="Input Text" no-styles />
        <h2 class="h2">Default input text</h2>
        <VYCInput v-model="inputValue" id="input-text-1" label="Input Text" type="password" class="bg-red-500" autocomplete="current-password" />
        <h2 class="h2">Input text no label with placeholder</h2>
        <VYCInput v-model="inputValue" id="input-text-2" placeholder="Input with placeholder" />
        <h2 class="h2">Input text inline</h2>
        <VYCInput v-model="inputValue" id="input-text-3" label="Input Text" inline />
        {{ inputValue }}
        
    </form>
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
            description: value on the input
        </div>
        <div class="property">
            name: id<br>
            type: string<br>
            description: adds id for the input
        </div>
        <div class="property">
            name: type<br>
            type: string<br>
            default: 'text'<br>
            description: The type of input
        </div>
        <div class="property">
            name: label<br>
            type: string<br>
            description: Label for the inpuy
        </div>
        <div class="property">
            name: inline<br>
            type: boolean<br>
            default: false<br>
            description: Displays the label and input next to each other
        </div>
        <div class="property">
            name: required<br>
            type: boolean<br>
            default: false<br>
            description: Makes input required
        </div>
        <div class="property">
            name: placeholder<br>
            type: string<br>
            description: Displays placeholder text within the input
        </div>
        <div class="property">
            name: labelClasses<br>
            type: string<br>
            description: Custom classes for label
        </div>
        <div class="property">
            name: wrapperClasses<br>
            type: string<br>
            description: Custom classes for input wrapper
        </div>
        <div class="property">
            name: inputErrorClasses<br>
            type: string<br>
            description: Custom classes for input error
        </div>
        <div class="property">
            name: errorClasses<br>
            type: string<br>
            description: Custom classes for error text
        </div>
        <div class="property">
            name: error<br>
            type: string<br>
            description: Display error message for custom validation
        </div>
        <h2 class="h1">Events</h2>
        <div class="property">
            name: update:modelValue<br>
            type: string<br>
            description: event that fires when the model value updates
        </div>
        <div class="property">
            name: focus<br>
            type: FocusEvent<br>
            description: event that fires when focus on the input
        </div>
        <div class="property">
            name: blur<br>
            type: FocusEvent<br>
            description: event that fires when blur on the input
        </div>
        <div class="property">
            name: keypress<br>
            type: KeyboardEvent<br>
            description: event that fires when keypress on the input
        </div>
        <div class="property">
            name: keyup<br>
            type: KeyboardEvent<br>
            description: event that fires when keyup on the input
        </div>
        <div class="property">
            name: keydown<br>
            type: KeyboardEvent<br>
            description: event that fires when keydown on the input
        </div>
</template>
