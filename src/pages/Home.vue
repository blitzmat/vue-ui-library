<script setup lang="ts"></script>

<template>
    <h1 class="h1">VMLY&R - UI Component Library</h1>
    <p>This is a front-end component ui library build in [<a href="https://vuejs.org/" target="_blank">Vue 3</a>] + [<a href="https://www.typescriptlang.org/" target="_blank">Typescript</a>] + [<a href="https://vitejs.dev/" target="_blank">Vite</a>] + [<a href="https://tailwindcss.com/" target="_blank">Tailwindcss</a>]</p>
    <p>Components included in this packages:</p>
    <ol>
        <li><router-link to="/accordion" class="nav-item">Accordion</router-link></li>
        <li><router-link to="/button" class="nav-item">Button</router-link></li>
        <li><router-link to="/carousel" class="nav-item">Carousel</router-link></li>
        <li><router-link to="/drawer" class="nav-item">Drawer</router-link></li>
        <li>Form
            <ul>
                <li><router-link to="/forms/form" class="nav-item">Form</router-link></li>
                <li><router-link to="/forms/input" class="nav-item">Input</router-link></li>
                <li><router-link to="/forms/textarea" class="nav-item">TextArea</router-link></li>
                <li><router-link to="/forms/checkbox" class="nav-item">Checkbox</router-link></li>
                <li><router-link to="/forms/radio" class="nav-item">Radio</router-link></li>
                <li><router-link to="/forms/select" class="nav-item">Select</router-link></li>
            </ul>
        </li>
        <li><router-link to="/modal" class="nav-item">Modal</router-link></li>
        <li><router-link to="/pagination" class="nav-item">Pagination</router-link></li>
        <li><router-link to="/progress" class="nav-item">Progress</router-link></li>
        <li><router-link to="/slider" class="nav-item">Slider</router-link></li>
        <li><router-link to="/tabs" class="nav-item">Tabs</router-link></li>
        <li><router-link to="/tooltip" class="nav-item">Tooltip</router-link></li>
        <li><router-link to="/translate" class="nav-item">Translate</router-link></li>
        <li><router-link to="/video" class="nav-item">Video</router-link></li>
    </ol>
</template>

<style scoped>
a {
    color: blue;
}
</style>