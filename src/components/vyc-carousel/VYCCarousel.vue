<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue"
import useBreakpoints from '../../composables/useBreakpoints'

const breakpoints = useBreakpoints()

interface responsive { 
    xs?: number,
    sm?: number,
    md?: number,
    lg?: number,
    xl?: number,
    xl2?: number,
}

const props = withDefaults(defineProps<{
    navigation?: boolean
    pagination?: boolean
    gutter?: number
    peekLeft?: number
    peekRight?: number
    slideSpeed?: number
    slidesPerPage?: number
    autoplay?: boolean
    autoplayDelay?: number
    responsive?: responsive
    mouseDrag?: boolean
    carouselClasses?: string
    indicatorClasses?: string
    activeIndicatorClasses?: string
}>(), {
    navigation: false,
    pagination: false,
    gutter: 0,
    peekLeft: 0,
    peekRight: 0,
    slideSpeed: 150,
    slidesPerPage: 1,
    autoplay: false,
    autoplayDelay: 5000,
    mouseDrag: false,
    carouselClasses: 'relative',
    indicatorClasses: 'bg-gray-400',
    activeIndicatorClasses: 'bg-gray-600'
})

const slides = ref<HTMLElement|null>(null)
const currentSlide = ref<number>(0)
const numberSlides = ref<number>(0)
const currentSlideStyles = ref<string>('')
const currentTranslate = ref<number>(0)
const startMouseX = ref<number>(0)
const oldMousePosition = ref<number>(0)
const beforeDragTranslate = ref<number>(0)
const afterDragTranslate = ref<number>(0)
const isMouseDown = ref<boolean>(false)
const autoPlayInterval = ref<number>(0)
const slidesPerPage = ref<number>(props.slidesPerPage)
const indicators = ref<number>(props.slidesPerPage)
const edgeClampAmount = ref<number>(100)
const slideDirection = ref<string>('')


const computedSliderClasses = computed(() => {
    return `flex transition-transform h-full`
})

const computedSliderStyles = computed(() =>{
    let translateAmount = currentTranslate.value * -1
    translateAmount -= (props.gutter * slidesPerPage.value) * currentSlide.value

    if (props.peekLeft) translateAmount += props.peekLeft

    let styles = `transform: translateX(${translateAmount}px);`
    if (!isMouseDown.value && props.slideSpeed) styles += `transition-duration: ${props.slideSpeed}ms;`

    return styles
})

const computedIndicatorClasses = computed(() => {
    return `m-0 w-2 h-2 rounded-full cursor-pointer`
})

function slide() {
    if (slides.value) {
        numberSlides.value = slides.value ? slides.value.children.length : 0

        if (!currentSlideStyles.value) {
            const styles = slides.value.getAttribute('style')
            currentSlideStyles.value = styles ? styles : ''
        }
        for (let i = 0; i < numberSlides.value; i++) {
            const slide = slides.value.children.item(i)
            if (props.responsive) calculateSlidesPerPage()
            indicators.value = Math.ceil(numberSlides.value / slidesPerPage.value)
            currentTranslate.value = slide ? (slide.clientWidth * currentSlide.value) * slidesPerPage.value : 0

            let widthStyle = `width: calc(${100 / slidesPerPage.value}% - (${props.peekRight}px + ${props.peekLeft}px));`
            let marginRightStyle = `margin-right: ${props.gutter}px;`
            slide?.setAttribute('style', widthStyle + marginRightStyle)
        }
    }
}
function next() {
    if (slides.value && currentSlide.value >= 0 && currentSlide.value < indicators.value-1) {
        currentSlide.value++
    }
}
function prev() {
    if (slides.value && currentSlide.value > 0 && currentSlide.value < indicators.value) {
        currentSlide.value--
    }
}

function setSlide(index: number) {    
    currentSlide.value = index
}

function onDragStart(event: MouseEvent|TouchEvent) {
    const x = event instanceof TouchEvent ? event.touches[0].pageX : event.x

    beforeDragTranslate.value = currentTranslate.value
    startMouseX.value = x
}

function onDragEnd(event: MouseEvent|TouchEvent) {
    const nextSlide = slides.value ? slides.value?.clientWidth / 4: 0
    const x = event instanceof TouchEvent ? afterDragTranslate.value : event.x
    if (currentSlide.value < indicators.value-1 && startMouseX.value - x > nextSlide) {
        slideDirection.value = 'right'
        next()
        return
    }
    if (currentSlide.value > 0 && startMouseX.value - x < -nextSlide) {
        slideDirection.value = 'left'
        prev()
        return
    }
    currentTranslate.value = beforeDragTranslate.value
}

function onDrag(event: MouseEvent|TouchEvent) {
    if (isMouseDown.value) {
        const x = event instanceof TouchEvent ? event.touches[0].pageX : event.x
        let newMousePosition = 0
        
        if (x) {
            newMousePosition = startMouseX.value - x
            
            if (newMousePosition != oldMousePosition.value) {
                oldMousePosition.value = newMousePosition
                if (currentSlide.value == 0) {
                    if (currentTranslate.value > -edgeClampAmount.value) {
                        currentTranslate.value = beforeDragTranslate.value + newMousePosition
                    }
                } else if (currentSlide.value == (numberSlides.value - 1) / slidesPerPage.value) {
                    if (currentTranslate.value < beforeDragTranslate.value + edgeClampAmount.value) {
                        currentTranslate.value = beforeDragTranslate.value + newMousePosition
                    }
                } else {
                    currentTranslate.value = beforeDragTranslate.value + newMousePosition
                }
            }
            afterDragTranslate.value = x
        }
    }
}

