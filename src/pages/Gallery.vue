<script setup lang="ts">
import VYCGallery from '@/components/vyc-gallery/VYCGallery.vue';
import type { VYCMediaType } from '@/types'
import { ref } from 'vue';
import useBreakpoints from '@/composables/useBreakpoints';
import VYCButton from '@/components/vyc-button/VYCButton.vue';

const gallery2 = ref<Array<VYCMediaType>>([
    {
        type: 'image',
        alt: 'image 1',
        src: 'https://placehold.co/1920x1800',
        srcset: 'https://placehold.co/768x768 640w , https://placehold.co/1281x640 1280w',
        width: '1920',
        height: '1080',
        caption: 'Passengers will also enjoy a ride in the Clio - the suspension and sound proofing have been improved for everyone’s comfort.'
    },
    {
        type: 'video',
        title: 'Video 1',
        poster: 'https://img.youtube.com/vi/MzLe0Zk31_U/maxresdefault.jpg',
        src: 'https://www.youtube.com/embed/MzLe0Zk31_U?si=cWH4tJ_hqqBHY7LC',
        youtubeId: 'MzLe0Zk31_U',
        caption: 'video 1',
        height: '400',
        width: '800'
    },
    {
        type: 'image',
        alt: 'image 2',
        src: 'https://dev-renaulttest.pantheonsite.io/sites/default/files/2024-04/triber-gallery-image-4.webp',
        srcset: 'https://placehold.co/768x768 640w, https://dev-renaulttest.pantheonsite.io/sites/default/files/2024-04/triber-gallery-image-4.webp 800w',
        width: '800',
        height: '600',
        caption: 'Passengers will also enjoy a ride in the Clio - the suspension and sound proofing have been improved for everyone’s comfort.'
    },
    {
        type: 'image',
        alt: 'image 3',
        src: 'https://placehold.co/1920x1080',
        srcset: 'https://placehold.co/768x768 640w, https://placehold.co/1281x640 1280w',
        width: '1920',
        height: '1080',
        caption: 'Passengers will also enjoy a ride in the Clio - the suspension and sound proofing have been improved for everyone’s comfort.'
    },
])

const codeSnippet1 = ref<boolean>(false)
const codeSnippet2 = ref<boolean>(false)
const codeSnippet3 = ref<boolean>(false)
const codeSnippet4 = ref<boolean>(false)
const codeSnippet5 = ref<boolean>(false)
const codeSnippet6 = ref<boolean>(false)
const breakpoints = useBreakpoints()
</script>
<template>
    <h1 class="h1">Gallery</h1>
    <hr>
    <h2 class="h2">Default / <VYCButton class="underline" flat @click="codeSnippet1 = !codeSnippet1">code</VYCButton></h2>
    <pre v-if="codeSnippet1"><code>{{ `<VYCGallery :gallery="gallery" />` }}</code></pre>
    <VYCGallery :gallery="gallery2" cover />

    <h2 class="h2">Cols / <VYCButton class="underline" flat @click="codeSnippet6 = !codeSnippet6">code</VYCButton></h2>
    <pre v-if="codeSnippet6"><code>{{ `<VYCGallery :gallery="gallery" :cols="3" />` }}</code></pre>
    <VYCGallery :gallery="gallery2" :cols="3" />
    
    <h2 class="h2">Contain,  gap='2rem' / <VYCButton class="underline" flat @click="codeSnippet2 = !codeSnippet2">code</VYCButton></h2>
    <pre v-if="codeSnippet2"><code>{{ `<VYCGallery :gallery="gallery" contain gap="2rem" />` }}</code></pre>
    <VYCGallery :gallery="gallery2" contain gap="2rem" />
    
    <h2 class="h2">Custom hover icon / <VYCButton class="underline" flat @click="codeSnippet3 = !codeSnippet3">code</VYCButton></h2>
    <pre v-if="codeSnippet3"><code>{{ `<VYCGallery :gallery="gallery">
    <template #hover-icon>
        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
            <rect y="21.332" width="30.1686" height="30.1686" transform="rotate(-45 0 21.332)" fill="#F9C600"/>
            <rect x="20.2617" y="14.1816" width="2.14148" height="14.3008" fill="#1D1D1D"/>
            <rect x="28.4844" y="20.2617" width="2.14148" height="14.3008" transform="rotate(90 28.4844 20.2617)" fill="#1D1D1D"/>
        </svg>
    </template>
</VYCGallery>` }}</code></pre>
    <VYCGallery :gallery="gallery2">
        <template #hover-icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                <rect y="21.332" width="30.1686" height="30.1686" transform="rotate(-45 0 21.332)" fill="#F9C600"/>
                <rect x="20.2617" y="14.1816" width="2.14148" height="14.3008" fill="#1D1D1D"/>
                <rect x="28.4844" y="20.2617" width="2.14148" height="14.3008" transform="rotate(90 28.4844 20.2617)" fill="#1D1D1D"/>
            </svg>
        </template>
    </VYCGallery>
    
    <h2 class="h2">Max Height / <VYCButton class="underline" flat @click="codeSnippet4 = !codeSnippet4">code</VYCButton></h2>
    <pre v-if="codeSnippet4"><code>{{ `<VYCGallery :gallery="gallery" max-height="320px" />` }}</code></pre>
    <VYCGallery :gallery="gallery2" max-height="320px" />
    
    <h2 class="h2">Max Height / <VYCButton class="underline" flat @click="codeSnippet5 = !codeSnippet5">code</VYCButton></h2>
    <pre v-if="codeSnippet5"><code>{{ `<VYCGallery :gallery="gallery" min-height="200px" />` }}</code></pre>
    <VYCGallery :gallery="gallery2" min-height="200px" />

    <hr>
    <h2 class="h1">Properties</h2>

    <div class="property">
        name: gallery <br>
        type: Array[VYCGalleryItem]<br>
        description: List of gallery items to show
    </div>
    <div class="property">
        name: cols <br>
        type: number<br>
        default: 2<br>
        description: Number of grid columns
    </div>
    <div class="property">
        name: gap<br>
        type: string<br>
        default: '1rem'<br>
        description: Grid gap amount for the gap between each item
    </div>
    <div class="property">
        name: contain<br>
        type: boolean<br>
        default: false<br>
        description: By default the thumbnails will cover the column with "object-cover", setting contain to true will change it to "object-contain"
    </div>
    <div class="property">
        name: maxHeight<br>
        type: string<br>
        description: Maximun height of the grid columns
    </div>
    <div class="property">
        name: minHeight<br>
        type: string<br>
        description: Minimun height of the grid columns
    </div>
    <div class="property">
        name: captionClasses<br>
        type: string<br>
        default: 'bg-opacity-50 bg-black'<br>
        description: Custom classes for the caption
    </div>

    <h2 class="h1">Slots</h2>
    
    <div class="property">
        name: hover-icon<br>
        description: The slot for the icon that appears on hover
    </div>
</template>