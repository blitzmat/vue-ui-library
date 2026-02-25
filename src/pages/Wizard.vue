<script setup lang="ts">
import { VYCButton, VYCWizard } from "@/components";
import { ref } from "vue";

interface menuItem {
    label: string
    link?: string
    children?: menuItem[]
}

const codeSnippet1 = ref<boolean>(false)
const menu = ref<menuItem[]>([
    {
        label: "Home",
        link: "/"
    },
    {
        label: "Products",
        children: [
            {
                label: "Electronics",
                children: [
                    { label: "Phones", link: "/products/phones" },
                    { label: "Laptops", link: "/products/laptops" }
                ]
            },
            {
                label: "Clothing",
                children: [
                    { label: "Men", link: "/products/men" },
                    { label: "Women", link: "/products/women" }
                ]
            }
        ]
    },
    {
        label: "About",
        link: "/about"
    }
])
</script>

<template>
    <h1 class="h1">Wizard</h1>

    <hr>

    <h2 class="h2">Wizard / <VYCButton class="underline" flat @click="codeSnippet1 = !codeSnippet1">code</VYCButton></h2>
    <pre v-if="codeSnippet1"><code>{{ `<VYCWizard :root="menu" transition="slide-right" step-classes="space-y-2">
        <template #back-btn="{ index, closeSubmenu }">
            <button @click="closeSubmenu" class="border rounded-sm py-2 px-3 bg-stone-300 hover:bg-stone-400 transition">◂ Back</button>
        </template>
        <template #default="{ level, openSubmenu }">
            <div v-for="(item, i) in level" :key="i" class="border-b hover:bg-gradient-to-t hover:from-stone-200">
                ...
            </div>
        </template>
    </VYCWizard>` }}</code></pre>
    <VYCWizard :root="menu" transition="slide-left" step-classes="space-y-2">
        <template #back-btn="{ index, closeSubmenu }">
            <button @click="closeSubmenu" class="border rounded-sm py-2 px-3 bg-stone-300 hover:bg-stone-400 transition">◂ Back</button>
        </template>
        <template #default="{ level, openSubmenu }">
            <div v-for="(item, i) in level" :key="i" class="border-b hover:bg-gradient-to-t hover:from-stone-200">
                <template v-if="item.children">
                    <button @click="openSubmenu(item.children)">
                        {{ item.label }} ▸
                    </button>
                </template>
                <template v-else>
                    <a :href="item.link">{{ item.label }}</a>
                </template>
            </div>
        </template>
    </VYCWizard>

    <hr>

    <h2 class="h1">Properties</h2>


    <div class="property">
        name: root <br>
        type: any[] <br>
        description: The root content (ex. menu array)
    </div>

    <div class="property">
        name: transition <br>
        type: string <br>
        description: Transition between steps
    </div>

    <div class="property">
        name: stepClasses <br>
        type: string <br>
        description: Custom classes for the each step
    </div>

    <div class="property">
        name: backBtnClasses <br>
        type: string <br>
        description: Custom classes for back button
    </div>


</template>
