<script setup lang="ts">
import { ref } from 'vue'
import { useGroupedMenu } from '@/composables/useGroupedMenu'

const showMenu = ref<boolean>(true)
const { menuGroups } = useGroupedMenu()
</script>

<template>
    <h1 class="h1">Vue 3 UI Component Library</h1>
    <p>This is a front-end component ui library build in [<a href="https://vuejs.org/" target="_blank">Vue 3</a>] + [<a href="https://www.typescriptlang.org/" target="_blank">Typescript</a>] + [<a href="https://vitejs.dev/" target="_blank">Vite</a>] + [<a href="https://tailwindcss.com/" target="_blank">Tailwindcss</a>]</p>
    <p>Components included in this packages:</p>
    <template v-for="group in menuGroups" :key="group.key">
        <!-- Show group heading only if multiple routes in group -->
        <h3 v-if="group.routes.length > 1" class="group-heading">
            {{ group.title }}
        </h3>

        <ol>
            <li v-for="route in group.routes" :key="route.path">
                <router-link
                        :to="route.path"
                        :class="[
                                'nav-item',
                                { 'nav-item--sub': group.routes.length > 1 && route.path !== group.basePath }
                                ]"
                        >
                        {{ route.meta?.title || route.name }}
                </router-link>
            </li>
        </ol>
    </template>
</template>

<style scoped>
a {
    color: blue;
}
.group-heading {
    color: #666;
}
</style>
