<script setup lang="ts">
import { VYCButton, VYCCarousel, VYCSlide } from "@/components";
import { ref } from "vue";

const carousel = ref()
const responsive = ref({xs: 1, sm: 2, md: 3})
const codeSnippet1 = ref<boolean>(false)
const codeSnippet2 = ref<boolean>(false)
const codeSnippet3 = ref<boolean>(false)
const codeSnippet4 = ref<boolean>(false)
</script>

<template>
    <h1 class="h1">Carousel</h1>
    <hr>

    <h2 class="h2">Default / <VYCButton class="underline" flat @click="codeSnippet1 = !codeSnippet1">code</VYCButton></h2>
    <pre v-if="codeSnippet1"><code>{{ `<VYCCarousel :peek-right="150" :peek-left="150" :gutter="50" pagination>
    <VYCSlide v-for="slide in 5" :key="slide">
        <h2>Title slide</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illum omnis unde alias reiciendis, sit earum provident laboriosam cumque repudiandae, ab dolorum placeat enim fugit ea aspernatur qui, iure aperiam.</p>
        <VYCButton>Submit</VYCButton>
    </VYCSlide>
</VYCCarousel>` }}</code></pre>
    <VYCCarousel :peek-right="150" :peek-left="150" :gutter="50" pagination>
        <VYCSlide v-for="slide in 5" :key="slide">
            <h2>Title {{ slide }}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illum omnis unde alias reiciendis, sit earum provident laboriosam cumque repudiandae, ab dolorum placeat enim fugit ea aspernatur qui, iure aperiam.</p>
            <VYCButton>Submit</VYCButton>
        </VYCSlide>
    </VYCCarousel>

    <hr>
    <h2 class="h2">With navigation, right-peek=40, gutter=5 / <VYCButton class="underline" flat @click="codeSnippet2 = !codeSnippet2">code</VYCButton></h2>
    <pre v-if="codeSnippet2"><code>{{ `<VYCCarousel navigation pagination :gutter="5" :peek-right="40" indicator-classes="bg-blue-400 " active-indicator-classes="bg-blue-600" mouse-drag>
    <VYCSlide v-for="slide in 10" :key="slide">
        <img class="w-full" src="https://placehold.co/1280x640">
    </VYCSlide>
</VYCCarousel>` }}</code></pre>
    <VYCCarousel navigation pagination :gutter="5" :peek-right="40" indicator-classes="bg-blue-400 " active-indicator-classes="bg-blue-600" mouse-drag>
        <VYCSlide v-for="slide in 10" :key="slide">
            <img class="w-full" src="https://placehold.co/1280x640">
        </VYCSlide>
    </VYCCarousel>

    <hr>
    <h2 class="h2">With pagination, autoplay, autoplay-delay=3000, slide-speed=1000ms, gutter=10, responsive={xs: 1, sm: 2, md: 3} / <VYCButton class="underline" flat @click="codeSnippet3 = !codeSnippet3">code</VYCButton></h2>
    <pre v-if="codeSnippet3"><code>{{ `<VYCCarousel pagination :gutter="10" autoplay :autoplay-delay="3000" :slide-speed="1000" :responsive="responsive">
    <VYCSlide v-for="slide in 10" :key="slide">
        <img class="w-full" src="https://placehold.co/1280x640">
    </VYCSlide>
</VYCCarousel>` }}</code></pre>
    <VYCCarousel pagination :gutter="10" autoplay :autoplay-delay="3000" :slide-speed="1000" :responsive="responsive">
        <VYCSlide v-for="slide in 10" :key="slide">
            <img class="w-full" src="https://placehold.co/1280x640">
        </VYCSlide>
    </VYCCarousel>

    <hr>
    <h2 class="h2">Custom navigation, pagination / <VYCButton class="underline" flat @click="codeSnippet4 = !codeSnippet4">code</VYCButton></h2>
    <pre v-if="codeSnippet4"><code>{{ `<VYCCarousel ref="carousel" :gutter="5">
    <VYCSlide v-for="slide in 10" :key="slide">
        <img class="w-full" src="https://placehold.co/1280x640">
    </VYCSlide>
    <template #pagination>
        <div class="flex gap-2">
            <div @click="carousel.setSlide(slide-1)" class="cursor-pointer" :class="carousel && carousel.currentSlide == slide - 1 ? 'font-bold' : ''" v-for="slide in 10" :key="slide">slide</div>
        </div>
    </template>
    <template #navigation>
        <button @click="carousel.prev">prev</button>
        |
        <button @click="carousel.next">next</button>
    </template>
</VYCCarousel>` }}</code></pre>
    <VYCCarousel ref="carousel" :gutter="5">
        <VYCSlide v-for="slide in 10" :key="slide">
            <img class="w-full" src="https://placehold.co/1280x640">
        </VYCSlide>
        <template #pagination>
            <div class="flex gap-2">
                <div @click="carousel.setSlide(slide-1)" class="cursor-pointer" :class="carousel && carousel.currentSlide == slide - 1 ? 'font-bold' : ''" v-for="slide in 10" :key="slide">{{ slide }}</div>
            </div>
        </template>
        <template #navigation>
            <button @click="carousel.prev">prev</button>
            |
            <button @click="carousel.next">next</button>
        </template>
    </VYCCarousel>

    <hr>

    <h2 class="h1">Properties</h2>
    <div class="property">
        name: navigation <br>
        type: boolean<br>
        default: false<br>
        description: Shows the default navigation arrow
    </div>
    <div class="property">
        name: pagination <br>
        type: boolean<br>
        default: false<br>
        description: Shows the default pagination dots
    </div>
    <div class="property">
        name: gutter <br>
        type: number<br>
        default: 0<br>
        description: Space between slides in pixels
    </div>
    <div class="property">
        name: peekLeft <br>
        type: number<br>
        default: 0<br>
        description: Amount of pixels to show of the previous slide
    </div>
    <div class="property">
        name: peekRight <br>
        type: number<br>
        default: 0<br>
        description: Amount of pixels to show of the next slide
    </div>
    <div class="property">
        name: slideSpeed <br>
        type: number<br>
        default: 150<br>
        description: The speed of the slide in miliseconds (ms)
    </div>
    <div class="property">
        name: slidesPerPage <br>
        type: number<br>
        default: 1<br>
        description: The number of slides to show per page
    </div>
    <div class="property">
        name: autoPlay <br>
        type: boolean<br>
        default: false<br>
        description: Slides will automatically slide every autPlayDelay 'ms'
    </div>
    <div class="property">
        name: autoPlayDelay <br>
        type: number<br>
        default: 5000<br>
        description: Amount of miliseconds (ms) before next slide
    </div>
    <div class="property">
        name: responsive <br>
        type: object<br>
        description: Set the number of slides for each breakpoint - {xs, sm, md, lg, xl, xl2}
    </div>
    
    <h2 class="h1">Slots</h2>
    
    <div class="property">
        name: default<br>
        description: the default slot where the slide would display
    </div>

    <div class="property">
        name: navigation<br>
        description: Provide custom html for navigation
    </div>
    <div class="property">
        name: pagination<br>
        description: Provide custom html for pagination
    </div>
    
    <h2 class="h1">Exposures</h2>
    
    <h3 class="h2">Properties</h3>
    <div class="property">
        name: currentSlide<br>
        type: number<br>
        description: Displays the slide for the given index
    </div>
    <h3 class="h2">Methods</h3>
    <div class="property">
        name: next<br>
        type: function<br>
        description: Displays the next slide
    </div>
    <div class="property">
        name: prev<br>
        type: function<br>
        description: Displays the previous slide
    </div>
    <div class="property">
        name: setSlide<br>
        type: function<br>
        parameters: index<br>
        description: Displays the slide for the given index eg. <code>setSlide(2)</code>
    </div>

</template>