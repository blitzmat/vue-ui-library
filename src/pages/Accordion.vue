<script setup lang="ts">
import { VYCButton, VYCAccordion, VYCAccordionPanel } from "@/components";
import { ref } from "vue";

const codeSnippet = ref<boolean>(false)
const codeSnippet1 = ref<boolean>(false)
const codeSnippet2 = ref<boolean>(false)
const codeSnippet3 = ref<boolean>(false)
const codeSnippet4 = ref<boolean>(false)
const codeSnippet5 = ref<boolean>(false)
const codeSnippet6 = ref<boolean>(false)
const codeSnippet7 = ref<boolean>(false)
const panel = ref()

</script>

<template>
    <h1 class="h1">Accordion</h1>
    <p>Consist of 2 components: </p>
    <ol>
        <li><code>VYCAccordion</code></li>
        <li><code>VYCAccordionPanel</code></li>
    </ol>
    <hr>
    <h2 class="h2">Single Accordion <VYCButton class="underline" flat @click="codeSnippet = !codeSnippet">code</VYCButton> </h2>
    <pre v-if="codeSnippet"><code>
{{ `<VYCAccordion :active-item-key="1">
    <VYCAccordionPanel :item-key="1">
        <template #header>Inner Title</template>
        <template #body>
            <p>Lorem ipsum dolor sit</p>
        </template>
    </VYCAccordionPanel>
</VYCAccordion>` }}
    </code></pre>
    <VYCAccordion :active-item-key="1">
        <VYCAccordionPanel :item-key="1">
            <template #header>Inner Title</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>
            </template>
        </VYCAccordionPanel>
    </VYCAccordion>

    <h2 class="h2">Accordion / Nested Accourdions <VYCButton class="underline" flat @click="codeSnippet1 = !codeSnippet1">code</VYCButton> </h2>
    <p>For nested accordions, you have to give the panel with the nested accordion a ref.</p>
    <p>You can then use the calculateHeight() function on the @update event</p>
    <pre v-if="codeSnippet1"><code>
        {{ `<VYCAccordion :active-item-key="2">
            <VYCAccordionPanel :item-key="1" ref="panel">
                <template #header>Title</template>
                <template #body>
                    <VYCAccordion :active-item-key="1">
                        <VYCAccordionPanel :item-key="1">
                            <template #header>Inner Title</template>
                            <template #body>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>
                            </template>
                        </VYCAccordionPanel>
                        <VYCAccordionPanel :item-key="2">
                            <template #header>Inner Title 2</template>
                            <template #body>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>
                            </template>
                        </VYCAccordionPanel>
                        <VYCAccordionPanel :item-key="3">
                            <template #header>Inner Title 3</template>
                            <template #body>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>
                            </template>
                        </VYCAccordionPanel>
                    </VYCAccordion>
                </template>
            </VYCAccordionPanel>
            <VYCAccordionPanel :item-key="2">
                <template #header>Title 2</template>
                <template #body>
                    <p>Lorem ipsum dolor sit amet...</p>
                </template>
            </VYCAccordionPanel>
            <VYCAccordionPanel :item-key="3">
                <template #header>Title 3</template>
                <template #body>
                    <p>Lorem ipsum dolor sit amet...</p>
                </template>
            </VYCAccordionPanel>
        </VYCAccordion>` }}
    </code></pre>
    <VYCAccordion :active-item-key="0">
        <VYCAccordionPanel :item-key="0" ref="panel">
            <template #header>Title</template>
            <template #body>
                <VYCAccordion :active-item-key="1">
                    <VYCAccordionPanel :item-key="1">
                        <template #header>Inner Title</template>
                        <template #body>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>
                        </template>
                    </VYCAccordionPanel>
                    <VYCAccordionPanel :item-key="2">
                        <template #header>Inner Title 2</template>
                        <template #body>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>
                        </template>
                    </VYCAccordionPanel>
                    <VYCAccordionPanel :item-key="3">
                        <template #header>Inner Title 3</template>
                        <template #body>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>
                        </template>
                    </VYCAccordionPanel>
                </VYCAccordion>
            </template>
        </VYCAccordionPanel>
        <VYCAccordionPanel :item-key="1">
            <template #header>Title 2</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>
            </template>
        </VYCAccordionPanel>
        <VYCAccordionPanel :item-key="2">
            <template #header>Title 3</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>
            </template>
        </VYCAccordionPanel>
    </VYCAccordion>
    <hr>

    <h2 class="h2">Accordion - Multiple open and toggleable / <VYCButton class="underline" flat @click="codeSnippet2 = !codeSnippet2">code</VYCButton></h2>
    <pre v-if="codeSnippet2"><code>
        {{ `<VYCAccordion :active-item-key="2" multiple-open>
        <VYCAccordionPanel :item-key="1">
            <template #header>Title</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet...</p>
            </template>
        </VYCAccordionPanel>
        <VYCAccordionPanel :item-key="2">
            <template #header>Title 2</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet...</p>
            </template>
        </VYCAccordionPanel>
        <VYCAccordionPanel :item-key="3">
            <template #header>Title 3</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet...</p>
            </template>
        </VYCAccordionPanel>
    </VYCAccordion>` }}
    </code></pre>
    <VYCAccordion :active-item-key="2" multiple-open panels-open>
        <VYCAccordionPanel :item-key="1">
            <template #header>Title</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>
            </template>
        </VYCAccordionPanel>
        <VYCAccordionPanel :item-key="2">
            <template #header>Title 2</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>
            </template>
        </VYCAccordionPanel>
        <VYCAccordionPanel :item-key="3">
            <template #header>Title 3</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>
            </template>
        </VYCAccordionPanel>
    </VYCAccordion>
    <hr>

    <h2 class="h2">Accordion - Animation speed 1000ms / <VYCButton class="underline" flat @click="codeSnippet3 = !codeSnippet3">code</VYCButton></h2>
    <pre v-if="codeSnippet3"><code>
        {{ `<VYCAccordion :active-item-key="2" :animation-speed="1000">
        <VYCAccordionPanel :item-key="1">
            <template #header>Title</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet...</p>
            </template>
        </VYCAccordionPanel>
        <VYCAccordionPanel :item-key="2">
            <template #header>Title 2</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet...</p>
            </template>
        </VYCAccordionPanel>
        <VYCAccordionPanel :item-key="3">
            <template #header>Title 3</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet...</p>
            </template>
        </VYCAccordionPanel>
    </VYCAccordion>` }}
    </code></pre>
    <VYCAccordion :active-item-key="2" :animation-speed="1000">
        <VYCAccordionPanel :item-key="1">
            <template #header>Title</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>
            </template>
        </VYCAccordionPanel>
        <VYCAccordionPanel :item-key="2">
            <template #header>Title 2</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>
            </template>
        </VYCAccordionPanel>
        <VYCAccordionPanel :item-key="3">
            <template #header>Title 3</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>
            </template>
        </VYCAccordionPanel>
    </VYCAccordion>

    <hr>
    <h2 class="h2">Accordion - No Styles / <VYCButton class="underline" flat @click="codeSnippet4 = !codeSnippet4">code</VYCButton></h2>
    <pre v-if="codeSnippet4"><code>
        {{ `<VYCAccordion :active-item-key="2" no-styles>
        <VYCAccordionPanel :item-key="1">
            <template #header>Title</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet...</p>
            </template>
        </VYCAccordionPanel>
        <VYCAccordionPanel :item-key="2">
            <template #header>Title 2</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet...</p>
            </template>
        </VYCAccordionPanel>
        <VYCAccordionPanel :item-key="3">
            <template #header>Title 3</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet...</p>
            </template>
        </VYCAccordionPanel>
    </VYCAccordion>` }}
    </code></pre>
    <VYCAccordion :active-item-key="2" no-styles>
        <VYCAccordionPanel :item-key="1">
            <template #header>Title</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>
            </template>
        </VYCAccordionPanel>
        <VYCAccordionPanel :item-key="2">
            <template #header>Title 2</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>
            </template>
        </VYCAccordionPanel>
        <VYCAccordionPanel :item-key="3">
            <template #header>Title 3</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>
            </template>
        </VYCAccordionPanel>
    </VYCAccordion>

    <hr>
    <h2 class="h2">Accordion - Active panel classes / <VYCButton class="underline" flat @click="codeSnippet5 = !codeSnippet5">code</VYCButton></h2>
    <pre v-if="codeSnippet5"><code>
        {{ `<VYCAccordion :active-item-key="2">
        <VYCAccordionPanel :item-key="1" active-header-classes="text-white bg-orange-500" active-body-classes="bg-orange-300 border-b border-orange-800" active-icon-classes="text-white bg-orange-700">
            <template #header>Title</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet...</p>
            </template>
        </VYCAccordionPanel>
        <VYCAccordionPanel :item-key="2" active-header-classes="text-white bg-orange-500" active-body-classes="bg-orange-300 border-b border-orange-800" active-icon-classes="text-white bg-orange-700">
            <template #header>Title 2</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet...</p>
            </template>
        </VYCAccordionPanel>
        <VYCAccordionPanel :item-key="3" active-header-classes="text-white bg-orange-500" active-body-classes="bg-orange-300 border-b border-orange-800" active-icon-classes="text-white bg-orange-700">
            <template #header>Title 3</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet...</p>
            </template>
        </VYCAccordionPanel>
    </VYCAccordion>` }}
    </code></pre>
    <VYCAccordion :active-item-key="2">
        <VYCAccordionPanel :item-key="1" active-header-classes="text-white bg-orange-500" active-body-classes="bg-orange-300 border-b border-orange-800" active-icon-classes="text-white bg-orange-700">
            <template #header>Title</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>
            </template>
        </VYCAccordionPanel>
        <VYCAccordionPanel :item-key="2" active-header-classes="text-white bg-orange-500" active-body-classes="bg-orange-300 border-b border-orange-800" active-icon-classes="text-white bg-orange-700">
            <template #header>Title 2</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>
            </template>
        </VYCAccordionPanel>
        <VYCAccordionPanel :item-key="3" active-header-classes="text-white bg-orange-500" active-body-classes="bg-orange-300 border-b border-orange-800" active-icon-classes="text-white bg-orange-700">
            <template #header>Title 3</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>
            </template>
        </VYCAccordionPanel>
    </VYCAccordion>

    <hr>
    <h2 class="h2">Accordion - Scroll to active panel / <VYCButton class="underline" flat @click="codeSnippet6 = !codeSnippet6">code</VYCButton></h2>
    <pre v-if="codeSnippet6"><code>
        {{ `<VYCAccordion :active-item-key="2" no-styles>
        <VYCAccordionPanel :item-key="1" header-classes="bg-red-500 text-white p-4 border-b flex justify-between items-center" body-classes="bg-red-200 p-4" icon-classes="w-4">
            <template #header-icon>
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    ...
                </svg>
            </template>
            <template #header>Title</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet...</p>
            </template>
        </VYCAccordionPanel>
        <VYCAccordionPanel :item-key="2" header-classes="bg-green-500 text-white p-4 border-b flex justify-between items-center" body-classes="bg-green-200 p-4" icon-classes="w-4">
            <template #header-icon>
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    ...
                </svg>
            </template>
            <template #header>Title 2</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet...</p>
            </template>
        </VYCAccordionPanel>
        <VYCAccordionPanel :item-key="3" header-classes="bg-blue-500 text-white p-4 border-b flex justify-between items-center" body-classes="bg-blue-200 p-4" icon-classes="w-4">
            <template #header-icon>
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    ...
                </svg>
            </template>
            <template #header>Title 3</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet...</p>
            </template>
        </VYCAccordionPanel>
    </VYCAccordion>` }}
    </code></pre>
    <VYCAccordion :active-item-key="2" scroll-to-panel>
        <VYCAccordionPanel :item-key="1">
            <template #header>Title</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>
            </template>
        </VYCAccordionPanel>
        <VYCAccordionPanel :item-key="2">
            <template #header>Title 2</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>
            </template>
        </VYCAccordionPanel>
        <VYCAccordionPanel :item-key="3">
            <template #header>Title 3</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>
            </template>
        </VYCAccordionPanel>
    </VYCAccordion>

    <hr>
    <h2 class="h2">Accordion - Custom Styles / <VYCButton class="underline" flat @click="codeSnippet7 = !codeSnippet7">code</VYCButton></h2>
    <pre v-if="codeSnippet7"><code>
        {{ `<VYCAccordion :active-item-key="2" no-styles>
        <VYCAccordionPanel :item-key="1"
            header-classes="bg-red-500 text-white p-4 border-b flex justify-between items-center"
            body-classes="bg-red-200 p-4"
            icon-classes="w-4">
            <template #header-icon>
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    ...
                </svg>
            </template>
            <template #header>Title</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet...</p>
            </template>
        </VYCAccordionPanel>
        <VYCAccordionPanel :item-key="2"
            header-classes="bg-green-500 text-white p-4 border-b flex justify-between items-center"
            body-classes="bg-green-200 p-4"
            icon-classes="w-4">
            <template #header-icon>
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    ...
                </svg>
            </template>
            <template #header>Title 2</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet...</p>
            </template>
        </VYCAccordionPanel>
        <VYCAccordionPanel :item-key="3"
            header-classes="bg-blue-500 text-white p-4 border-b flex justify-between items-center"
            body-classes="bg-blue-200 p-4"
            icon-classes="w-4">
            <template #header-icon>
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    ...
                </svg>
            </template>
            <template #header>Title 3</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet...</p>
            </template>
        </VYCAccordionPanel>
    </VYCAccordion>` }}
    </code></pre>
    <VYCAccordion :active-item-key="2" no-styles>
        <VYCAccordionPanel :item-key="1" header-classes="bg-red-500 text-white p-4 border-b flex justify-between items-center" body-classes="bg-red-200 p-4" icon-classes="w-4" active-icon-classes="!w-3">
            <template #header-icon>
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z" fill="currentColor"/>
                </svg>
            </template>
            <template #header>Title</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>
            </template>
        </VYCAccordionPanel>
        <VYCAccordionPanel :item-key="2" header-classes="bg-green-500 text-white p-4 border-b flex justify-between items-center" body-classes="bg-green-200 p-4" icon-classes="w-4" active-icon-classes="!w-3">
            <template #header-icon>
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z" fill="currentColor"/>
                </svg>
            </template>
            <template #header>Title 2</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>
            </template>
        </VYCAccordionPanel>
        <VYCAccordionPanel :item-key="3" header-classes="bg-blue-500 text-white p-4 border-b flex justify-between items-center" body-classes="bg-blue-200 p-4" icon-classes="w-4" active-icon-classes="!w-3">
            <template #header-icon>
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z" fill="currentColor"/>
                </svg>
            </template>
            <template #header>Title 3</template>
            <template #body>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>
            </template>
        </VYCAccordionPanel>
    </VYCAccordion>

    <hr>
    <h2 class="h1">Properties</h2>
    
    <h2 class="h2">VYCAccordion</h2>
    <div class="property">
        name: noStyles <br>
        type: boolean <br>
        default: false <br>
        description: Removes non-functional classes
    </div>
    
    <div class="property">
        name: activeItemKey <br>
        type: number <br>
        default: 1 <br>
        description: The current active (open) item
    </div>
    <div class="property">
        name: multipleOpen <br>
        type: boolean <br>
        default: false <br>
        description: Multiple panels can be open and are toggleable
    </div>
    <div class="property">
        name: panelsOpen <br>
        type: boolean <br>
        default: false <br>
        description: All panels start open.
    </div>
    <div class="property">
        name: scrollToPanel <br>
        type: boolean <br>
        default: false <br>
        description: Scrolls the user to the active panel
    </div>
    <div class="property">
        name: animationSpeed <br>
        type: number <br>
        default: 300 <br>
        description: The open and close slide speed in miliseconds (ms)
    </div>
    
    <h2 class="h2">VYCAccordionPanel</h2>
    <div class="property">
        name: itemKey <br>
        type: number <br>
        required
        description: The unique key for that panel
    </div>
    <div class="property">
        name: headerClasses <br>
        type: string <br>
        description: Custom classes for the item header
    </div>
    <div class="property">
        name: bodyClasses <br>
        type: string <br>
        description: Custom classes for the item body
    </div>
    <div class="property">
        name: iconClasses <br>
        type: string <br>
        description: Custom classes for the item header icon
    </div>
    <div class="property">
        name: activeHeaderClasses <br>
        type: string <br>
        description: Custom classes for the active state on the item header
    </div>
    <div class="property">
        name: activeBodyClasses <br>
        type: string <br>
        description: Custom classes for the active state on the item body
    </div>
    <div class="property">
        name: activeIconClasses <br>
        type: string <br>
        description: Custom classes for the active state on the item header icon
    </div>

    <hr>

    <h2 class="h1">Slots</h2>
    <h2 class="h2">VYCAccordion</h2>
    <div class="property">
        name: default<br>
        description: The default slot where <code>VYCAccordionPanel</code> component would be placed
    </div>
    <h2 class="h2">VYCAccordionPanel</h2>
    <div class="property">
        name: header<br>
        description: The slot for the header content
    </div>
    <div class="property">
        name: body<br>
        description: The slot for the body content
    </div>
    <div class="property">
        name: header-icon<br>
        description: The slot for the arrow header icon (arrow)
    </div>

    <h2 class="h1">Events</h2>
    <h2 class="h2">VYCAccordion</h2>
    <div class="property">
        name: setActiveItemKey<br>
        description: Sets the active VYCAccordionPanel
    </div>
    <h2 class="h2">VYCAccordionPanel</h2>
    <div class="property">
        name: calculateHeight<br>
        description: Calculates the height of the accordion panel content
    </div>
    <div class="property">
        name: body<br>
        description: Reference to the html element where the accordion panel content is in.
    </div>
    <div class="property">
        name: activate<br>
        description: The is the function used when you open or close an accordion panel
    </div>
</template>
