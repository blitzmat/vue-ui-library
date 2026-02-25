<template>
    <section :class="['group relative aspect-video object-cover', props.class]">
        <iframe
            v-if="youtubeId"
            ref="ytPlayer"
            :class="[computedClasses, mediaClasses]"
            :src="videoSrc"
            :title="title"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
        >
        </iframe>
        <video
            v-else
            ref="video"
            preload="metadata"
            :src="src"
            :poster="poster"
            :controls="controls"
            :class="[computedClasses, mediaClasses]" />
        <slot />
    </section>

</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { VYCMediaType } from '@/types';

const props = defineProps<VYCMediaType>()

const ytPlayer = ref()
const video = ref()

const videoSrc = computed(() => {
    if (props.youtubeId) return `https://www.youtube.com/embed/${props.youtubeId}?enablejsapi=1`
    return props.src ? props.src : ''
})
const computedClasses = computed(() => {
    return  {
        'object-cover': true,
        'h-full w-full': props.cover
    }
})

</script>