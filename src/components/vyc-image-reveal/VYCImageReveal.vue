<template>
    <section ref="element">
        <slot />
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';


const element = ref<HTMLElement>()
const observer = ref<IntersectionObserver>()

onMounted(() => {
    observer.value = new IntersectionObserver(activate, {root: null})
    if (element.value) {
        element.value.style.clipPath = 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)';
        observer.value.observe(element.value)
    }
})

function activate(entries:Array<IntersectionObserverEntry>): void {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            addEventListener('scroll', () => onScroll(entry.target as HTMLElement))
        } else {
            removeEventListener('scroll', () => onScroll(entry.target as HTMLElement))
        }
    })
}

function onScroll(el:HTMLElement): void {
    if (scrollY + window.innerHeight > el.offsetTop + el.clientHeight) {
        const translateAmount = (scrollY + window.innerHeight) - (el.offsetTop + el.clientHeight) 
        const translateAmountPercent = (translateAmount / el.clientHeight) * 100
        if (translateAmount < el.clientHeight) {
            el.style.clipPath = `polygon(0 ${100 - translateAmountPercent}%, 100% ${100 - translateAmountPercent}%, 100% 100%, 0 100%)`
        } else {
            el.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
        }
    } else {
        el.style.clipPath = 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
    }
}
</script>