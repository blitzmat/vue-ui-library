<script setup lang="ts">
import { VYCButton, VYCSlider } from "@/components";
import { ref } from "vue";

interface Slider {
    value1: number|Array<number>,
    value2: number|Array<number>
    value3: number|Array<number>
    value4: number|Array<number>
}
const data = ref<Slider>({
    value1: 10.5,
    value2: 20,
    value3:[20, 40],
    value4: [0,0]
})

const codeSnippet1 = ref<boolean>(false)
const codeSnippet2 = ref<boolean>(false)
const codeSnippet3 = ref<boolean>(false)

</script>

<template>
    <h1 class="h1">Sliders</h1>
    <hr>

    <h2 class="h2">Single slider / <VYCButton class="underline" flat @click="codeSnippet1 = !codeSnippet1">code</VYCButton></h2>
    <pre v-if="codeSnippet1"><code>{{ `<VYCSlider
    v-model="data.value1"
    @input="(val) => data.value1 = val"
    effect-class="bg-red-600"
    text-fixed="%"
    :step=".5"
    step-decimals
    text-class="bg-red-500" />` }}</code></pre>
    <VYCSlider v-model="data.value1" effect-class="bg-red-600" text-fixed="%" :step=".5" step-decimals text-class="bg-red-500" />
    value1: {{ data.value1 }}

    <hr>
    <h2 class="h2">Single slider with steps / <VYCButton class="underline" flat @click="codeSnippet2 = !codeSnippet2">code</VYCButton></h2>
    <pre v-if="codeSnippet2"><code>{{ `<VYCSlider
    v-model="data.value2"
    :step="10"
    :max="50"
    ticks />` }}</code></pre>
    <VYCSlider :step="10" :max="50" ticks v-model="data.value2" />
    value2: {{ data.value2 }}

    <hr>
    <h2 class="h2">Range slider - min = 10, max = 50 / <VYCButton class="underline" flat @click="codeSnippet3 = !codeSnippet3">code</VYCButton></h2>
    <pre v-if="codeSnippet3"><code>{{ `<VYCSlider
    v-model="data.value3"
    :min="10"
    :max="50"
    slider-class="h-6"
    indicator-class="w-6 h-6" />` }}</code></pre>
    <VYCSlider v-model="data.value3" :min="10" :max="50" slider-class="h-6 bg-gray-400" indicator-class="border border-gray-500 bg-gray-300 active:bg-gray-500 w-6 h-6" />
    value3: {{ data.value3 }}
    
    <hr>
    <h2 class="h2">Single slider starting in the middle with custom indicator / <VYCButton class="underline" flat @click="codeSnippet2 = !codeSnippet2">code</VYCButton></h2>
    <pre v-if="codeSnippet2"><code>{{ `<VYCSlider
    v-model="data.value2"
    :step="10"
    :max="50"
    ticks />` }}</code></pre>
    <VYCSlider
        v-model="data.value4"
        :step="1"
        :min="-2"
        :max="2"
        ticks
        tick-class="hidden"
        slider-class="bg-black"
        slider-line-class="!bg-[#EFDF00]"
        indicator-class="mt-2 bg-[url('/slider-indicator.svg')] h-[58px] w-[58px] active:bg-transparent"
        hide-indicator2
    />
    value4: {{ data.value4 }}

    <hr>

    <h2 class="h1">Properties</h2>

    <div class="property">
        name: modelValue<br>
        type: number|Array<br>
        description: The value of the slider
    </div>

    <div class="property">
        name: disabled<br>
        type: boolean<br>
        default: false<br>
        description: Disables the slider
    </div>

    <div class="property">
        name: min<br>
        type: number<br>
        default: 0<br>
        description: The minimum value for the slider
    </div>

    <div class="property">
        name: max<br>
        type: number<br>
        default: 100<br>
        description: The maximum value for the slider
    </div>

    <div class="property">
        name: ticks<br>
        type: boolean<br>
        default: false<br>
        description: Shows tick marks on the slider
    </div>

    <div class="property">
        name: step<br>
        type: number<br>
        description: Amount of steps for the slider
    </div>
  
    <div class="property">
        name: stepDecimals<br>
        type: boolean<br>
        default: false<br>
        description: Gives support for decimal values. Requires step property to be in decimals to work
    </div>

    <div class="property">
        name: textFixed<br>
        type: string<br>
        description: Text to display after the value in the indicator popup. Eg. "%"
    </div>

    <div class="property">
        name: noEffect<br>
        type: boolean<br>
        default: false<br>
        description: Removes the effect when clicking on the slider line and not the indicator
    </div>

    <div class="property">
        name: sliderClass<br>
        type: string<br>
        description: Custom classes for the slider
    </div>
    
    <div class="property">
        name: sliderLineClass<br>
        type: string<br>
        description: Custom classes for the slider progress line
    </div>
    
    <div class="property">
        name: indicatorClass<br>
        type: string<br>
        description: Custom classes for the slider indicator
    </div>
    
    <div class="property">
        name: indicator2Class<br>
        type: string<br>
        description: Custom classes for the second slider indicator
    </div>
 
    <div class="property">
        name: tickClass<br>
        type: string<br>
        description: Custom classes for the ticks in the slider
    </div>
    
    <div class="property">
        name: textClass<br>
        type: string<br>
        description: Custom classes for the text popup on the slider indicators
    </div>

    <div class="property">
        name: effectClass<br>
        type: string<br>
        description: Custom classes for the effect when you click on the line of the slider for the indicators to move to
    </div>
    
    <hr>

</template>