<script setup lang="ts">
import { VYCButton, VYCTooltip } from "@/components";
import { ref } from "vue";

const tooltip = ref<boolean>(false)
const codeSnippet1 = ref<boolean>(false)
const codeSnippet2 = ref<boolean>(false)
const codeSnippet3 = ref<boolean>(false)
const codeSnippet4 = ref<boolean>(false)
const codeSnippet5 = ref<boolean>(false)
const codeSnippet6 = ref<boolean>(false)
const codeSnippet7 = ref<boolean>(false)
const codeSnippet8 = ref<boolean>(false)
</script>

<template>
    <h1 class="h1">Tooltips</h1>
    <hr>
    
    <h2 class="h2">Tooltip - Hover / <VYCButton class="underline" flat @click="codeSnippet1 = !codeSnippet1">code</VYCButton></h2>
    <pre v-if="codeSnippet1"><code>{{ `<VYCTooltip v-model="tooltip">
    <template #trigger>
        <VYCButton>Hover Top</VYCButton>
    </template>
    <p>This is the tooltip</p>
    <p>This is the tooltip</p>
</VYCTooltip>

<VYCTooltip v-model="tooltip" direction="right">
    <template #trigger>
        <VYCButton>Hover Right</VYCButton>
    </template>
    <p>This is the tooltip</p>
    <p>This is the tooltip</p>
</VYCTooltip>

<VYCTooltip v-model="tooltip" direction="bottom">
    <template #trigger>
        <VYCButton>Hover Bottom</VYCButton>
    </template>
    <p>This is the tooltip</p>
    <p>This is the tooltip</p>
</VYCTooltip>

<VYCTooltip v-model="tooltip" direction="left">
    <template #trigger>
        <VYCButton>Hover Left</VYCButton>
    </template>
    <p>This is the tooltip</p>
    <p>This is the tooltip</p>
</VYCTooltip>` }}</code></pre>
    <div class="flex gap-2">
        <VYCTooltip v-model="tooltip">
            <template #trigger>
                <VYCButton>Hover Top</VYCButton>
            </template>
            <p>This is the tooltip</p>
            <p>This is the tooltip</p>
        </VYCTooltip>
    
        <VYCTooltip v-model="tooltip" direction="right">
            <template #trigger>
                <VYCButton>Hover Right</VYCButton>
            </template>
            <p>This is the tooltip</p>
            <p>This is the tooltip</p>
        </VYCTooltip>
    
        <VYCTooltip v-model="tooltip" direction="bottom">
            <template #trigger>
                <VYCButton>Hover Bottom</VYCButton>
            </template>
            <p>This is the tooltip</p>
            <p>This is the tooltip</p>
        </VYCTooltip>
    
        <VYCTooltip v-model="tooltip" direction="left">
            <template #trigger>
                <VYCButton>Hover Left</VYCButton>
            </template>
            <p>This is the tooltip</p>
            <p>This is the tooltip</p>
        </VYCTooltip>
    </div>

    <hr>
    <h2 class="h2">Tooltip - Click / <VYCButton class="underline" flat @click="codeSnippet2 = !codeSnippet2">code</VYCButton></h2>
    <pre v-if="codeSnippet2"><code>{{ `<VYCTooltip v-model="tooltip" click>
    <template #trigger>
        <VYCButton>Click Top</VYCButton>
    </template>
    <p>This is the tooltip</p>
    <p>This is the tooltip</p>
</VYCTooltip>

<VYCTooltip v-model="tooltip" direction="right" click>
    <template #trigger>
        <VYCButton>Click Right</VYCButton>
    </template>
    <p>This is the tooltip</p>
    <p>This is the tooltip</p>
</VYCTooltip>

<VYCTooltip v-model="tooltip" direction="bottom" click>
    <template #trigger>
        <VYCButton>Click Bottom</VYCButton>
    </template>
    <p>This is the tooltip</p>
    <p>This is the tooltip</p>
</VYCTooltip>

<VYCTooltip v-model="tooltip" direction="left" click>
    <template #trigger>
        <VYCButton>Click Left</VYCButton>
    </template>
    <p>This is the tooltip</p>
    <p>This is the tooltip</p>
</VYCTooltip>` }}</code></pre>
    <div class="flex gap-2">
        <VYCTooltip v-model="tooltip" click>
            <template #trigger>
                <VYCButton>Click Top</VYCButton>
            </template>
            <p>This is the tooltip</p>
            <p>This is the tooltip</p>
        </VYCTooltip>
    
        <VYCTooltip v-model="tooltip" direction="right" click>
            <template #trigger>
                <VYCButton>Click Right</VYCButton>
            </template>
            <p>This is the tooltip</p>
            <p>This is the tooltip</p>
        </VYCTooltip>
    
        <VYCTooltip v-model="tooltip" direction="bottom" click>
            <template #trigger>
                <VYCButton>Click Bottom</VYCButton>
            </template>
            <p>This is the tooltip</p>
            <p>This is the tooltip</p>
        </VYCTooltip>
    
        <VYCTooltip v-model="tooltip" direction="left" click>
            <template #trigger>
                <VYCButton>Click Left</VYCButton>
            </template>
            <p>This is the tooltip</p>
            <p>This is the tooltip</p>
        </VYCTooltip>
    </div>

    <hr>
    <h2 class="h2">Tooltip - Position Left / <VYCButton class="underline" flat @click="codeSnippet3 = !codeSnippet3">code</VYCButton></h2>
    <pre v-if="codeSnippet3"><code>{{ `<VYCTooltip v-model="tooltip" position-x="left">
    <template #trigger>
        <VYCButton>Top Left</VYCButton>
    </template>
    <p>This is the tooltip</p>
    <p>This is the tooltip</p>
</VYCTooltip>

<VYCTooltip v-model="tooltip" direction="bottom" position-x="left">
    <template #trigger>
        <VYCButton>Bottom Left</VYCButton>
    </template>
    <p>This is the tooltip</p>
    <p>This is the tooltip</p>
</VYCTooltip>` }}</code></pre>
    <div class="flex gap-2">
        <VYCTooltip v-model="tooltip" position-x="left">
            <template #trigger>
                <VYCButton>Top Left</VYCButton>
            </template>
            <p>This is the tooltip</p>
            <p>This is the tooltip</p>
        </VYCTooltip>

        <VYCTooltip v-model="tooltip" direction="bottom" position-x="left">
            <template #trigger>
                <VYCButton>Bottom Left</VYCButton>
            </template>
            <p>This is the tooltip</p>
            <p>This is the tooltip</p>
        </VYCTooltip>
    </div>

    <hr>
    <h2 class="h2">Tooltip - Position Right / <VYCButton class="underline" flat @click="codeSnippet4 = !codeSnippet4">code</VYCButton></h2>
    <pre v-if="codeSnippet4"><code>{{ `<VYCTooltip v-model="tooltip" position-x="right">
    <template #trigger>
        <VYCButton>Top Right</VYCButton>
    </template>
    <p>This is the tooltip</p>
    <p>This is the tooltip</p>
</VYCTooltip>

<VYCTooltip v-model="tooltip" direction="bottom" position-x="right">
    <template #trigger>
        <VYCButton>Bottom Right</VYCButton>
    </template>
    <p>This is the tooltip</p>
    <p>This is the tooltip</p>
</VYCTooltip>` }}</code></pre>
    <div class="flex gap-2">
        <VYCTooltip v-model="tooltip" position-x="right">
            <template #trigger>
                <VYCButton>Top Right</VYCButton>
            </template>
            <p>This is the tooltip</p>
            <p>This is the tooltip</p>
        </VYCTooltip>

        <VYCTooltip v-model="tooltip" direction="bottom" position-x="right">
            <template #trigger>
                <VYCButton>Bottom Right</VYCButton>
            </template>
            <p>This is the tooltip</p>
            <p>This is the tooltip</p>
        </VYCTooltip>
    </div>

    <hr>
    <h2 class="h2">Tooltip - Position Top / <VYCButton class="underline" flat @click="codeSnippet5 = !codeSnippet5">code</VYCButton></h2>
    <pre v-if="codeSnippet5"><code>{{ `<VYCTooltip v-model="tooltip" direction="right" position-y="top">
    <template #trigger>
        <VYCButton>Right Top</VYCButton>
    </template>
    <p>This is the tooltip</p>
    <p>This is the tooltip</p>
</VYCTooltip>


<VYCTooltip v-model="tooltip" direction="left" position-y="top">
    <template #trigger>
        <VYCButton>Left Top</VYCButton>
    </template>
    <p>This is the tooltip</p>
    <p>This is the tooltip</p>
</VYCTooltip>` }}</code></pre>
    <div class="flex gap-2">
        <VYCTooltip v-model="tooltip" direction="right" position-y="top">
            <template #trigger>
                <VYCButton>Right Top</VYCButton>
            </template>
            <p>This is the tooltip</p>
            <p>This is the tooltip</p>
        </VYCTooltip>
    
    
        <VYCTooltip v-model="tooltip" direction="left" position-y="top">
            <template #trigger>
                <VYCButton>Left Top</VYCButton>
            </template>
            <p>This is the tooltip</p>
            <p>This is the tooltip</p>
        </VYCTooltip>
    </div>

    <hr>
    <h2 class="h2">Tooltip - Position Bottom / <VYCButton class="underline" flat @click="codeSnippet6 = !codeSnippet6">code</VYCButton></h2>
    <pre v-if="codeSnippet6"><code>{{ `<VYCTooltip v-model="tooltip" direction="right" position-y="bottom">
    <template #trigger>
        <VYCButton>Right Bottom</VYCButton>
    </template>
    <p>This is the tooltip</p>
    <p>This is the tooltip</p>
</VYCTooltip>


<VYCTooltip v-model="tooltip" direction="left" position-y="bottom">
    <template #trigger>
        <VYCButton>Left Bottom</VYCButton>
    </template>
    <p>This is the tooltip</p>
    <p>This is the tooltip</p>
</VYCTooltip>` }}</code></pre>
    <div class="flex gap-2">
        <VYCTooltip v-model="tooltip" direction="right" position-y="bottom">
            <template #trigger>
                <VYCButton>Right Bottom</VYCButton>
            </template>
            <p>This is the tooltip</p>
            <p>This is the tooltip</p>
        </VYCTooltip>
    
    
        <VYCTooltip v-model="tooltip" direction="left" position-y="bottom">
            <template #trigger>
                <VYCButton>Left Bottom</VYCButton>
            </template>
            <p>This is the tooltip</p>
            <p>This is the tooltip</p>
        </VYCTooltip>
    </div>
    
    
    
    <h2 class="h2">Tooltip - No styles / <VYCButton class="underline" flat @click="codeSnippet7 = !codeSnippet7">code</VYCButton></h2>
    <pre v-if="codeSnippet7"><code>{{ `<VYCTooltip v-model="tooltip" no-styles>
    <p>This is the tooltip</p>
    <p>This is the tooltip</p>
</VYCTooltip>` }}</code></pre>
    <VYCTooltip v-model="tooltip" no-styles>
        <p>This is the tooltip</p>
        <p>This is the tooltip</p>
    </VYCTooltip>
    
    

    <h2 class="h2">Tooltip - Custom styles / <VYCButton class="underline" flat @click="codeSnippet8 = !codeSnippet8">code</VYCButton></h2>
    <pre v-if="codeSnippet8"><code>{{ `<VYCTooltip v-model="tooltip" direction="right" tooltipClasses="bg-yellow-400 rounded-lg p-5" tooltipArrowClasses="text-yellow-400">
    <template #trigger>
        <svg class="w-16" width="100%" height="100%" viewBox="0 0 1024 1024"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M250.42 815.17C135.89 705.81 128 530.31 216.51 377.08S461 142.93 613 187.39a68.84 68.84 0 0 1 4.05-8.24c20.24-35 67.24-45.81 105-24S773.94 222.94 753.7 258a68.85 68.85 0 0 1-5.11 7.63C863.12 375 871 550.48 782.49 703.71S538 937.86 386 893.4a68.84 68.84 0 0 1-4.05 8.24c-20.24 35-67.24 45.81-105 24s-51.9-67.83-31.65-102.88a68.84 68.84 0 0 1 5.12-7.59z" fill="#FFFFFF" /><path d="M754.53 189.06c11.05 21.67 11.62 47.38-0.83 68.93a68.85 68.85 0 0 1-5.11 7.63C863.12 375 871 550.48 782.49 703.71S538 937.86 386 893.4a68.84 68.84 0 0 1-4.05 8.24c-12.35 21.36-34.58 33.66-58.6 35.14-11.05-21.67-11.62-47.38 0.83-68.93a68.84 68.84 0 0 1 5.11-7.63c-114.53-109.36-122.41-284.86-33.9-438.09S539.88 188 691.9 232.44a68.83 68.83 0 0 1 4.1-8.24c12.28-21.33 34.51-33.66 58.53-35.14z" fill="#FBDB7B" /><path d="M308 837.75q222-85.63 312.28-243.21Q704 448.43 737.86 191.91a77.73 77.73 0 0 1 16.67-2.86c11.05 21.67 11.62 47.38-0.83 68.93a68.85 68.85 0 0 1-5.11 7.63C863.12 375 871 550.48 782.49 703.71S538 937.86 386 893.4a68.84 68.84 0 0 1-4.05 8.24c-12.35 21.36-34.58 33.66-58.6 35.14-11.05-21.67-11.62-47.38 0.83-68.93a68.84 68.84 0 0 1 5.11-7.63A304.28 304.28 0 0 1 308 837.75z" fill="#F9AF49" /><path d="M318.34 957.37a103.2 103.2 0 0 1-51.62-14 101.86 101.86 0 0 1-46.9-58.18c-7-22.82-5.31-46.37 4.74-67C172.5 763.23 142.27 693 136.89 614c-5.58-81.92 15.82-167.38 61.88-247.13 35.54-61.54 82.77-113.4 136.57-150l23 33.87c-48.74 33.15-91.66 80.39-124.14 136.62-42 72.68-61.51 150.08-56.49 223.86 5.06 74.37 35.08 139.79 86.8 189.17l13.33 12.73-11.26 14.59A48.52 48.52 0 0 0 263 833c-6.91 12-8.36 26.22-4.07 40.15a61 61 0 0 0 28.23 34.75c27.89 16.1 62.43 8.67 77-16.54a48.48 48.48 0 0 0 2.85-5.79l7-17 17.68 5.17c68.69 20.08 140.38 13.36 207.31-19.45 66.43-32.54 123.73-88.15 165.71-160.83s61.51-150.08 56.49-223.86c-5.06-74.37-35.08-139.79-86.8-189.17l-13.29-12.73 11.26-14.59a48.46 48.46 0 0 0 3.59-5.36c6.91-12 8.36-26.23 4.07-40.15a61 61 0 0 0-28.23-34.75c-27.89-16.1-62.43-8.67-77 16.54a48.53 48.53 0 0 0-2.85 5.79l-37.88-15.59a89.66 89.66 0 0 1 5.26-10.69c25.85-44.76 85.49-58.91 132.93-31.53a101.86 101.86 0 0 1 46.9 58.18c7 22.82 5.31 46.37-4.74 67 52.07 55 82.29 125.25 87.67 204.25 5.58 81.92-15.82 167.38-61.88 247.13s-109.4 141-183.16 177.13c-71.14 34.84-147.13 43.81-220.81 26.23-17.51 25.89-47.01 40.08-77.9 40.08z" fill="" /><path d="M448.43 264.45q87.12 0 157.75-78.84-70.63-78.84-157.75-78.84t-157.75 78.84q70.63 78.84 157.75 78.84z" fill="#89D66D" /><path d="M452.43 284.93c-63.88 0-122.09-28.82-173-85.65l-12.24-13.67 12.24-13.67c50.92-56.84 109.12-85.65 173-85.65s122.09 28.82 173 85.65l12.24 13.67-12.24 13.67c-50.91 56.84-109.12 85.65-173 85.65zM323 185.61c17.84 17.55 36.49 31.25 55.63 40.81a164.13 164.13 0 0 0 147.69 0c19.14-9.57 37.79-23.26 55.63-40.81-17.84-17.55-36.49-31.25-55.63-40.81a164.14 164.14 0 0 0-147.69 0c-19.18 9.57-37.84 23.26-55.63 40.81z" fill="" /><path d="M430.87 169.9h151.55a11.26 11.26 0 0 1 11.26 11.26v8.19a11.26 11.26 0 0 1-11.26 11.26H430.87a11.26 11.26 0 0 1-11.26-11.26v-8.19a11.26 11.26 0 0 1 11.26-11.26z" fill="#015200" /><path d="M310.52 871a19.91 19.91 0 0 1-10-2.68C249.7 839 213.27 808.13 189.17 774a20 20 0 1 1 32.66-23c20.69 29.27 53 56.32 98.71 82.71a20 20 0 0 1-10 37.33z" fill="" /></svg>
    </template>
    <p>This is a <span class="underline"><em>lemon</em></span>!</p>
    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</VYCTooltip>` }}</code></pre>
    <VYCTooltip v-model="tooltip" direction="right" tooltipClasses="bg-yellow-400 rounded-lg p-5" tooltipArrowClasses="text-yellow-400">
        <template #trigger>
            <svg class="w-16" width="100%" height="100%" viewBox="0 0 1024 1024"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M250.42 815.17C135.89 705.81 128 530.31 216.51 377.08S461 142.93 613 187.39a68.84 68.84 0 0 1 4.05-8.24c20.24-35 67.24-45.81 105-24S773.94 222.94 753.7 258a68.85 68.85 0 0 1-5.11 7.63C863.12 375 871 550.48 782.49 703.71S538 937.86 386 893.4a68.84 68.84 0 0 1-4.05 8.24c-20.24 35-67.24 45.81-105 24s-51.9-67.83-31.65-102.88a68.84 68.84 0 0 1 5.12-7.59z" fill="#FFFFFF" /><path d="M754.53 189.06c11.05 21.67 11.62 47.38-0.83 68.93a68.85 68.85 0 0 1-5.11 7.63C863.12 375 871 550.48 782.49 703.71S538 937.86 386 893.4a68.84 68.84 0 0 1-4.05 8.24c-12.35 21.36-34.58 33.66-58.6 35.14-11.05-21.67-11.62-47.38 0.83-68.93a68.84 68.84 0 0 1 5.11-7.63c-114.53-109.36-122.41-284.86-33.9-438.09S539.88 188 691.9 232.44a68.83 68.83 0 0 1 4.1-8.24c12.28-21.33 34.51-33.66 58.53-35.14z" fill="#FBDB7B" /><path d="M308 837.75q222-85.63 312.28-243.21Q704 448.43 737.86 191.91a77.73 77.73 0 0 1 16.67-2.86c11.05 21.67 11.62 47.38-0.83 68.93a68.85 68.85 0 0 1-5.11 7.63C863.12 375 871 550.48 782.49 703.71S538 937.86 386 893.4a68.84 68.84 0 0 1-4.05 8.24c-12.35 21.36-34.58 33.66-58.6 35.14-11.05-21.67-11.62-47.38 0.83-68.93a68.84 68.84 0 0 1 5.11-7.63A304.28 304.28 0 0 1 308 837.75z" fill="#F9AF49" /><path d="M318.34 957.37a103.2 103.2 0 0 1-51.62-14 101.86 101.86 0 0 1-46.9-58.18c-7-22.82-5.31-46.37 4.74-67C172.5 763.23 142.27 693 136.89 614c-5.58-81.92 15.82-167.38 61.88-247.13 35.54-61.54 82.77-113.4 136.57-150l23 33.87c-48.74 33.15-91.66 80.39-124.14 136.62-42 72.68-61.51 150.08-56.49 223.86 5.06 74.37 35.08 139.79 86.8 189.17l13.33 12.73-11.26 14.59A48.52 48.52 0 0 0 263 833c-6.91 12-8.36 26.22-4.07 40.15a61 61 0 0 0 28.23 34.75c27.89 16.1 62.43 8.67 77-16.54a48.48 48.48 0 0 0 2.85-5.79l7-17 17.68 5.17c68.69 20.08 140.38 13.36 207.31-19.45 66.43-32.54 123.73-88.15 165.71-160.83s61.51-150.08 56.49-223.86c-5.06-74.37-35.08-139.79-86.8-189.17l-13.29-12.73 11.26-14.59a48.46 48.46 0 0 0 3.59-5.36c6.91-12 8.36-26.23 4.07-40.15a61 61 0 0 0-28.23-34.75c-27.89-16.1-62.43-8.67-77 16.54a48.53 48.53 0 0 0-2.85 5.79l-37.88-15.59a89.66 89.66 0 0 1 5.26-10.69c25.85-44.76 85.49-58.91 132.93-31.53a101.86 101.86 0 0 1 46.9 58.18c7 22.82 5.31 46.37-4.74 67 52.07 55 82.29 125.25 87.67 204.25 5.58 81.92-15.82 167.38-61.88 247.13s-109.4 141-183.16 177.13c-71.14 34.84-147.13 43.81-220.81 26.23-17.51 25.89-47.01 40.08-77.9 40.08z" fill="" /><path d="M448.43 264.45q87.12 0 157.75-78.84-70.63-78.84-157.75-78.84t-157.75 78.84q70.63 78.84 157.75 78.84z" fill="#89D66D" /><path d="M452.43 284.93c-63.88 0-122.09-28.82-173-85.65l-12.24-13.67 12.24-13.67c50.92-56.84 109.12-85.65 173-85.65s122.09 28.82 173 85.65l12.24 13.67-12.24 13.67c-50.91 56.84-109.12 85.65-173 85.65zM323 185.61c17.84 17.55 36.49 31.25 55.63 40.81a164.13 164.13 0 0 0 147.69 0c19.14-9.57 37.79-23.26 55.63-40.81-17.84-17.55-36.49-31.25-55.63-40.81a164.14 164.14 0 0 0-147.69 0c-19.18 9.57-37.84 23.26-55.63 40.81z" fill="" /><path d="M430.87 169.9h151.55a11.26 11.26 0 0 1 11.26 11.26v8.19a11.26 11.26 0 0 1-11.26 11.26H430.87a11.26 11.26 0 0 1-11.26-11.26v-8.19a11.26 11.26 0 0 1 11.26-11.26z" fill="#015200" /><path d="M310.52 871a19.91 19.91 0 0 1-10-2.68C249.7 839 213.27 808.13 189.17 774a20 20 0 1 1 32.66-23c20.69 29.27 53 56.32 98.71 82.71a20 20 0 0 1-10 37.33z" fill="" /></svg>
        </template>
        <p>This is a <span class="underline"><em>lemon</em></span>!</p>
        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </VYCTooltip>

    <hr>

    <h2 class="h1">Properties</h2>

    <div class="property">
        name: noStyles <br>
        type: boolean <br>
        default: false <br>
        description: Removes all styling
    </div>
    <div class="property">
        name: modelValue <br>
        type: boolean  <br>
        required <br>
        description: Displays or hides the tooltip
    </div>
    <div class="property">
        name: offset <br>
        type: number <br>
        description: How far the tooltip is from the activator in 'px'
    </div>
    <div class="property">
        name: click <br>
        type: boolean <br>
        default: false <br>
        description: Change the behaviour from hover to click
    </div>
    <div class="property">
        name: direction <br>
        type: string <br>
        default: top <br>
        description: Direction of the tooltip. ('top', 'right', 'bottom', 'left')
    </div>
    <div class="property">
        name: positionX <br>
        type: string <br>
        default: center <br>
        description: Position of the tooltip on the X axis. ( 'left', 'center', 'right')
    </div>
    <div class="property">
        name: positionY <br>
        type: string <br>
        default: center <br>
        description: Position of the tooltip on the Y axis. ( 'top', 'center', 'bottom')
    </div>
    <div class="property">
        name: tooltipClasses <br>
        type: string <br>
        description: Custom classes for the tooltip
    </div>
    <div class="property">
        name: tooltipArrowClasses <br>
        type: string <br>
        description: Custom classes for the tooltip arrow
    </div>

    <hr>

    <h2 class="h1">Slots</h2>
    
    <div class="property">
        name: default<br>
        description: The default slot where the tooltip content diplays
    </div>
    <div class="property">
        name: trigger<br>
        description: The slot to display the content for triggering the tooltip
    </div>
</template>