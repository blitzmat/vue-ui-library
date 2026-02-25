<script setup lang="ts">
import { VYCButton } from "@/components";
import { ref } from "vue";

const codeSnippet1 = ref<boolean>(false)
const codeSnippet2 = ref<boolean>(false)
const codeSnippet3 = ref<boolean>(false)
const codeSnippet4 = ref<boolean>(false)
const codeSnippet5 = ref<boolean>(false)
const codeSnippet6 = ref<boolean>(false)
const codeSnippet7 = ref<boolean>(false)
const codeSnippet8 = ref<boolean>(false)
const codeSnippet9 = ref<boolean>(false)
const codeSnippet10 = ref<boolean>(false)
</script>

<template>
    <h1 class="h1">Buttons</h1>

    <hr>

    <h2 class="h2">Button with no styles / <VYCButton class="underline" flat @click="codeSnippet1 = !codeSnippet1">code</VYCButton></h2>
    <pre v-if="codeSnippet1"><code>{{ `<VYCButton no-styles>
    No styles
</VYCButton>` }}</code></pre>
    <VYCButton no-styles>No styles</VYCButton>

    <hr>
    <h2 class="h2">Default / <VYCButton class="underline" flat @click="codeSnippet2 = !codeSnippet2">code</VYCButton></h2>
    <pre v-if="codeSnippet2"><code>{{ `<VYCButton>
    default
</VYCButton>` }}</code></pre>
    <div class="flex gap-2">
        <VYCButton>
            default
        </VYCButton>
    </div>

    <hr>
    <h2 class="h2">Elevated / <VYCButton class="underline" flat @click="codeSnippet3 = !codeSnippet3">code</VYCButton></h2>
    <pre v-if="codeSnippet3"><code>{{ `<VYCButton elevated="sm">
    elevated sm
</VYCButton>
<VYCButton elevated="base">
    elevated base
</VYCButton>
<VYCButton elevated="md">
    elevated md
</VYCButton>
<VYCButton elevated="lg">
    elevated lg
</VYCButton>` }}</code></pre>
    <div class="flex gap-2">
        <VYCButton elevated="sm">
            elevated sm
        </VYCButton>
        <VYCButton elevated="base">
            elevated base
        </VYCButton>
        <VYCButton elevated="md">
            elevated md
        </VYCButton>
        <VYCButton elevated="lg">
            elevated lg
        </VYCButton>
    </div>
    
    <hr>   
    <h2 class="h2">Rounded / <VYCButton class="underline" flat @click="codeSnippet4 = !codeSnippet4">code</VYCButton></h2>
    <pre v-if="codeSnippet4"><code>{{ `<VYCButton rounded="sm">
    rounded sm
</VYCButton>
<VYCButton rounded="base">
    rounded base
</VYCButton>
<VYCButton rounded="md">
    rounded md
</VYCButton>
<VYCButton rounded="lg">
    rounded lg
</VYCButton>
<VYCButton rounded="full">
    rounded full
</VYCButton>` }}</code></pre>
    <div class="flex gap-2">
        <VYCButton rounded="sm">
            rounded sm
        </VYCButton>
        <VYCButton rounded="base">
            rounded base
        </VYCButton>
        <VYCButton rounded="md">
            rounded md
        </VYCButton>
        <VYCButton rounded="lg">
            rounded lg
        </VYCButton>
        <VYCButton rounded="full">
            rounded full
        </VYCButton>
    </div>
    
    <hr>
    <h2 class="h2">Outlined / <VYCButton class="underline" flat @click="codeSnippet5 = !codeSnippet5">code</VYCButton></h2>
    <pre v-if="codeSnippet5"><code>{{ `<VYCButton outlined>
    outlined
</VYCButton>
<VYCButton outlined rounded="base">
    outlined rounded base
</VYCButton>` }}</code></pre>
    <div class="flex gap-2">
        <VYCButton outlined>
            outlined
        </VYCButton>
        <VYCButton outlined rounded="base">
            outlined rounded base
        </VYCButton>
    </div>

    <hr>
    <h2 class="h2">Plain / <VYCButton class="underline" flat @click="codeSnippet6 = !codeSnippet6">code</VYCButton></h2>
    <pre v-if="codeSnippet6"><code>{{ `<VYCButton plain>
    plain
</VYCButton>` }}</code></pre>
    <div class="flex gap-2">
        <VYCButton plain>
            plain
        </VYCButton>
    </div>

    <hr>
    <h2 class="h2">Flat / <VYCButton class="underline" flat @click="codeSnippet7 = !codeSnippet7">code</VYCButton></h2>
    <pre v-if="codeSnippet7"><code>{{ `<VYCButton flat>
    flat
</VYCButton>` }}</code></pre>
    <div class="flex gap-2">
        <VYCButton flat>
            flat
        </VYCButton>
    </div>

    <hr>
    <h2 class="h2">No hover state / <VYCButton class="underline" flat @click="codeSnippet8 = !codeSnippet8">code</VYCButton></h2>
    <pre v-if="codeSnippet8"><code>{{ `<VYCButton no-hover>
    no hover
</VYCButton>` }}</code></pre>
    <div class="flex gap-2">
        <VYCButton no-hover>
            no hover
        </VYCButton>
    </div>

    <hr>
    <h2 class="h2">Icon / <VYCButton class="underline" flat @click="codeSnippet9 = !codeSnippet9">code</VYCButton></h2>
    <pre v-if="codeSnippet9"><code>{{ `<VYCButton prepend>
    <template #icon>
        &copy;
    </template>
    icon prepend
</VYCButton>
<VYCButton append>
    <template #icon>
        &copy;
    </template>
    icon append
</VYCButton>` }}</code></pre>
    <div class="flex gap-2">
        <VYCButton prepend>
            <template #icon>
                &copy;
            </template>
            icon prepend
        </VYCButton>
        <VYCButton append>
            <template #icon>
                &copy;
            </template>
            icon append
        </VYCButton>
    </div>

    <hr>
    <h2 class="h2">Icon / <VYCButton class="underline" flat @click="codeSnippet10 = !codeSnippet10">code</VYCButton></h2>
    <pre v-if="codeSnippet10"><code>{{ `<VYCButton loading prepend>
    loading prepend
</VYCButton>
<VYCButton loading append>
    loading append
</VYCButton>
<VYCButton loading append loading-no-text>
    loading with no text
</VYCButton>` }}</code></pre>
    <div class="flex gap-2">

        <VYCButton loading prepend>
            loading prepend
        </VYCButton>
        <VYCButton loading append>
            loading append
        </VYCButton>
        <VYCButton loading append loading-no-text>
            loading with no text
        </VYCButton>
    </div>

    <hr>

    <h2 class="h1">Properties</h2>


    <div class="property">
        name: noStyles <br>
        type: boolean <br>
        default: false <br>
        description: removes all styles
    </div>

    <div class="property">
        name: noHover <br>
        type: boolean <br>
        default: false <br>
        description: removes hover effect
    </div>

    <div class="property">
        name: elevated <br>
        type: string <br>
        default: '' <br>
        options: sm, base, md, lg
        description: adds a box shadow
    </div>

    <div class="property">
        name: outlined <br>
        type: boolean <br>
        default: true <br>
        description: adds a 1px border based on the color of the button text
    </div>
    
    <div class="property">
        name: rounded <br>
        type: string <br>
        default: '' <br>
        options: sm, base, md, lg, full
        description: adds rounded corners
    </div>
  
    <div class="property">
        name: flat <br>
        type: boolean <br>
        default: false <br>
        description: removes padding
    </div>
  
    <div class="property">
        name: plain <br>
        type: boolean <br>
        default: false <br>
        description: removes background color
    </div>
  
    <div class="property">
        name: loading <br>
        type: boolean <br>
        default: false <br>
        description: displays loading icon next to text
    </div>
    <div class="property">
        name: loadingNoText <br>
        type: boolean <br>
        default: false <br>
        description: hides the button text and only shows the loading icon
    </div>
    <div class="property">
        name: prepend <br>
        type: boolean <br>
        default: false <br>
        description: displays icon or loading icon before the text
    </div>
    <div class="property">
        name: append <br>
        type: boolean <br>
        default: false <br>
        description: displays icon or loading icon after the text
    </div>


    
    <hr>

    <h2 class="h1">Slots</h2>
    
    <div class="property">
        name: default<br>
        description: the default slot which is typically used for the button text
    </div>

    <div class="property">
        name: icon<br>
        description: displays the icon slot
    </div>
   
    <div class="property">
        name: loading<br>
        description: displays the loading icon slot 
    </div>

</template>