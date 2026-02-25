<script setup lang="ts">
import { VYCButton, VYCModal } from "@/components";
import { ref } from "vue";
import { RouterLink } from "vue-router";

const openModal = ref<boolean>(false)
const openModalBottom = ref<boolean>(false)
const openModalTop = ref<boolean>(false)
const openModalLeft = ref<boolean>(false)
const openModalRight = ref<boolean>(false)
const codeSnippet1 = ref<boolean>(false)
</script>

<template>
    <h1 class="h1">Modal</h1>
    <hr>
    
    <h2 class="h2">Modal / <VYCButton class="underline" flat @click="codeSnippet1 = !codeSnippet1">code</VYCButton></h2>
    <pre v-if="codeSnippet1"><code>{{ `<VYCModal v-model="openModal" @close="openModal = false">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
    <p>Vitae proin sagittis nisl rhoncus mattis. Ac felis donec et odio pellentesque diam volutpat commodo.</p>
    <p>Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Maecenas sed enim ut sem viverra aliquet.</p>
    <p>Iaculis urna id volutpat lacus laoreet non curabitur. Morbi tempus iaculis urna id. Aliquam ultrices</p>
    <p>Ut venenatis tellus in metus vulputate. Integer eget aliquet nibh praesent tristique magna. Sagittis</p>
</VYCModal>

<VYCModal v-model="openModalBottom" @close="openModalBottom = false" transition="modal-from-bottom">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
    <p>Vitae proin sagittis nisl rhoncus mattis. Ac felis donec et odio pellentesque diam volutpat commodo.</p>
    <p>Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Maecenas sed enim ut sem viverra aliquet.</p>
    <p>Iaculis urna id volutpat lacus laoreet non curabitur. Morbi tempus iaculis urna id. Aliquam ultrices</p>
    <p>Ut venenatis tellus in metus vulputate. Integer eget aliquet nibh praesent tristique magna. Sagittis</p>
</VYCModal>

<VYCModal v-model="openModalTop" @close="openModalTop = false" transition="modal-from-top">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
    <p>Vitae proin sagittis nisl rhoncus mattis. Ac felis donec et odio pellentesque diam volutpat commodo.</p>
    <p>Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Maecenas sed enim ut sem viverra aliquet.</p>
    <p>Iaculis urna id volutpat lacus laoreet non curabitur. Morbi tempus iaculis urna id. Aliquam ultrices</p>
    <p>Ut venenatis tellus in metus vulputate. Integer eget aliquet nibh praesent tristique magna. Sagittis</p>
</VYCModal>

<VYCModal v-model="openModalLeft" @close="openModalLeft = false" transition="modal-from-left">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
    <p>Vitae proin sagittis nisl rhoncus mattis. Ac felis donec et odio pellentesque diam volutpat commodo.</p>
    <p>Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Maecenas sed enim ut sem viverra aliquet.</p>
    <p>Iaculis urna id volutpat lacus laoreet non curabitur. Morbi tempus iaculis urna id. Aliquam ultrices</p>
    <p>Ut venenatis tellus in metus vulputate. Integer eget aliquet nibh praesent tristique magna. Sagittis</p>
</VYCModal>

<VYCModal v-model="openModalRight" @close="openModalRight = false" transition="modal-from-right">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
    <p>Vitae proin sagittis nisl rhoncus mattis. Ac felis donec et odio pellentesque diam volutpat commodo.</p>
    <p>Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Maecenas sed enim ut sem viverra aliquet.</p>
    <p>Iaculis urna id volutpat lacus laoreet non curabitur. Morbi tempus iaculis urna id. Aliquam ultrices</p>
    <p>Ut venenatis tellus in metus vulputate. Integer eget aliquet nibh praesent tristique magna. Sagittis</p>
</VYCModal>` }}</code></pre>
    <VYCButton @click="openModal = true">Open modal fade</VYCButton>
    <VYCModal v-model="openModal" @close="openModal = false" close-with-hash="#close-modal" modal-classes="w-5/6 h-1/2 bg-white p-4 rounded" close-btn-classes="right-2 top-2">
        {{ openModal }}
        <RouterLink to="/accordion">accordion</RouterLink>
        <a href="#close-modal">close modal link</a>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>
        <p>Vitae proin sagittis nisl rhoncus mattis. Ac felis donec et odio pellentesque diam volutpat commodo. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Nunc eget lorem dolor sed viverra ipsum. Arcu risus quis varius quam quisque id. Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Urna condimentum mattis pellentesque id. Accumsan tortor posuere ac ut consequat semper viverra. Praesent elementum facilisis leo vel fringilla est. Luctus venenatis lectus magna fringilla urna.</p>
        <p>Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Maecenas sed enim ut sem viverra aliquet. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Mauris nunc congue nisi vitae suscipit tellus mauris a. Pellentesque adipiscing commodo elit at imperdiet dui. Dolor morbi non arcu risus quis. Id diam maecenas ultricies mi. A diam maecenas sed enim ut sem. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Leo vel fringilla est ullamcorper. Egestas dui id ornare arcu odio. Neque ornare aenean euismod elementum nisi quis eleifend quam. Ut enim blandit volutpat maecenas. Ut sem nulla pharetra diam sit amet nisl. Natoque penatibus et magnis dis. Turpis egestas pretium aenean pharetra magna ac placerat.</p>
        <p>Iaculis urna id volutpat lacus laoreet non curabitur. Morbi tempus iaculis urna id. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Nulla at volutpat diam ut venenatis tellus in metus. Turpis egestas maecenas pharetra convallis posuere morbi leo. Ultricies tristique nulla aliquet enim tortor at. Arcu cursus euismod quis viverra nibh. Lectus urna duis convallis convallis tellus. Quisque sagittis purus sit amet volutpat consequat. Mauris sit amet massa vitae tortor. Viverra orci sagittis eu volutpat odio facilisis. Integer eget aliquet nibh praesent tristique. Et malesuada fames ac turpis.</p>
        <p>Ut venenatis tellus in metus vulputate. Integer eget aliquet nibh praesent tristique magna. Sagittis vitae et leo duis ut. Lorem ipsum dolor sit amet consectetur adipiscing. Lorem ipsum dolor sit amet. Massa enim nec dui nunc mattis enim ut tellus. Imperdiet massa tincidunt nunc pulvinar. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Neque volutpat ac tincidunt vitae semper. Tortor aliquam nulla facilisi cras. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Enim diam vulputate ut pharetra sit. Eu turpis egestas pretium aenean pharetra magna ac.</p>
    </VYCModal>

    <VYCButton @click="openModalBottom = true">Open from bottom</VYCButton>
    <VYCModal v-model="openModalBottom" @close="openModalBottom = false" transition="modal-from-bottom">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>
        <p>Vitae proin sagittis nisl rhoncus mattis. Ac felis donec et odio pellentesque diam volutpat commodo. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Nunc eget lorem dolor sed viverra ipsum. Arcu risus quis varius quam quisque id. Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Urna condimentum mattis pellentesque id. Accumsan tortor posuere ac ut consequat semper viverra. Praesent elementum facilisis leo vel fringilla est. Luctus venenatis lectus magna fringilla urna.</p>
        <p>Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Maecenas sed enim ut sem viverra aliquet. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Mauris nunc congue nisi vitae suscipit tellus mauris a. Pellentesque adipiscing commodo elit at imperdiet dui. Dolor morbi non arcu risus quis. Id diam maecenas ultricies mi. A diam maecenas sed enim ut sem. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Leo vel fringilla est ullamcorper. Egestas dui id ornare arcu odio. Neque ornare aenean euismod elementum nisi quis eleifend quam. Ut enim blandit volutpat maecenas. Ut sem nulla pharetra diam sit amet nisl. Natoque penatibus et magnis dis. Turpis egestas pretium aenean pharetra magna ac placerat.</p>
        <p>Iaculis urna id volutpat lacus laoreet non curabitur. Morbi tempus iaculis urna id. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Nulla at volutpat diam ut venenatis tellus in metus. Turpis egestas maecenas pharetra convallis posuere morbi leo. Ultricies tristique nulla aliquet enim tortor at. Arcu cursus euismod quis viverra nibh. Lectus urna duis convallis convallis tellus. Quisque sagittis purus sit amet volutpat consequat. Mauris sit amet massa vitae tortor. Viverra orci sagittis eu volutpat odio facilisis. Integer eget aliquet nibh praesent tristique. Et malesuada fames ac turpis.</p>
        <p>Ut venenatis tellus in metus vulputate. Integer eget aliquet nibh praesent tristique magna. Sagittis vitae et leo duis ut. Lorem ipsum dolor sit amet consectetur adipiscing. Lorem ipsum dolor sit amet. Massa enim nec dui nunc mattis enim ut tellus. Imperdiet massa tincidunt nunc pulvinar. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Neque volutpat ac tincidunt vitae semper. Tortor aliquam nulla facilisi cras. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Enim diam vulputate ut pharetra sit. Eu turpis egestas pretium aenean pharetra magna ac.</p>
    </VYCModal>

    <VYCButton @click="openModalTop = true">Open from top</VYCButton>
    <VYCModal v-model="openModalTop" @close="openModalTop = false" transition="modal-from-top">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>
        <p>Vitae proin sagittis nisl rhoncus mattis. Ac felis donec et odio pellentesque diam volutpat commodo. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Nunc eget lorem dolor sed viverra ipsum. Arcu risus quis varius quam quisque id. Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Urna condimentum mattis pellentesque id. Accumsan tortor posuere ac ut consequat semper viverra. Praesent elementum facilisis leo vel fringilla est. Luctus venenatis lectus magna fringilla urna.</p>
        <p>Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Maecenas sed enim ut sem viverra aliquet. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Mauris nunc congue nisi vitae suscipit tellus mauris a. Pellentesque adipiscing commodo elit at imperdiet dui. Dolor morbi non arcu risus quis. Id diam maecenas ultricies mi. A diam maecenas sed enim ut sem. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Leo vel fringilla est ullamcorper. Egestas dui id ornare arcu odio. Neque ornare aenean euismod elementum nisi quis eleifend quam. Ut enim blandit volutpat maecenas. Ut sem nulla pharetra diam sit amet nisl. Natoque penatibus et magnis dis. Turpis egestas pretium aenean pharetra magna ac placerat.</p>
        <p>Iaculis urna id volutpat lacus laoreet non curabitur. Morbi tempus iaculis urna id. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Nulla at volutpat diam ut venenatis tellus in metus. Turpis egestas maecenas pharetra convallis posuere morbi leo. Ultricies tristique nulla aliquet enim tortor at. Arcu cursus euismod quis viverra nibh. Lectus urna duis convallis convallis tellus. Quisque sagittis purus sit amet volutpat consequat. Mauris sit amet massa vitae tortor. Viverra orci sagittis eu volutpat odio facilisis. Integer eget aliquet nibh praesent tristique. Et malesuada fames ac turpis.</p>
        <p>Ut venenatis tellus in metus vulputate. Integer eget aliquet nibh praesent tristique magna. Sagittis vitae et leo duis ut. Lorem ipsum dolor sit amet consectetur adipiscing. Lorem ipsum dolor sit amet. Massa enim nec dui nunc mattis enim ut tellus. Imperdiet massa tincidunt nunc pulvinar. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Neque volutpat ac tincidunt vitae semper. Tortor aliquam nulla facilisi cras. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Enim diam vulputate ut pharetra sit. Eu turpis egestas pretium aenean pharetra magna ac.</p>
    </VYCModal>
    
    <VYCButton @click="openModalLeft = true">Open from left</VYCButton>
    <VYCModal v-model="openModalLeft" @close="openModalLeft = false" transition="modal-from-left">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>
        <p>Vitae proin sagittis nisl rhoncus mattis. Ac felis donec et odio pellentesque diam volutpat commodo. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Nunc eget lorem dolor sed viverra ipsum. Arcu risus quis varius quam quisque id. Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Urna condimentum mattis pellentesque id. Accumsan tortor posuere ac ut consequat semper viverra. Praesent elementum facilisis leo vel fringilla est. Luctus venenatis lectus magna fringilla urna.</p>
        <p>Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Maecenas sed enim ut sem viverra aliquet. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Mauris nunc congue nisi vitae suscipit tellus mauris a. Pellentesque adipiscing commodo elit at imperdiet dui. Dolor morbi non arcu risus quis. Id diam maecenas ultricies mi. A diam maecenas sed enim ut sem. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Leo vel fringilla est ullamcorper. Egestas dui id ornare arcu odio. Neque ornare aenean euismod elementum nisi quis eleifend quam. Ut enim blandit volutpat maecenas. Ut sem nulla pharetra diam sit amet nisl. Natoque penatibus et magnis dis. Turpis egestas pretium aenean pharetra magna ac placerat.</p>
        <p>Iaculis urna id volutpat lacus laoreet non curabitur. Morbi tempus iaculis urna id. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Nulla at volutpat diam ut venenatis tellus in metus. Turpis egestas maecenas pharetra convallis posuere morbi leo. Ultricies tristique nulla aliquet enim tortor at. Arcu cursus euismod quis viverra nibh. Lectus urna duis convallis convallis tellus. Quisque sagittis purus sit amet volutpat consequat. Mauris sit amet massa vitae tortor. Viverra orci sagittis eu volutpat odio facilisis. Integer eget aliquet nibh praesent tristique. Et malesuada fames ac turpis.</p>
        <p>Ut venenatis tellus in metus vulputate. Integer eget aliquet nibh praesent tristique magna. Sagittis vitae et leo duis ut. Lorem ipsum dolor sit amet consectetur adipiscing. Lorem ipsum dolor sit amet. Massa enim nec dui nunc mattis enim ut tellus. Imperdiet massa tincidunt nunc pulvinar. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Neque volutpat ac tincidunt vitae semper. Tortor aliquam nulla facilisi cras. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Enim diam vulputate ut pharetra sit. Eu turpis egestas pretium aenean pharetra magna ac.</p>
    </VYCModal>

    <VYCButton @click="openModalRight = true">Open from right</VYCButton>
    <VYCModal v-model="openModalRight" @close="openModalRight = false" transition="modal-from-right">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Vivamus at augue eget arcu dictum varius duis at. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nullam vehicula ipsum a arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Enim eu turpis egestas pretium. Rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat. Tempor commodo ullamcorper a lacus vestibulum sed. Sed vulputate mi sit amet mauris commodo quis imperdiet. Est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus euismod quis viverra nibh cras pulvinar. Malesuada fames ac turpis egestas integer. Ac auctor augue mauris augue neque gravida in fermentum. Diam quam nulla porttitor massa. Risus feugiat in ante metus. Nisl condimentum id venenatis a condimentum.</p>
        <p>Vitae proin sagittis nisl rhoncus mattis. Ac felis donec et odio pellentesque diam volutpat commodo. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Nunc eget lorem dolor sed viverra ipsum. Arcu risus quis varius quam quisque id. Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Urna condimentum mattis pellentesque id. Accumsan tortor posuere ac ut consequat semper viverra. Praesent elementum facilisis leo vel fringilla est. Luctus venenatis lectus magna fringilla urna.</p>
        <p>Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Maecenas sed enim ut sem viverra aliquet. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Mauris nunc congue nisi vitae suscipit tellus mauris a. Pellentesque adipiscing commodo elit at imperdiet dui. Dolor morbi non arcu risus quis. Id diam maecenas ultricies mi. A diam maecenas sed enim ut sem. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Leo vel fringilla est ullamcorper. Egestas dui id ornare arcu odio. Neque ornare aenean euismod elementum nisi quis eleifend quam. Ut enim blandit volutpat maecenas. Ut sem nulla pharetra diam sit amet nisl. Natoque penatibus et magnis dis. Turpis egestas pretium aenean pharetra magna ac placerat.</p>
        <p>Iaculis urna id volutpat lacus laoreet non curabitur. Morbi tempus iaculis urna id. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Nulla at volutpat diam ut venenatis tellus in metus. Turpis egestas maecenas pharetra convallis posuere morbi leo. Ultricies tristique nulla aliquet enim tortor at. Arcu cursus euismod quis viverra nibh. Lectus urna duis convallis convallis tellus. Quisque sagittis purus sit amet volutpat consequat. Mauris sit amet massa vitae tortor. Viverra orci sagittis eu volutpat odio facilisis. Integer eget aliquet nibh praesent tristique. Et malesuada fames ac turpis.</p>
        <p>Ut venenatis tellus in metus vulputate. Integer eget aliquet nibh praesent tristique magna. Sagittis vitae et leo duis ut. Lorem ipsum dolor sit amet consectetur adipiscing. Lorem ipsum dolor sit amet. Massa enim nec dui nunc mattis enim ut tellus. Imperdiet massa tincidunt nunc pulvinar. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Neque volutpat ac tincidunt vitae semper. Tortor aliquam nulla facilisi cras. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Enim diam vulputate ut pharetra sit. Eu turpis egestas pretium aenean pharetra magna ac.</p>
    </VYCModal>

    <hr>

    <h2 class="h1">Properties</h2>

    <div class="property">
        name: modelValue <br>
        type: boolean <br>
        default: false <br>
        description: Shows or hides modal
    </div>

    <div class="property">
        name: transition <br>
        type: string <br>
        default: fade <br>
        description: Transition for open / close modal. Avaliable transitions ['fade', 'modal-from-top', 'modal-from-bottom', 'modal-from-left', 'modal-from-right']
    </div>
    <div class="property">
        name: overlayClasses <br>
        type: string <br>
        description: Custom classes for the modal overlay
    </div>
    <div class="property">
        name: modalClasses <br>
        type: string <br>
        description: Custom classes for the modal
    </div>
    <div class="property">
        name: closeBtnClasses <br>
        type: string <br>
        description: Custom classes for the close button in the modal
    </div>

    <hr>

    <h2 class="h1">Slots</h2>
    
    <div class="property">
        name: default<br>
        description: the default slot diplays content inside the modal
    </div>

</template>
