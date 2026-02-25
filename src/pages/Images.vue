<template>
    <h1 class="h1">Image </h1>
    <h2 class="h2">Image  / <VYCButton class="underline" flat @click="codeSnippet1 = !codeSnippet1">code</VYCButton></h2>
    <pre v-if="codeSnippet1"><code>{{ `<VYCImage>
    <img src="https://placehold.co/800x600" alt="">
</VYCImage>` }}</code></pre>
    <VYCImage full-width src="https://placehold.co/800x600" />
    <VYCImage src="https://placehold.co/801x600" />
    <VYCImage src="https://placehold.co/802x600" />
    <VYCImage src="https://placehold.co/803x600" />
    <VYCImage src="https://placehold.co/804x600" />
    <VYCImage src="https://placehold.co/805x600" />
    <VYCImage src="https://placehold.co/806x600" />
    <VYCImage src="https://placehold.co/807x600" />
    <VYCImage src="https://placehold.co/808x600" />
    <VYCImage src="https://placehold.co/809x600" />
    <VYCImage src="https://placehold.co/810x600" />
    <VYCImage src="https://placehold.co/811x600" />
    <VYCImage src="https://placehold.co/812x600" />
    <VYCImage src="https://placehold.co/813x600" />
    <VYCImage src="https://placehold.co/814x600" />
    <VYCImage src="https://placehold.co/815x600" />
    <VYCImage src="https://placehold.co/816x600" />
    <VYCImage src="https://placehold.co/817x600" />
    <VYCImage src="https://placehold.co/818x600" />
    <VYCImage src="https://placehold.co/819x600" />
    <VYCImage src="https://placehold.co/820x600" />
    <VYCImage src="https://placehold.co/821x600" />
    <VYCImage src="https://placehold.co/822x600" />
    <VYCImage src="https://placehold.co/823x600" />
    <VYCImage src="https://placehold.co/824x600" />
    <VYCImage src="https://placehold.co/825x600" />
    <VYCImage src="https://placehold.co/826x600" />
    <div class="h-screen"></div>

</template>

<script setup lang="ts">
import VYCButton from '@/components/vyc-button/VYCButton.vue';
import VYCImage from '@/components/vyc-image/VYCImage.vue';
import { onMounted, ref } from 'vue';

const codeSnippet1 = ref<boolean>(false)

</script>