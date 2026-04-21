<script setup lang="ts">
import { ref } from 'vue'
import { useGroupedMenu } from '@/composables/useGroupedMenu'

const showMenu = ref<boolean>(false)
const { menuGroups } = useGroupedMenu()

</script>

<template>
  <section class="wrapper">
    <button @click="showMenu = true" v-if="!showMenu" class="btn menu-btn menu-btn--close">
      <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Menu">
          <rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24">

          </rect>
          <line x1="5" y1="7" x2="19" y2="7" id="Path" stroke="currentColor" stroke-width="2" stroke-linecap="round">

          </line>
          <line x1="5" y1="17" x2="19" y2="17" id="Path" stroke="currentColor" stroke-width="2" stroke-linecap="round">

          </line>
          <line x1="5" y1="12" x2="19" y2="12" id="Path" stroke="currentColor" stroke-width="2" stroke-linecap="round">

          </line>
          </g>
          </g>
      </svg>
    </button>
    <Transition name="slide-from-left">
      <aside v-if="showMenu" class="sidebar">
        <button @click="showMenu = false" class="btn menu-btn menu-btn--open">
            <svg width="24px" height="24px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/></svg>
        </button>
        <nav class="flex flex-col">
          <h2 class="h2">Menu</h2>

          <template v-for="group in menuGroups" :key="group.key">
            <!-- Group Heading (only shown if there is more than one route in the group) -->
            <h3 v-if="group.routes.length > 1" class="group-heading">
              {{ group.title }}
            </h3>

            <!-- Render each route in the group -->
            <router-link
              v-for="route in group.routes"
              :key="route.path"
              :to="route.path"
              :class="[
                'nav-item',
                { 'nav-item--sub': group.routes.length > 1 && route.path !== `/${group.key}` }
              ]"
            >
              {{ route.meta?.title || route.name }}
            </router-link>
          </template>
        </nav>
      </aside>
    </Transition>
    <main class="main">
      <router-view />
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

.menu-btn--open {
    position: absolute;
    right: 1rem;
}
.menu-btn--close {
    position: fixed;
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

.group-heading {
  font-size: 1rem;
  margin-top: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #ddd;
}
</style>
