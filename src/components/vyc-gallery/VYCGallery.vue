<script setup lang="ts">
import VYCModal from '@/components/vyc-modal/VYCModal.vue'; 
import VYCCarousel from '@/components/vyc-carousel/VYCCarousel.vue';
import VYCSlide from '@/components/vyc-carousel/VYCSlide.vue';
import VYCImage from '@/components/vyc-image/VYCImage.vue';
import VYCVideo from '@/components/vyc-video/VYCVideo.vue';
import type { VYCMediaType } from '@/types'
import { computed, ref, watch } from 'vue';
import useBreakpoints from '@/composables/useBreakpoints';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const props = withDefaults(defineProps<{
    gallery: Array<VYCMediaType>
    cols?: number
    gap?: string
    contain?: boolean
    maxHeight?: string
    minHeight?: string
    captionClasses?: string
    overlayClasses?: string
    cover?: boolean
    
}>(),{
    cols: 2,
    gap: '1rem',
    captionClasses: 'bg-opacity-50 bg-black text-white',
})

const breakpoints = useBreakpoints()
const carousel = ref()
const modelActive = ref<boolean>(false)
const activeItem = ref<number>(0)

const computedMediaClasses = computed(() => {
    return `hover:scale-110 transition-transform ${props.cover ? 'w-full h-full object-cover' : ''}`
})

function openModel(idx: number) {
    modelActive.value = true
    activeItem.value = idx
}
watch(carousel, (val) => {
    if (val) carousel.value.slideTo(activeItem.value)
})
</script>

<template>
    <template v-if="breakpoints.gt_tablet">
        <section class="grid" :style="`grid-template-columns: repeat(${cols}, minmax(0, 1fr)); gap: ${gap};`">
            <div v-for="(item, idx) in gallery" class="overflow-hidden cursor-pointer h-full" :style="`min-height: ${minHeight}; max-height: ${maxHeight};`">
                <template v-if="item.type == 'image'">
                    <VYCImage
                        :alt="item.alt"
                        :src="item.src"
                        :srcset="item.srcset"
                        :width="item.width"
                        :height="item.height"
                        :cover="cover"
                        :media-classes="computedMediaClasses"
                        class="h-full"
                        @click="openModel(idx)"
                    >
                        <div class="opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 transition-opacity pointer-events-none">
                            <slot name="hover-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                                    <rect width="43" height="43" transform="" fill="white"/>
                                    <rect x="20.2617" y="14.1816" width="2.14148" height="14.3008" fill="#1D1D1D"/>
                                    <rect x="28.4844" y="20.2617" width="2.14148" height="14.3008" transform="rotate(90 28.4844 20.2617)" fill="#1D1D1D"/>
                                </svg>
                            </slot>
                        </div>
                    </VYCImage>
                </template>
                <template v-if="item.type == 'video'">
                    <VYCImage
                        :alt="item.alt"
                        :src="item.poster"
                        :srcset="item.srcset"
                        :width="item.width"
                        :height="item.height"
                        :cover="cover"
                        :media-classes="computedMediaClasses"
                        @click="openModel(idx)"
                    >
                        <div class="opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 transition-opacity pointer-events-none">
                            <slot name="hover-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                                    <rect width="43" height="43" transform="" fill="white"/>
                                    <rect x="20.2617" y="14.1816" width="2.14148" height="14.3008" fill="#1D1D1D"/>
                                    <rect x="28.4844" y="20.2617" width="2.14148" height="14.3008" transform="rotate(90 28.4844 20.2617)" fill="#1D1D1D"/>
                                </svg>
                            </slot>
                        </div>
                    </VYCImage>
                </template>
            </div>
        </section>
    </template>
    <template v-else>
        <Carousel :items-to-show="1.2" snap-align="start">
            <Slide v-for="(slide, slideIdx) in gallery" :key="slideIdx" class="flex flex-col justify-between">
                <template v-if="slide.type == 'image'">
                    <VYCImage
                        :alt="slide.alt"
                        :src="slide.src"
                        :srcset="slide.srcset"
                        :width="slide.width"
                        :height="slide.height"
                        :cover="cover"
                        :media-classes="computedMediaClasses"
                        class="h-full"
                        @click="openModel(slideIdx)"
                    >
                        <div class="opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 transition-opacity pointer-events-none">
                            <slot name="hover-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                                    <rect width="43" height="43" transform="" fill="white"/>
                                    <rect x="20.2617" y="14.1816" width="2.14148" height="14.3008" fill="#1D1D1D"/>
                                    <rect x="28.4844" y="20.2617" width="2.14148" height="14.3008" transform="rotate(90 28.4844 20.2617)" fill="#1D1D1D"/>
                                </svg>
                            </slot>
                        </div>
                    </VYCImage>
                </template>
                <template v-if="slide.type == 'video'">
                    <VYCImage
                        :alt="slide.alt"
                        :src="slide.poster"
                        :srcset="slide.srcset"
                        :width="slide.width"
                        :height="slide.height"
                        :cover="cover"
                        :media-classes="computedMediaClasses"
                        @click="openModel(slideIdx)"
                    >
                        <div class="opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 transition-opacity pointer-events-none">
                            <slot name="hover-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                                    <rect width="43" height="43" transform="" fill="white"/>
                                    <rect x="20.2617" y="14.1816" width="2.14148" height="14.3008" fill="#1D1D1D"/>
                                    <rect x="28.4844" y="20.2617" width="2.14148" height="14.3008" transform="rotate(90 28.4844 20.2617)" fill="#1D1D1D"/>
                                </svg>
                            </slot>
                        </div>
                    </VYCImage>
                </template>
            </Slide>
        </Carousel>
    </template>
    <VYCModal v-model="modelActive" @close="modelActive = false" :modal-classes="overlayClasses ?? '!bg-transparent text-white flex flex-col'">
        <Carousel class="modal-carousel" ref="carousel" :items-to-show="1" snap-align="start">
            <Slide v-for="(slide, idx) in gallery" :key="idx" class="flex flex-col justify-between">
                <div v-if="slide.type == 'image'" class="flex justify-center max-h-[80vh] object-contain">
                    <VYCImage
                        :alt="slide.alt"
                        :src="slide.src"
                        :srcset="slide.srcset"
                        :width="slide.width"
                        :height="slide.height"
                        class=""
                        media-classes="h-full object-contain"
                    />
                </div>
                <div v-if="slide.type == 'video'">
                    <VYCVideo
                        :poster="slide.poster"
                        :src="slide.src"
                        :srcset="slide.srcset"
                        :width="slide.width"
                        :height="slide.height"
                        :youtube-id="slide.youtubeId"
                        class="flex flex-col justify-center items-center size-full"
                    />
                </div>
                <div v-if="slide.caption" class="text-center">
                    <div v-html="slide.caption" :class="`p-4 w-full ${captionClasses}`"></div>
                </div>
            </Slide>
            <template #addons>
                <Navigation v-if="breakpoints.gt_tablet" />
            </template>
        </Carousel>
    </VYCModal>
</template>

<style scoped>
.modal-carousel :deep(.carousel__prev),
.modal-carousel :deep(.carousel__next ){
    color: white;
}
</style>