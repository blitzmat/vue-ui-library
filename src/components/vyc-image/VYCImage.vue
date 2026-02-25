<template>
    <figure :class="['group relative', props.class]">
        <img
            :src="src"
            :srcset="srcset"
            :alt="alt"
            :width="width"
            :height="height"
            :class="[fullWidth ? 'w-full' : '', mediaClasses]"
            :loading="loading ?? 'lazy'">
        
        <slot />
    </figure>
</template>

<script setup lang="ts">
import type { VYCMediaType } from "@/types";
import { computed, onMounted, ref } from "vue";

const props = defineProps<VYCMediaType>()

</script>