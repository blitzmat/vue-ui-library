<script setup lang="ts">
import { VYCButton, VYCDrawer } from "@/components";
import { ref } from "vue";

const codeSnippet1 = ref<boolean>(false)
</script>

<template>
    <h1 class="h1">Drawer</h1>
    <hr>

    <h2 class="h2">Default / <VYCButton class="underline" flat @click="codeSnippet1 = !codeSnippet1">code</VYCButton></h2>
    <pre v-if="codeSnippet1"><code>{{ `<VYCDrawer>
    <template #trigger>
        <VYCButton>Open left</VYCButton>
    </template>
    <div class="flex">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
    </div>
</VYCDrawer>

<VYCDrawer position="right">
    <template #trigger>
        <VYCButton>Open right</VYCButton>
    </template>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</VYCDrawer>

<VYCDrawer position="top">
    <template #trigger>
        <VYCButton>Open top</VYCButton>
    </template>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</VYCDrawer>

<VYCDrawer position="bottom" drawer-classes="bg-black text-white">
    <template #trigger>
        <VYCButton>Open bottom</VYCButton>
    </template>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</VYCDrawer>` }}</code></pre>
    <VYCDrawer>
        <template #trigger>
            <VYCButton>Open left</VYCButton>
        </template>
        <div class="flex">
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
        </div>
    </VYCDrawer>

    <VYCDrawer position="right">
        <template #trigger>
            <VYCButton>Open right</VYCButton>
        </template>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
    </VYCDrawer>

    <VYCDrawer position="top">
        <template #trigger>
            <VYCButton>Open top</VYCButton>
        </template>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
    </VYCDrawer>

    <VYCDrawer position="bottom" drawer-classes="bg-black text-white">
        <template #trigger>
            <VYCButton>Open bottom</VYCButton>
        </template>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
    </VYCDrawer>
    
    <hr>

    <h2 class="h1">Properties</h2>
    <div class="property">
        name: active <br>
        type: boolean<br>
        default: false<br>
        description: Displays the drawer by default
    </div>
    <div class="property">
        name: position <br>
        type: string<br>
        default: left<br>
        description: The position of the drawer ('left', 'right', 'top', 'bottom')
    </div>
    <div class="property">
        name: transition <br>
        type: string<br>
        default: 'slide from left'<br>
        description: Transition animation for the drawer
    </div>
    <div class="property">
        name: overlayClasses <br>
        type: string<br>
        description: Custom classes for the overlay
    </div>
    <div class="property">
        name: drawerClasses <br>
        type: string<br>
        default: bg-white<br>
        description: Custom classes for the drawer
    </div>
    
    <h2 class="h1">Slots</h2>
    
    <div class="property">
        name: default<br>
        description: The default slot where the drawer content would display
    </div>

    <h2 class="h1">Exposures</h2>
    
    <h3 class="h2">Events</h3>
    <div class="property">
        name: close<br>
        type: event<br>
        description: Close event is emitted when drawer closes
    </div>

</template>