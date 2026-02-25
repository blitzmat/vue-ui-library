<script setup lang="ts">
import { VYCButton, VYCToast } from "@/components";
import { ref } from "vue";

const toastActiveTL = ref<boolean>(false)
const toastActiveTR = ref<boolean>(false)
const toastActiveBL = ref<boolean>(false)
const toastActiveBR = ref<boolean>(false)
const codeSnippet1 = ref<boolean>(false)
</script>

<template>
    <h1 class="h1">Toast</h1>
    <hr>
    
    <h2 class="h2">Toast / <VYCButton class="underline" flat @click="codeSnippet1 = !codeSnippet1">code</VYCButton></h2>
    <pre v-if="codeSnippet1"><code>{{ `<VYCToast
    v-model="toastActiveTL"
    position-x="left"
    position-y="top"
    :offset="10"
    :duration="2000"
    toast-classes="bg-sky-500 text-white p-5"
    @change="(val) => toastActiveTL = val"
    >
    This is the Toast
</VYCToast>

<VYCToast
    v-model="toastActiveTR"
    position-x="right"
    position-y="top"
    :offset="10"
    :duration="2000"
    toast-classes="bg-sky-500 text-white p-5"
    @change="(val) => toastActiveTR = val"
    >
    This is the Toast
</VYCToast>

<VYCToast
    v-model="toastActiveBL"
    position-x="left"
    position-y="bottom"
    :offset="10"
    :duration="2000"
    toast-classes="bg-sky-500 text-white p-5"
    @change="(val) => toastActiveBL = val"
    >
    This is the Toast
</VYCToast>

<VYCToast
    v-model="toastActiveBR"
    position-x="right"
    position-y="bottom"
    :offset="10"
    :duration="2000"
    toast-classes="bg-sky-500 text-white p-5"
    @change="(val) => toastActiveBR = val"
    >
    This is the Toast
</VYCToast>` }}</code></pre>

    <VYCButton @click="toastActiveTL = true">Top left</VYCButton>
    <VYCToast
        v-model="toastActiveTL"
        position-x="left"
        position-y="top"
        :offset="10"
        :duration="2000"
        toast-classes="bg-sky-500 text-white p-5"
        @change="(val) => toastActiveTL = val"
        >
        This is the Toast
    </VYCToast>

    <VYCButton @click="toastActiveTR = true">Top right</VYCButton>
    <VYCToast
        v-model="toastActiveTR"
        position-x="right"
        position-y="top"
        :offset="10"
        :duration="2000"
        toast-classes="bg-sky-500 text-white p-5"
        @change="(val) => toastActiveTR = val"
        >
        This is the Toast
    </VYCToast>

    <VYCButton @click="toastActiveBL = true">Bottom left</VYCButton>
    <VYCToast
        v-model="toastActiveBL"
        position-x="left"
        position-y="bottom"
        :offset="10"
        :duration="2000"
        toast-classes="bg-sky-500 text-white p-5"
        @change="(val) => toastActiveBL = val"
        >
        This is the Toast
    </VYCToast>
    <VYCButton @click="toastActiveBR = true">Bottom right</VYCButton>
    <VYCToast
        v-model="toastActiveBR"
        position-x="right"
        position-y="bottom"
        :offset="10"
        :duration="2000"
        toast-classes="bg-sky-500 text-white p-5"
        @change="(val) => toastActiveBR = val"
        >
        This is the Toast
    </VYCToast>

    <hr>

    <h2 class="h1">Properties</h2>

    <div class="property">
        name: noStyles <br>
        type: boolean <br>
        default: false <br>
        description: Removes all styling
    </div>
    <div class="property">
        name: modelValue <br>
        type: boolean  <br>
        required <br>
        description: Displays or hides the tooltip
    </div>
    <div class="property">
        name: positionX <br>
        type: string <br>
        default: right <br>
        description: The toast position on the x axis 
    </div>
    <div class="property">
        name: positionY <br>
        type: string <br>
        default: bottom <br>
        description: The toast position on the y axis 
    </div>
    <div class="property">
        name: offset <br>
        type: number <br>
        default: 20 <br>
        description: The spacing from the screen edges in 'px'
    </div>
    <div class="property">
        name: duration <br>
        type: number <br>
        default: 5000 <br>
        description: The duration in 'ms' before toast disappears
    </div>
    <div class="property">
        name: persist <br>
        type: boolean <br>
        default: false <br>
        description: Stops the toast from disappearing
    </div>
    <div class="property">
        name: toastClasses <br>
        type: string <br>
        description: Custom classes for the toast
    </div>

    <hr>

    <h2 class="h1">Slots</h2>
    
    <div class="property">
        name: default<br>
        description: The default slot where the toast content diplays
    </div>
</template>