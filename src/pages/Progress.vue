<script setup lang="ts">
import { VYCButton, VYCProgress } from "@/components";
import { ref } from "vue";

const steps = ref<Array<string>>(['1', '2', '3', '4', '5', '6', '7'])
const steps2 = ref<Array<string>>(['0', '25%', '50%', '75%', '100%'])
const codeSnippet1 = ref<boolean>(false)
const codeSnippet2 = ref<boolean>(false)
const codeSnippet3 = ref<boolean>(false)
</script>

<template>
    <h1 class="h1">Progress</h1>
    <hr>
    
    <h2 class="h2">Progress - Default / <VYCButton class="underline" flat @click="codeSnippet1 = !codeSnippet1">code</VYCButton></h2>
    <pre v-if="codeSnippet1"><code>{{ `<VYCProgress :progress="30"></VYCProgress>` }}</code></pre>
    <VYCProgress :progress="30"></VYCProgress>

    <h2 class="h2">Progress - With steps / <VYCButton class="underline" flat @click="codeSnippet2 = !codeSnippet2">code</VYCButton></h2>
    <pre v-if="codeSnippet2"><code>{{ `<VYCProgress :progress="50" :steps="steps"></VYCProgress>` }}</code></pre>
    <VYCProgress :progress="50" :steps="steps"></VYCProgress>

    <h2 class="h2">Progress - With custom steps / <VYCButton class="underline" flat @click="codeSnippet3 = !codeSnippet3">code</VYCButton></h2>
    <pre v-if="codeSnippet3"><code>{{ `<VYCProgress
    :progress="50"
    :steps="steps2"
    track-classes="bg-blue-400"
    indicator-classes="bg-blue-600"
    step-classes="w-auto h-auto p-2 rounded-lg bg-blue-400 text-white"
    active-step-classes="bg-blue-600 text-white">
</VYCProgress>` }}</code></pre>
    <VYCProgress
        :progress="50"
        :steps="steps2"
        track-classes="bg-blue-400"
        indicator-classes="bg-blue-600"
        step-classes="w-auto h-auto p-2 rounded-lg bg-blue-400 text-white"
        active-step-classes="bg-blue-600 text-white">
    </VYCProgress>
    
    
    <hr class="mt-10">

    <h2 class="h1">Properties</h2>
    <div class="property">
        name: steps <br>
        type: Array <br>
        description: Array of strings where the string is used for each step
    </div>
    <div class="property">
        name: progress <br>
        type: number <br>
        default: 0 <br>
        description: The current progress from 0% - 100% 
    </div>
    <div class="property">
        name: trackHeight <br>
        type: string <br>
        default: 5px<br>
        description: The height of the track (background)
    </div>
    <div class="property">
        name: trackClasses <br>
        type: string <br>
        default: bg-gray-300 <br>
        description: Custom classes for the track (background)
    </div>
    <div class="property">
        name: indicatorClasses <br>
        type: string <br>
        default: bg-gray-500 <br>
        description: Custom classes for the indicator
    </div>
    <div class="property">
        name: stepClasses <br>
        type: string <br>
        default: 'rounded-full w-6 h-6 bg-gray-300' <br>
        description: Custom classes for the steps
    </div>
    <div class="property">
        name: activeStepClasses <br>
        type: string <br>
        default: 'bg-gray-500 text-white' <br>
        description: Custom classes for the active steps
    </div>

    <hr>

    <h2 class="h1">Slots</h2>
    
    <div class="property">
        name: default<br>
        description: The default slot where the steps array strings would display
    </div>
</template>