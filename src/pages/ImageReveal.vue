<template>
    <h1 class="h1">Image Reveal</h1>
    <h2 class="h2">Image Reveal / <VYCButton class="underline" flat @click="codeSnippet1 = !codeSnippet1">code</VYCButton></h2>
    <pre v-if="codeSnippet1"><code>{{ `<VYCImageReveal>
    <img src="https://placehold.co/800x600" alt="">
</VYCImageReveal>` }}</code></pre>
    <VYCImageReveal>
        <img src="https://placehold.co/800x600" alt="">
    </VYCImageReveal>
    <VYCImageReveal>
        <img src="https://placehold.co/801x600" alt="">
    </VYCImageReveal>
    <VYCImageReveal>
        <img src="https://placehold.co/802x600" alt="">
    </VYCImageReveal>
    <VYCImageReveal>
        <img src="https://placehold.co/803x600" alt="">
    </VYCImageReveal>
    <VYCImageReveal>
        <img src="https://placehold.co/804x600" alt="">
    </VYCImageReveal>
    <div class="h-screen"></div>
    <div class="h-screen"></div>

</template>

<script setup lang="ts">
import VYCButton from '@/components/vyc-button/VYCButton.vue';
import VYCImageReveal from '@/components/vyc-image-reveal/VYCImageReveal.vue';
import { ref } from 'vue';

const codeSnippet1 = ref<boolean>(false)
</script>