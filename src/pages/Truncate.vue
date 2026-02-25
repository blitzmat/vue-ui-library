<script setup lang="ts">
import { VYCButton, VYCTruncate } from "@/components";
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
const text = ref<string>('<p>exerci pala tincidunt vero. commodo plaga populus probo saepius suscipere validus. aptent letalis proprius usitas virtus vulpes. consequat paratus refoveo. dolus natu nisl tation. decet humo nunc. abico abluo iaceo incassum melior odio probo quadrum valetudo velit. nimis oppeto ullamcorper. aliquam cogo distineo qui. ad eros exerci facilisi mauris melior nulla sino ut. camur cui ille jumentum plaga tum. causa cogo eros jus scisco tamen ulciscor utinam validus. abdo lenis quae sagaciter veniam. incassum interdico jus saepius utinam. dolor esse hendrerit tum. aptent et eu iaceo os praesent refoveo suscipit ullamcorper venio. aliquam at defui diam facilisi laoreet mos populus. accumsan imputo laoreet pneum refoveo roto typicus. dolor facilisis huic imputo in luctus melior nutus similis. camur erat euismod tincidunt. augue comis defui elit enim euismod macto neque nutus utrum. abico decet dolor dolore gilvus iustum magna plaga refoveo tamen. abluo dolus huic ille letalis probo refoveo sudo. capto cogo commoveo decet elit enim interdico qui refero vero. commodo esca exputo natu neo nostrud uxor vulputate. cui ibidem luptatum praesent quidne tum utrum. genitus luctus os turpis. defui dignissim duis iaceo illum macto nostrud pala pecus te. abluo ad comis facilisi laoreet meus olim pecus quadrum suscipit. euismod gemino humo minim premo quia sed voco. abigo exerci laoreet mauris nostrud nutus praemitto ratis tincidunt vero. cogo facilisis gemino volutpat. accumsan amet et facilisis quis. bene cogo lenis roto vel vulpes. capto causa ea ex iusto letalis sed ut venio. duis jus ut vulputate. defui duis occuro usitas. acsi comis damnum facilisis interdico iusto saepius. acsi autem jugis nutus pala praemitto quidem validus vicis zelus. abico gravis pecus. abigo causa eros iaceo neo plaga quidne sino tincidunt. aptent augue bene defui dolus eum refoveo verto. ea iaceo laoreet magna mauris quibus ut. augue defui tum. euismod incassum jus lenis nostrud pecus premo ut. augue caecus causa facilisis iustum luptatum sudo utrum vel volutpat. accumsan aptent esca euismod saluto. antehabeo capto consequat enim lobortis sagaciter tation turpis. cogo praesent quadrum quia saepius tamen veniam vero verto. aptent cui elit incassum paratus populus suscipere validus. cui gemino luctus patria quia utinam virtus. caecus dolus ea letalis. amet nulla quidne tincidunt venio volutpat. accumsan camur ea et ludus mos pecus persto. accumsan antehabeo consectetuer conventio iaceo iusto loquor pertineo ullamcorper vindico. capto eu euismod ibidem immitto jumentum pecus ratis turpis ymo. lenis minim obruo praesent ratis. comis et exputo sit. aptent esse nisl olim premo sudo wisi. caecus dolor mos quadrum scisco te uxor validus volutpat. abbas diam enim facilisis pala refoveo vel. conventio jus luptatum os uxor. appellatio facilisi iustum mos nunc praemitto torqueo. iaceo in melior nisl occuro turpis valde ymo. amet appellatio causa elit luctus magna plaga quadrum wisi. caecus mauris praesent venio. acsi commodo commoveo duis melior venio. abbas blandit populus quidem uxor. capto ea elit facilisis incassum paulatim. abico aliquip appellatio esca eum lenis refero. </p>')
</script>

<template>
    <h1 class="h1">Truncate</h1>
    <hr>
    <h2 class="h2">Truncate / <VYCButton class="underline" flat @click="codeSnippet1 = !codeSnippet1">code</VYCButton></h2>
    <pre v-if="codeSnippet1"><code>{{ `<VYCTruncate :limit="30">
    <div>Truncate the text inside the slots</div>
    <template #open>
        <VYCButton>open</VYCButton>
    </template>
    <template #close>
        <VYCButton>close</VYCButton>
    </template>
</VYCTruncate>` }}</code></pre>
    <VYCTruncate :limit="200">
        <div v-html="text"></div>
        <template #open>
            <VYCButton>open</VYCButton>
        </template>
        <template #close>
            <VYCButton>close</VYCButton>
        </template>
    </VYCTruncate>

    <hr>

    <h2 class="h1">Properties</h2>

    <div class="property">
        name: limit <br>
        type: number <br>
        description: Character limit to truncate
    </div>

    <hr>

    <h2 class="h1">Slots</h2>
    <div class="property">
        name: default<br>
        description: The default slot where the tooltip content diplays
    </div>
    <div class="property">
        name: open<br>
        description: The slot to display the content for removing the limit
    </div>
    <div class="property">
        name: close<br>
        description: The slot to display the content for adding the limit
    </div>

</template>
