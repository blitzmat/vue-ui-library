<script setup lang="ts">
import { VYCButton, VYCPagination } from "@/components";
import { ref } from "vue";

const currentPage = ref<number>(1)
const codeSnippet1 = ref<boolean>(false)
const codeSnippet2 = ref<boolean>(false)
const codeSnippet3 = ref<boolean>(false)

</script>

<template>
    <h1 class="h1">Pagination</h1>
    <hr>
    
    <h2 class="h2">Pagination - Default / <VYCButton class="underline" flat @click="codeSnippet1 = !codeSnippet1">code</VYCButton></h2>
    <pre v-if="codeSnippet1"><code>{{ `<VYCPagination v-model="currentPage" :numberOfPages="20"></VYCPagination>` }}</code></pre>
    <VYCPagination v-model="currentPage" :numberOfPages="3" :display-pages="2" @update:model-value="val => console.log('aho', val)"></VYCPagination>
    {{currentPage}}
    
    
    <h2 class="h2">Pagination - Custom / <VYCButton class="underline" flat @click="codeSnippet2 = !codeSnippet2">code</VYCButton></h2>
    <pre v-if="codeSnippet2"><code>{{ `<VYCPagination 
v-model="currentPage"
:numberOfPages="5"
pagination-classes="justify-center"
button-classes="border border-black disabled:border-gray-500 py-1 px-2"
indicator-classes="text-2xl"
    current-page-classes="text-red-500">
    <template #arrow-prev>
        prev
    </template>
    &bull;
    <template #arrow-next>
        next
    </template>
</VYCPagination>` }}</code></pre>
    <VYCPagination 
        v-model="currentPage"
        :numberOfPages="5"
        pagination-classes="justify-center"
        button-classes="border border-black disabled:border-gray-500 py-1 px-2"
        indicator-classes="text-2xl"
        current-page-classes="text-red-500">
        <template #arrow-prev>
            prev
        </template>
        &bull;
        <template #arrow-next>
            next
        </template>
    </VYCPagination>
    
    <h2 class="h2">Pagination - No styles / <VYCButton class="underline" flat @click="codeSnippet3 = !codeSnippet3">code</VYCButton></h2>
    <pre v-if="codeSnippet3"><code>{{ `<VYCPagination v-model="currentPage" :numberOfPages="10" no-styles></VYCPagination>` }}</code></pre>
    <VYCPagination v-model="currentPage" :numberOfPages="10" no-styles></VYCPagination>
    <hr>

    <h2 class="h1">Properties</h2>

    <div class="property">
        name: v-model <br>
        type: number  <br>
        required <br>
        description: The current active page
    </div>
    <div class="property">
        name: noStyles <br>
        type: boolean <br>
        default: false <br>
        description: Removes all styling
    </div>
    <div class="property">
        name: numberOfPages <br>
        type: number <br>
        required <br>
        description: Total number of pages for the pagination
    </div>
    <div class="property">
        name: displayPages <br>
        type: number <br>
        default: 5 <br>
        description: Amount of pages to display in the pagination
    </div>
    <div class="property">
        name: paginationClasses <br>
        type: string <br>
        description: Custom classes for the pagination container
    </div>
    <div class="property">
        name: buttonNextClasses <br>
        type: string <br>
        description: Custom classes for the next button (arrow)
    </div>
    <div class="property">
        name: buttonPrevClasses <br>
        type: string <br>
        description: Custom classes for the previous button (arrow)
    </div>
    <div class="property">
        name: indicatorClasses <br>
        type: string <br>
        default: the page number <br>
        description: Custom classes for the page indicators
    </div>
    <div class="property">
        name: currentPageClasses <br>
        type: string <br>
        default: 'font-bold' <br>
        description: Custom classes for the current active page
    </div>

    <hr>

    <h2 class="h1">Slots</h2>
    
    <div class="property">
        name: default<br>
        description: The default slot to diplays custom page indicators
    </div>
    <div class="property">
        name: arrow-next<br>
        description: The slot to display a custom next button
    </div>
    <div class="property">
        name: arrow-prev<br>
        description: The slot to display a custom prev button
    </div>
    <div class="property">
        name: arrow-begin<br>
        description: The slot to display a custom begin button
    </div>
    <div class="property">
        name: arrow-end<br>
        description: The slot to display a custom end button
    </div>

    <h3 class="h2">Events</h3>
    <div class="property">
        name: update<br>
        return: number<br>
        description: Returns the current active index 
    </div>
</template>