function onMouseDown(event: MouseEvent|TouchEvent) {
    if (!props.mouseDrag && event instanceof MouseEvent) return
    const _target = event.currentTarget as HTMLElement
    const mouseDownClasses = ['pointer-events-none', 'select-none']
    
    slides.value?.style.removeProperty('transition-duration')
    slides.value?.classList.remove('transition-transform')
    slides.value?.classList.add(...mouseDownClasses)

    _target.classList.remove('cursor-grab')
    _target.classList.add('cursor-grabbing')
    switch (true) {
        case event instanceof MouseEvent:
            window.addEventListener('mousemove', (event) => onDrag(event))
            break;
        case event instanceof TouchEvent:
            window.addEventListener('touchmove', (event) => onDrag(event))
            break;
        default:
            break;
    }
    isMouseDown.value = true
    
    onDragStart(event)
}

function onMouseUp(event: MouseEvent|TouchEvent) {
    if (!props.mouseDrag && event instanceof MouseEvent) return
    const _target = event.currentTarget as HTMLElement
    const mouseDownClasses = ['pointer-events-none', 'select-none']

    slides.value?.style.setProperty('transition-duration', `${props.slideSpeed}ms`)
    slides.value?.classList.add('transition-transform')
    slides.value?.classList.remove(...mouseDownClasses)

    _target.classList.remove('cursor-grabbing')
    _target.classList.add('cursor-grab')
    switch (true) {
        case event instanceof MouseEvent:
            window.removeEventListener('mousemove', (event) => onDrag(event))
            break;
        case event instanceof TouchEvent:
            window.removeEventListener('touchmove', (event) => onDrag(event))
            break;
        default:
            break;
    }
    isMouseDown.value = false
    
    onDragEnd(event)
}

function onMouseEnter() {
    if (props.autoplay) clearAutoPlayInterval()
}

function onMouseLeave(event: MouseEvent) {
    if (isMouseDown.value) {
        const _target = event.currentTarget as HTMLElement
        const transitionClasses = ['transition-transform']
    
        slides.value?.style.setProperty('transition-duration', `${props.slideSpeed}ms`)
        slides.value?.classList.add(...transitionClasses)
        
        _target.classList.remove('cursor-grabbing')
        _target.classList.add('cursor-grab')
        
        isMouseDown.value = false
        window.removeEventListener('mousemove', (event) => onDrag(event))
        onDragEnd(event)
    }
    if (props.autoplay) setAutoPlayInterval()
}



function setAutoPlayInterval() {
    autoPlayInterval.value = window.setInterval(() => autoPlay(), props.autoplayDelay)
}

function clearAutoPlayInterval() {
    clearInterval(autoPlayInterval.value)
    autoPlayInterval.value = 0
}

function autoPlay() {
    if (currentSlide.value == indicators.value-1) {
        currentSlide.value = 0
    } else {
        next()
    }
}

function calculateSlidesPerPage() {
    if (breakpoints.value.lt_mobile) {
        if (props.responsive?.xs) slidesPerPage.value = props.responsive?.xs
    }
    if (breakpoints.value.gt_mobile) {
        if (props.responsive?.sm) slidesPerPage.value = props.responsive?.sm
    }
    if (breakpoints.value.gt_tablet) {
        if (props.responsive?.md) slidesPerPage.value = props.responsive?.md
    }
    if (breakpoints.value.gt_tablet_landscape) {
        if (props.responsive?.lg) slidesPerPage.value = props.responsive?.lg
    }
    if (breakpoints.value.gt_desktop) {
        if (props.responsive?.xl) slidesPerPage.value = props.responsive?.xl
    }
    if (breakpoints.value.gt_desktop_large) {
        if (props.responsive?.xl2) slidesPerPage.value = props.responsive?.xl2
    }
}

onMounted(() => {
    slide()
    if (props.autoplay) setAutoPlayInterval()
    window.addEventListener('resize', () => slide())
})

watch(currentSlide, slide)

defineExpose({
    currentSlide,
    setSlide,
    next,
    prev,
})
</script>
<template>
    <div :class="[props.carouselClasses]">
        <div class="overflow-hidden h-full" @mousedown="onMouseDown" @mouseup="onMouseUp" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" @touchstart="onMouseDown" @touchend="onMouseUp">
            <div ref="slides" :class="computedSliderClasses" :style="computedSliderStyles">
                <slot></slot>
            </div>
        </div>
        <slot name="pagination">
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2" v-if="pagination">
                <ul class="flex gap-2 list-none">
                    <li v-for="slide in indicators" :key="slide" @click="setSlide(slide-1)" :class="[computedIndicatorClasses, currentSlide == slide-1 ? props.activeIndicatorClasses : '', props.indicatorClasses]"></li>
                </ul>
            </div>
        </slot>
        <slot name="navigation">
            <button @click="prev" class="absolute left-0 top-1/2 -translate-y-1/2" v-if="navigation">
                <svg class="w-8" width="100%" height="100%"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 7L10 12L15 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <button @click="next" class="absolute right-0 top-1/2 -translate-y-1/2" v-if="navigation">
                <svg class="w-8 rotate-180" width="100%" height="100%"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 7L10 12L15 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </slot>
    </div>
</template>
