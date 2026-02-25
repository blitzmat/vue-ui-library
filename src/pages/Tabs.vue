<script setup lang="ts">
import { VYCButton, VYCTabs, VYCTab, VYCCarousel, VYCSlide } from "@/components";
import { ref } from "vue";

const img = 'https://placehold.co/1280x640'

const codeSnippet1 = ref<boolean>(false)
const codeSnippet2 = ref<boolean>(false)
const codeSnippet3 = ref<boolean>(false)
const codeSnippet4 = ref<boolean>(false)

const tabs = ref<Array<{
    title: string
    html: string
}>>([
    {
        title: 'Tab lorem ipsum 1',
        html: `<img class="w-full" src="${img}"><p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>`
    },
    {
        title: 'Tab lorem ipsum 2',
        html: `<p class="mb-0">Vitae proin sagittis nisl rhoncus mattis. Ac felis donec et odio pellentesque diam volutpat commodo. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Nunc eget lorem dolor sed viverra ipsum. Arcu risus quis varius quam quisque id. Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Urna condimentum mattis pellentesque id. Accumsan tortor posuere ac ut consequat semper viverra. Praesent elementum facilisis leo vel fringilla est. Luctus venenatis lectus magna fringilla urna.</p>`
    },
    {
        title: 'Tab lorem ipsum 3',
        html: `<p class="mb-0">Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Maecenas sed enim ut sem viverra aliquet. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Mauris nunc congue nisi vitae suscipit tellus mauris a. Pellentesque adipiscing commodo elit at imperdiet dui. Dolor morbi non arcu risus quis. Id diam maecenas ultricies mi. A diam maecenas sed enim ut sem. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Leo vel fringilla est ullamcorper. Egestas dui id ornare arcu odio. Neque ornare aenean euismod elementum nisi quis eleifend quam. Ut enim blandit volutpat maecenas. Ut sem nulla pharetra diam sit amet nisl. Natoque penatibus et magnis dis. Turpis egestas pretium aenean pharetra magna ac placerat.</p>`
    },
])

const tabEl = ref()

function onTabsUpdate(val:number) {
    console.log(val, tabEl.value)
}

</script>

