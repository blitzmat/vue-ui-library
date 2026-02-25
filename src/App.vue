<script setup lang="ts">
import { VYCDrawer } from "@/components"
import { ref } from "vue"
import router from "./router"

const showMenu = ref<boolean>(true)
// const drawer = ref()

// router.beforeEach((to, from) => {
//     drawer.value.close()
// })

</script>

<template>
    <section class="wrapper">
        <button @click="showMenu = true" v-if="!showMenu" class="btn menu-btn menu-btn--close">
            menu
        </button>
        <Transition name="slide-from-left">
            <aside v-if="showMenu" class="sidebar">
                <button @click="showMenu = false" class="btn menu-btn menu-btn--open">
                    menu
                </button>
                <nav class="flex flex-col">
                    <h2 class="h2">Menu</h2>
                    <router-link to="/" class="nav-item">Home</router-link>
                    <router-link to="/accordion" class="nav-item">Accordion</router-link>
                    <router-link to="/button" class="nav-item">Buttons</router-link>
                    <router-link to="/carousel" class="nav-item">Carousel</router-link>
                    <router-link to="/drawer" class="nav-item">Drawer</router-link>
                    <router-link to="/forms" class="nav-item">Forms</router-link>
                    <router-link to="/forms/form" class="nav-item--sub">Form</router-link>
                    <router-link to="/forms/checkbox" class="nav-item--sub">Checkbox</router-link>
                    <router-link to="/forms/input" class="nav-item--sub">Input</router-link>
                    <router-link to="/forms/radio" class="nav-item--sub">Radio</router-link>
                    <router-link to="/forms/select" class="nav-item--sub">Select</router-link>
                    <router-link to="/forms/textarea" class="nav-item--sub">Textarea</router-link>
                    <router-link to="/gallery" class="nav-item">Gallery</router-link>
                    <router-link to="/modal" class="nav-item">Modal</router-link>
                    <router-link to="/pagination" class="nav-item">Pagination</router-link>
                    <router-link to="/progress" class="nav-item">Progress</router-link>
                    <router-link to="/images" class="nav-item">Images</router-link>
                    <router-link to="/image-reveal" class="nav-item">ImageReveal</router-link>
                    <router-link to="/scroll-animation" class="nav-item">ScrollAnimations</router-link>
                    <router-link to="/slider" class="nav-item">Sliders</router-link>
                    <router-link to="/tabs" class="nav-item">Tabs</router-link>
                    <router-link to="/toast" class="nav-item">Toast</router-link>
                    <router-link to="/tooltip" class="nav-item">Tooltip</router-link>
                    <router-link to="/translate" class="nav-item">Translate</router-link>
                    <router-link to="/truncate" class="nav-item">Truncate</router-link>
                    <router-link to="/video" class="nav-item">Video</router-link>
                    <router-link to="/wizard" class="nav-item">Wizard</router-link>
                </nav>
            </aside>
        </Transition>
        <main class="main">
            <router-view></router-view>
        </main>
    </section>
</template>

<style>
.pointer { cursor: pointer;}
.wrapper {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    display: flex;
}

.sidebar {
    position: relative;
    background-color: gray;
    color: white;
    min-width: 100px;
    padding: 20px;
}

.main {
    background-color: #efefef;
    padding: 20px;
    flex: 1;
    transition: all ease 0.3s;
}

.nav-item {
    text-decoration: underline;
    /* display: block; */
    margin: 5px 0;
}
.nav-item--sub {
    text-decoration: underline;
    /* display: block; */
    margin: 5px 0 5px 1rem;

}
.router-link-exact-active {
    font-weight: bold;
    text-decoration: none;
}

pre {
    background-color: lightsteelblue;
    padding: 20px;
    margin-bottom: 1rem;
}
.btn {
    padding: 0 0.5rem;
    /* line-height: 1; */
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    background-color: gray;
    color: white;
    font-size: 80%;
}
.menu-btn {
    top: 1rem;
    transform: rotate(-90deg);
    transform-origin: bottom;
}
.menu-btn--open {
    transform: translateX(100%) rotate(-90deg);
    position: absolute;
    right: 7px;
}
.menu-btn--close {
    position: fixed;
    left: -7px;
}

.slide-from-left-enter-active,
.slide-from-left-leave-active {
    transition: all 0.2s ease;
}

.slide-from-left-enter-from,
.slide-from-left-leave-to {
    transform: translateX(-100%)!important;
    opacity: 0;
}
</style>
