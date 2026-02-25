<template>
    <section class="overflow-hidden">

        <h1 class="h1">Scroll Animation</h1>
        <p>This is a wrapper for the AOS javascript plugin - <a class="underline" href="https://michalsnik.github.io/aos/" target="_blank">Website</a> / <a class="underline" href="https://github.com/michalsnik/aos" target="_blank">Github</a></p>
    
        <h2 class="h2">Fade Animation -  / <VYCButton class="underline" flat @click="codeSnippet1 = !codeSnippet1">code</VYCButton></h2>
                <pre v-if="codeSnippet1"><code>{{ `** Replace {animation} with the desired animation eg. 'fade-left' 
    <VYCScrollAnimation animation="{animation}">
        <div class="h-[50vh] flex justify-center items-center border border-black">
            <h1 class="text-6xl">{animation}</h1>
        </div>
    </VYCScrollAnimation>` }}</code></pre>
        <section v-for="(animation, index) in animations.fade" :key="index">
            <VYCScrollAnimation :ref="animation" :animation="animation">
                <div class="h-[50vh] flex justify-center items-center border border-black bg-white">
                    <h1 class="text-6xl">{{ animation }}</h1>
                </div>
            </VYCScrollAnimation>
        </section>
    
        <h2 class="h2">Flip Animation -  / <VYCButton class="underline" flat @click="codeSnippet2 = !codeSnippet2">code</VYCButton></h2>
                <pre v-if="codeSnippet2"><code>{{ `** Replace {animation} with the desired animation eg. 'flip-up' 
    <VYCScrollAnimation animation="{animation}">
        <div class="h-[50vh] flex justify-center items-center border border-black">
            <h1 class="text-6xl">{animation}</h1>
        </div>
    </VYCScrollAnimation>` }}</code></pre>
        <section v-for="(animation, index) in animations.flip" :key="index">
            <VYCScrollAnimation :ref="animation" :animation="animation">
                <div class="h-[50vh] flex justify-center items-center border border-black bg-white">
                    <h1 class="text-6xl">{{ animation }}</h1>
                </div>
            </VYCScrollAnimation>
        </section>
    
        <h2 class="h2">Slide Animation -  / <VYCButton class="underline" flat @click="codeSnippet3 = !codeSnippet3">code</VYCButton></h2>
                <pre v-if="codeSnippet3"><code>{{ `** Replace {animation} with the desired animation eg. 'slide-down' 
    <VYCScrollAnimation animation="{animation}">
        <div class="h-[50vh] flex justify-center items-center border border-black">
            <h1 class="text-6xl">{animation}</h1>
        </div>
    </VYCScrollAnimation>` }}</code></pre>
        <section v-for="(animation, index) in animations.slide" :key="index">
            <VYCScrollAnimation :ref="animation" :animation="animation">
                <div class="h-[50vh] flex justify-center items-center border border-black bg-white">
                    <h1 class="text-6xl">{{ animation }}</h1>
                </div>
            </VYCScrollAnimation>
        </section>
    
        <h2 class="h2">Zoom Animation -  / <VYCButton class="underline" flat @click="codeSnippet4 = !codeSnippet4">code</VYCButton></h2>
                <pre v-if="codeSnippet4"><code>{{ `** Replace {animation} with the desired animation eg. 'zoom-out' 
    <VYCScrollAnimation animation="{animation}">
        <div class="h-[50vh] flex justify-center items-center border border-black">
            <h1 class="text-6xl">{animation}</h1>
        </div>
    </VYCScrollAnimation>` }}</code></pre>
        <section v-for="(animation, index) in animations.zoom" :key="index">
            <VYCScrollAnimation :ref="animation" :animation="animation">
                <div class="h-[50vh] flex justify-center items-center border border-black bg-white">
                    <h1 class="text-6xl">{{ animation }}</h1>
                </div>
            </VYCScrollAnimation>
        </section>
    
        <hr>
        
        <h2 class="h1">Properties</h2>
        <p>For the full documentation, visit see <a class="underline" href="https://github.com/michalsnik/aos" target="_blank">https://github.com/michalsnik/aos</a></p>
    
    
    
        <div class="property">
            name: animation<br>
            type: string<br>
            description: The animation that is used eg. 'fade-down'.
        </div>
        <div class="property">
            name: offset<br>
            type: string<br>
            default: 120<br>
            description: offset (in px) from the original trigger point
        </div>
        <div class="property">
            name: delay<br>
            type: string<br>
            default: 0<br>
            description: values from 0 to 3000, with step 50ms
        </div>
        <div class="property">
            name: duration<br>
            type: string<br>
            default: 400<br>
            description: values from 0 to 3000, with step 50ms
        </div>
        <div class="property">
            name: easing<br>
            type: string<br>
            default: ease<br>
            description: default easing for AOS animations
        </div>
        <div class="property">
            name: once<br>
            type: string<br>
            default: false<br>
            description: whether animation should happen only once - while scrolling down
        </div>
        <div class="property">
            name: mirror<br>
            type: string<br>
            default: false<br>
            description: whether elements should animate out while scrolling past them
        </div>
        <div class="property">
            name: anchorPlacement<br>
            type: string<br>
            default: top-bottom<br>
            description: defines which position of the element regarding to window should trigger the animation
        </div>
    </section>

</template>

<script setup lang="ts">
import VYCButton from '@/components/vyc-button/VYCButton.vue';
import VYCScrollAnimation from '@/components/vyc-scroll-animation/VYCScrollAnimation.vue';
import { onMounted, ref } from 'vue';

const codeSnippet1 = ref<boolean>(false)
const codeSnippet2 = ref<boolean>(false)
const codeSnippet3 = ref<boolean>(false)
const codeSnippet4 = ref<boolean>(false)

const fade = ref()
onMounted(() => {
    console.log(fade.value)
})

const animations = {
    fade: [
        'fade',
        'fade-up',
        'fade-down',
        'fade-left',
        'fade-right',
        'fade-up-right',
        'fade-up-left',
        'fade-down-right',
        'fade-down-left',
    ],
    flip: [
        'flip-up',
        'flip-down',
        'flip-left',
        'flip-right',
    ],
    slide: [
        'slide-up',
        'slide-down',
        'slide-left',
        'slide-right',
    ],
    zoom: [
        'zoom-in',
        'zoom-in-up',
        'zoom-in-down',
        'zoom-in-left',
        'zoom-in-right',
        'zoom-out',
        'zoom-out-up',
        'zoom-out-down',
        'zoom-out-left',
        'zoom-out-right',
    ]
}

// animations.forEach(animation => {
//     animation.
// });
</script>