<template>
    <h1 class="h1">Tabs</h1>
    <p>Consist of 2 components: </p>
    <ol>
        <li><code>VYCTabs</code></li>
        <li><code>VYCTab</code></li>
    </ol>
    <hr>

    <h2 class="h2">Tabs / <VYCButton class="underline" flat @click="codeSnippet1 = !codeSnippet1">code</VYCButton></h2>
    <pre v-if="codeSnippet1"><code>{{ `<VYCTabs>
    <VYCTab v-for="(tab, i) in tabs" :key="i" :name="tab.title" :index="i">
        <div v-html="tab.html"></div>
    </VYCTab>
</VYCTabs>` }}</code></pre>
    <VYCTabs>
        <VYCTab v-for="(tab, i) in tabs" :key="i" :name="tab.title" :index="i">
            <div v-html="tab.html"></div>
        </VYCTab>
    </VYCTabs>

    <hr>
    <h2 class="h2">Tabs left align / <VYCButton class="underline" flat @click="codeSnippet2 = !codeSnippet2">code</VYCButton></h2>
    <pre v-if="codeSnippet2"><code>{{ `<VYCTabs>
    <VYCTab v-for="(tab, i) in tabs" :key="i" :name="tab.title" :index="i">
        <div v-html="tab.html"></div>
    </VYCTab>
</VYCTabs>` }}</code></pre>
    <VYCTabs wrap>
        <VYCTab v-for="(tab, i) in tabs" :key="i" :name="tab.title" :index="i">
            <div v-html="tab.html"></div>
        </VYCTab>
    </VYCTabs>

    <hr>
    <h2 class="h2">Tabs custom classes / <VYCButton class="underline" flat @click="codeSnippet3 = !codeSnippet3">code</VYCButton></h2>
    <pre v-if="codeSnippet3"><code>{{ `<VYCTabs
    no-styles
    tab-wrapper-classes="flex"
    tab-title-classes="p-4 cursor-pointer"
    tab-title-active-classes="font-bold bg-gray-300"
    tab-content-classes="p-4 bg-transparent border border-gray-300"
>
    <VYCTab name="Tab 1" :index="0">
        Tab 1 content
        <VYCCarousel navigation pagination :gutter="5" :peek-right="40" indicator-classes="bg-blue-400 " active-indicator-classes="bg-blue-600">
            <VYCSlide v-for="slide in 10" :key="slide">
                <img class="w-full" src="https://placehold.co/1280x640">
            </VYCSlide>
        </VYCCarousel>
    </VYCTab>
    <VYCTab name="Tab 2" :index="1">
        Tab 2 content <VYCButton>Hello</VYCButton>
    </VYCTab>
</VYCTabs>` }}</code></pre>
    <VYCTabs
        no-styles
        tab-wrapper-classes="flex"
        tab-title-classes="p-4 cursor-pointer"
        tab-title-active-classes="font-bold bg-gray-300"
        tab-content-classes="p-4 bg-transparent border border-gray-300"
    >
        <VYCTab name="Tab 1" :index="0">
            Tab 1 content
            <VYCCarousel navigation pagination :gutter="5" :peek-right="40" indicator-classes="bg-blue-400 " active-indicator-classes="bg-blue-600">
                <VYCSlide v-for="slide in 10" :key="slide">
                    <img class="w-full" src="https://placehold.co/1280x640">
                </VYCSlide>
            </VYCCarousel>
        </VYCTab>
        <VYCTab name="Tab 2" :index="1">
            Tab 2 content <VYCButton>Hello</VYCButton>
        </VYCTab>
    </VYCTabs>
    <hr>
    <h2 class="h2">Custom Tabs / <VYCButton class="underline" flat @click="codeSnippet4 = !codeSnippet4">code</VYCButton></h2>
    <pre v-if="codeSnippet4"><code>{{ `<VYCTabs ref="tabEl" @update="onTabsUpdate">
    <template #tabs>
        <div v-for="(tab, i) in tabs" :key="i" @click="tabEl.activate(i)">
            tab.title
        </div>
    </template>
    <VYCTab v-for="(tab, i) in tabs" :key="i" :name="tab.title" :index="i">
        <div v-html="tab.html"></div>
    </VYCTab>
</VYCTabs>` }}</code></pre>
    <VYCTabs ref="tabEl" @update="onTabsUpdate">
        <template #tabs>
            <div v-for="(tab, i) in tabs" :key="i" @click="tabEl.activate(i)">
                {{ tab.title }}
            </div>
        </template>
        <VYCTab v-for="(tab, i) in tabs" :key="i" :name="tab.title" :index="i">
            <div v-html="tab.html"></div>
        </VYCTab>
    </VYCTabs>

    <h2 class="h1">Properties</h2>
    <h2 class="h2">VYCTabs</h2>
    <div class="property">
        name: noStyles <br>
        type: boolean <br>
        default: false <br>
        description: Removes all styling
    </div>
    <div class="property">
        name: active <br>
        type: boolean <br>
        description: Is current tab active
    </div>
    <div class="property">
        name: wrap <br>
        type: boolean <br>
        description: wraps the tabs and content next to each other
    </div>
    <div class="property">
        name: wrapperClasses <br>
        type: string <br>
        description: Custom classes for the tabs
    </div>
    <div class="property">
        name: tabWrapperClasses <br>
        type: string <br>
        description: Custom classes for the tab titles wrapper
    </div>
    <div class="property">
        name: tabTitleClasses <br>
        type: string <br>
        description: Custom classes for the tab title
    </div>
    <div class="property">
        name: tabTitleActiveClasses <br>
        type: string <br>
        description: Custom classes for the active tab title
    </div>
    <div class="property">
        name: tabContentClasses <br>
        type: string <br>
        description: Custom classes for the tab content (html)
    </div>
    
    <h2 class="h2">VYCTab</h2>
    <div class="property">
        name: name <br>
        type: string <br>
        description: Name that is displayed in the tab
    </div>
    <div class="property">
        name: index <br>
        type: number <br>
        description: Make tab active
    </div>
    <div class="property">
        name: active <br>
        type: boolean <br>
        description: Make tab active
    </div>

    <h2 class="h1">Exposures</h2>
    <h3 class="h2">Methods</h3>
    <div class="property">
        name: activate<br>
        type: function<br>
        description: Activates the tab number that you pass through
    </div>

    <h2 class="h1">Slots</h2>
    <h2 class="h2">VYCTabs</h2>
    <div class="property">
        name: default<br>
        description: The default slot where <code>VYCTab</code> component would be placed
    </div>
    <h2 class="h2">VYCTab</h2>
    <div class="property">
        name: default<br>
        description: The default slot where tab content will display
    </div>
</template>