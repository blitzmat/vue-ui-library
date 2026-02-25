<template>
    <section
        :data-aos="animation ? animation : 'fade-up'"
        :data-aos-offset="offset ? offset : '200'"
        :data-aos-delay="delay ? delay : '50'"
        :data-aos-duration="duration ? duration : '1000'"
        :data-aos-easing="easing ? easing : 'ease-in-out'"
        :data-aos-mirror="mirror ? mirror : 'true'"
        :data-aos-once="once ? once : 'false'"
        :data-aos-anchor-placement="anchorPlacement ? anchorPlacement : 'top-center'"
    >
        <slot></slot>
    </section>
</template>

<script setup lang="ts">
import AOS from 'aos';
import 'aos/dist/aos.css';

const props = defineProps<{
    animation?: string
    offset?: string
    delay?: string
    duration?: string
    easing?: string
    mirror?: string
    once?: string
    anchorPlacement?: string
}>()

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
});
</script>