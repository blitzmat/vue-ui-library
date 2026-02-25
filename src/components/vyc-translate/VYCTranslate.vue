<template>
    <section ref="element">
        <slot />
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = withDefaults(defineProps<{
    direction?: 'top'|'bottom'|'right'|'left'
    speed?: string
    delay?: number
    deactivate?: boolean
}>(),{
    speed: '0.5s',
    direction: 'left'
})

const element = ref<HTMLElement>()
const observer = ref<IntersectionObserver>()
const animateComplete = ref<boolean>(false)

onMounted(() => {
    if (props.direction == 'top') {
        (element.value as HTMLElement).style.transform = 'translateY(-100%)'
    } else if (props.direction == 'bottom') {
        (element.value as HTMLElement).style.transform = 'translateY(100%)'
    } else if (props.direction == 'right') {
        (element.value as HTMLElement).style.transform = 'translateX(100%)'
    } else {
        (element.value as HTMLElement).style.transform = 'translateX(-100%)'
    }
    observer.value = new IntersectionObserver(activate, {root: null})
    if (element.value) observer.value.observe(element.value)
})

function activate(entries:Array<IntersectionObserverEntry>):void {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (animateComplete.value) return
            setTimeout(() => animate((entry.target as HTMLElement), props.speed), props.delay)
        }
    })
}

function animate(el:HTMLElement, speed:string):void {
    el.style.transition = `all ${speed} cubic-bezier(0, 0, 0.1, 0.93)`
    el.style.transform = 'translate(0)'
    el.style.opacity = '1'
    animateComplete.value = true
}

</script>