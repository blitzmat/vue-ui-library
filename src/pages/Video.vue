<script setup lang="ts">
import { VYCButton, VYCVideo } from "@/components";
import { ref } from "vue";

const codeSnippet1 = ref<boolean>(false)
</script>

<template>
    <h1 class="h1">Video</h1>

    <hr>

    <h2 class="h2">Video mp4 / <VYCButton class="underline" flat @click="codeSnippet1 = !codeSnippet1">code</VYCButton></h2>
    <pre v-if="codeSnippet1"><code>{{ `<VYCVideo src="https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4" controls cover />` }}</code></pre>
    <VYCVideo src="https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4" controls cover />
    <hr>

    <h2 class="h2">Video youtube / <VYCButton class="underline" flat @click="codeSnippet1 = !codeSnippet1">code</VYCButton></h2>
    <pre v-if="codeSnippet1"><code>{{ `<VYCVideo youtube-id="fg-bzBsSSSo" cover />` }}</code></pre>
    <VYCVideo youtube-id="fg-bzBsSSSo" cover />


    <hr>

    <h2 class="h1">Properties</h2>


    <div class="property">
        name: title <br>
        type: string <br>
        description: Video title
    </div>

    <div class="property">
        name: src <br>
        type: string <br>
        description: source for the video
    </div>
  
    <div class="property">
        name: poster <br>
        type: string <br>
        description: Image source to display as the video thumbnail
    </div>
  
    <div class="property">
        name: controls <br>
        type: boolean <br>
        default: false <br>
        description: displays video controles (play, pause, stop volumn, etc.)
    </div>
    <div class="property">
        name: cover <br>
        type: boolean <br>
        default: false <br>
        description: covers the container width and height which the video is in.
    </div>
    <div class="property">
        name: youtubeId <br>
        type: string <br>
        description: YouTube video id
    </div>
    <div class="property">
        name: mediaClasses <br>
        type: string <br>
        description: custom classes 
    </div>


</template>