<template>
    <div class="overflow-hidden flex">

        <template
            v-for="(level, index) in stack"
            :key="index"
        >
            <TransitionGroup :name="transition">
                <div v-if="index == currentIndex" :class="stepClasses" class="basis-full shrink-0 grow-0">
                    <slot v-if="index > 0" name="back-btn" :index="index" :closeSubmenu="closeSubmenu">
                        <button
                            @click="closeSubmenu"
                            :class="backBtnClasses"
                        >
                            ◂ Back
                        </button>
                    </slot>

                    <slot
                        :level="level"
                        :openSubmenu="openSubmenu"
                        :closeSubmenu="closeSubmenu"
                    ></slot>
                </div>
            </TransitionGroup>
        </template>
    </div>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";

interface Props {
    root: any[];
    transition?: string
    stepClasses?: string
    backBtnClasses?: string
}

const props = defineProps<Props>();

const stack = ref<any[][]>([props.root]);
const currentIndex = ref<number>(0);
const previousIndex = ref<number>(0)

function openSubmenu(data: any[]) {
    stack.value.push(data);
    previousIndex.value = currentIndex.value
    currentIndex.value++;
}

function closeSubmenu() {
    if (currentIndex.value > 0) {
        stack.value.pop();
        previousIndex.value = currentIndex.value
        currentIndex.value--;
    }
}
</script>


