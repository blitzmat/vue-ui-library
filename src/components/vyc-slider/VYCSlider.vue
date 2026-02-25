<script setup lang="ts">
import { computed, onMounted, ref, useModel, watch, watchEffect } from "vue";

const props = withDefaults(defineProps<{
    modelValue?: number|Array<number>
    disabled?: boolean
    max?: number
    min?: number
    ticks?: boolean
    step?: number
    stepDecimals?: boolean
    textFixed?: string
    sliderClass?: string
    sliderLineClass?: string
    indicatorClass?: string
    indicator2Class?: string
    hideIndicator2?: boolean
    tickClass?: string
    textClass?: string
    effectClass?: string
    noEffect?: boolean
    indicatorText?: boolean
}>(), {
    disabled: false,
    max: 100,
    min: 0,
    ticks: false,
    step: 1,
    stepDecimals: false,
    effectClass: 'bg-gray-600',
    sliderClass: 'bg-gray-400',
    indicatorClass: 'border border-gray-500 bg-gray-300 w-4 h-4 active:bg-gray-500',
    noEffect: false,
})

const { modelValue, max, min, step, stepDecimals } = props

const sliderValue = useModel(props, 'modelValue')
// const sliderValue = ref(modelValue)
const leftx = ref(0)
const leftTwo = ref(0)
const two = ref(false)
const actived = ref(false)
const slider = ref<Element|null>(null)
const effect = ref(false)
const changeValue = ref(false)
const valueIndicator1 = ref(0)
const valueIndicator2 = ref(0)

const emit = defineEmits<{
    input: [val: number|Array<number>]
}>()


const isEquals = computed(() => {
    return Array.isArray(sliderValue.value) && !props.hideIndicator2 ? sliderValue.value[0] == sliderValue.value[1] : false;
})
const countTicks = computed(() => {
    return max / step
})

const styleLineOne = computed(() => {
    let widthX = leftTwo.value - leftx.value;
    let leftX = leftx.value
    if (leftX > leftTwo.value) {
        widthX = leftX - leftTwo.value;
        leftX = leftTwo.value;
    }
    return {
        width: `${widthX}%`,
        left: `${leftX}%`,
    };
})
const styleIndicator = computed(() => `left: ${leftx.value}%`)
const styleIndicatorTwo = computed(() => `left: ${leftTwo.value}%`)
const styleEfect = computed(() => `left: ${two.value ? leftTwo.value : leftx.value}%`)

const computedWrapperClass = computed(() => {
    return 'relative w-full left-0 my-4 block min-w-[300px] z-20'
})
const computedSliderClass = computed(() => {
    return 'w-full h-1 rounded relative cursor-pointer border-none m-0 block overflow-hidden'
})
const computedSliderLineClass = computed(() => {
    return 'w-5 h-full absolute top-0 left-0 z-10 bg-black'
})
const computedEffectClass = computed(() => {
    return 'w-full h-full absolute top-0 left-0 transition-[width_0.3s_ease] -translate-x-1/2'
})
const computedIndicatorClass = computed(() => {
    return {
        'group -translate-x-1/2 transition top-1/2 absolute top-0 cursor-pointer m-0 z-30': true,
        '-translate-y-1/2 rounded-full': !isEquals.value
    }
})
const computedTickClass = computed(() => {
    return 'absolute top-0 left-[100px] bg-slate-600 w-1 h-full'
})
const computedTextClass = computed(() => {
    return `
        bg-slate-400 absolute top-0 left-1/2 px-[5px] py-[2px] rounded-sm -translate-x-1/2 -translate-y-[20%] scale-[0.3] text-sm opacity-0 invisible transition-all flex items-center justify-center z-40
        after:w-[6px] after:h-[6px] after:block after:absolute after:left-1/2 after:-bottom-[3px] after:-translate-x-1/2 after:rotate-45
        group-active:opacity-100 group-active:-translate-x-1/2 group-active:-translate-y-[115%] group-active:scale-100 group-active:rotate-0 group-active:visible 
    `
})

function toDecimal(value:number) {
    return parseFloat(value.toFixed(1))
}
function mousewheelx(evt:WheelEvent) {
    if (!Array.isArray(modelValue)) {
        if (evt.deltaX > 0) {
            let val:number = modelValue ? modelValue + step : step
            val = stepDecimals ? toDecimal(val) : Math.round(val);
            if (modelValue && modelValue >= max) {
                val = max;
            }
            leftx.value = val;
            emit('input', val);
        } else {
            let val:number = modelValue ? modelValue - step : step;
            val = stepDecimals ? toDecimal(val) : Math.round(val);
            if (modelValue && modelValue <= min) {
                val = min;
            }
            leftx.value = val;
            emit('input', val);
        }
    }
}

function keydownLeft() {
    if (!Array.isArray(modelValue)) {
        let val:number = modelValue ? modelValue - step : step
        val = stepDecimals ? toDecimal(val) : Math.round(val);
        if (modelValue == min) {
            val = min;
        }
        leftx.value = val;
        emit('input', val);
    }
}

function keydownRight() {
    if (!Array.isArray(modelValue)) {
        let val:number = modelValue ? modelValue + step : step;
        val = stepDecimals ? toDecimal(val) : Math.round(val);
        if (modelValue && modelValue >= max) {
            val = max;
        }
        leftx.value = val;
        emit('input', val);
    }
}

function changePosition() {
    if (Array.isArray(modelValue)) {
        leftx.value = ((modelValue[0] - min) / (max - min)) * 100;
        leftTwo.value = ((modelValue[1] - min) / (max - min)) * 100;
    } else {
        leftx.value = ((modelValue ? modelValue - min : 0) / (max - min)) * 100;
    }
}

function styleTicks(index:number) {
    let lengthPerStep = 100 / ((max - min) / step);
    let steps = index / step;
    return {
        left: (steps * lengthPerStep) * step + "%"
    };
}
function changeLeft(leftX:number) {
    let _slider:Element|null = slider ? slider.value : null;
    let percentX = _slider ? (leftX / _slider.clientWidth) * 100 : 0;
    
    const lengthPerStep = 100 / ((max - min) / step);
    const steps = Math.round(percentX / lengthPerStep);
    let val = steps * lengthPerStep * (max - min) * 0.01 + min;
    val = stepDecimals ? toDecimal(val) : Math.round(val);

    if (val > max) {
        val = max;
        two.value ? leftTwo.value = 100 : leftx.value = 100
    } else {
        two.value ? leftTwo.value = steps * lengthPerStep : leftx.value = steps * lengthPerStep
    }
    
    if (Array.isArray(sliderValue.value) && !props.hideIndicator2) {
        let valueNew = val;
        if (val == max) {
            valueNew = max;
        }
        
        let _min = Math.round((leftx.value / 100) * (max / step)) * step;
        let _max = Math.round((leftTwo.value / 100) * (max / step)) * step;
        let vals = sliderValue.value;

        if (two.value) {
            if (_min > _max) {
                emit('input', [valueNew, vals[1]]);
                sliderValue.value = [valueNew, vals[1]]
            } else if (_min < _max) {
                emit('input', [vals[0], valueNew]);
                sliderValue.value = [vals[0], valueNew]
            } else {
                emit('input', [valueNew, valueNew]);
                sliderValue.value = [valueNew, valueNew]
            }
        } else {
            if (_min < _max) {
                emit('input', [valueNew, vals[1]]);
                sliderValue.value = [valueNew, vals[1]]
            } else if (_min > _max) {
                emit('input', [vals[0], valueNew]);
                sliderValue.value = [vals[0], valueNew]
            } else {
                emit('input', [valueNew, valueNew]);
                sliderValue.value = [valueNew, valueNew]
            }
        }
    } else {
        emit('input', val);
        sliderValue.value = val
    }
}

function mouseMoveX(evt:MouseEvent) {
    let _slider:Element|null = slider ? slider.value : null;
    let leftX:number = 0;
    /*
    * change position left indicator and bar
    */
    if (_slider) {
        leftX = evt.clientX - _slider.getBoundingClientRect().left;

        if (Math.sign(leftX) == -1) {
            leftX = 0;
        } else if (leftX > _slider.clientWidth) {
            leftX = _slider.clientWidth;
        }
    }

    changeLeft(leftX);
}
function touchMoveX(evt: TouchEvent) {
    let _slider:Element|null = slider ? slider.value : null;
    let leftX:number = 0;
    /*
    * change position left indicator and bar
    */
    if (_slider) {
        leftX = evt.targetTouches[0].clientX - _slider.getBoundingClientRect().left;
    
        if (Math.sign(leftX) == -1) {
            leftX = 0;
        } else if (leftX > _slider.clientWidth) {
            leftX = _slider.clientWidth;
        }
    }

    changeLeft(leftX);
}

function removeEvents() {
    two.value = actived.value = false;
    window.removeEventListener("mouseup", removeEvents);
    window.removeEventListener("mousemove", mouseMoveX);
    window.removeEventListener("touchmove", touchMoveX);
    window.removeEventListener("touchend", removeEvents);
}

function activeFocus() {
    window.addEventListener("mousemove", mouseMoveX);
    window.addEventListener("mouseup", removeEvents);
    window.addEventListener("touchmove", touchMoveX);
    window.addEventListener("touchend", removeEvents);
}

function clickSlider(evt:MouseEvent) {
    let _slider:Element|null = slider ? slider.value : null;
    let leftX:number = 0
    if (_slider) leftX = evt.clientX - _slider.getBoundingClientRect().left;
    effect.value = true;
    setTimeout(() => {
        effect.value = false;
    }, 200);
    let percentX:number = 0
    if (_slider) percentX = Math.round((leftX / _slider.clientWidth) * 100);

    if (Array.isArray(modelValue) && !props.hideIndicator2) {
        if ( Math.abs(percentX - leftx.value) > Math.abs(percentX - leftTwo.value) ) {
            two.value = true;
        } else {
            two.value = false;
        }
    }

    changeLeft(leftX);
}

watchEffect(() => {
    if (!actived) {
        changePosition();
    }
    changeValue.value = true;
    setTimeout(() => {
        changeValue.value = false;
    }, 300);

    if (sliderValue.value) emit('input', sliderValue.value)
})
watch(leftx, () => {
    if (Array.isArray(sliderValue.value)) {
        if (leftx.value > leftTwo.value) {
            valueIndicator1.value = sliderValue.value[1];
        } else {
            valueIndicator1.value = sliderValue.value[0];
        }
    } else {
        valueIndicator1.value = sliderValue.value ? sliderValue.value : 0;
    }
})
watch(leftTwo, () => {
    if (Array.isArray(sliderValue.value)) {
        if (leftTwo.value > leftx.value) {
            valueIndicator2.value = sliderValue.value ? sliderValue.value[1] : 0;
        } else {
            valueIndicator2.value = sliderValue.value ? sliderValue.value[0] : 0;
        }
    }
})

onMounted(() => changePosition())
</script>

<template>
    <div
        v-bind="$attrs"
        :class="[
            {'opacity-[0.4] cursor-default':disabled},
            computedWrapperClass,
        ]"
        @mousewheel.prevent="mousewheelx"
        @keydown.left="keydownLeft"
        @keydown.right="keydownRight">
    
        <button
            ref="slider"
            :disabled="disabled"
            :class="[
                {'cursor-default pointer-events-none': disabled},
                computedSliderClass,
                sliderClass
            ]"
            type="button"
            @click="clickSlider($event),actived = true">

            <span
            :style="styleLineOne"
            :class="[{'hasTransition':effect}, computedSliderLineClass, sliderLineClass]"></span>
    
            <span
                v-if="!noEffect"
                :class="[
                    effectClass,
                    {'w-full animate-[sliderLineEffect_0.3s_ease]':effect},
                    {'opacity-0 w-0':!effect},
                    computedEffectClass
                ]"
                :style="styleEfect"></span>
    
            <!-- Ticks -->
            <template v-if="ticks">
                <span
                    v-for="tick in countTicks"
                    :key="tick"
                    :class="[
                        {'-translate-x-full':tick == countTicks-1},
                        computedTickClass,
                        tickClass
                    ]"
                    :style="styleTicks(tick)"
                    class="absolute top-0 left-[100px] bg-slate-600 w-1 h-full">
                </span>
            </template>
        </button>
        <button
            :disabled="disabled"
            :class="[
                {
                'transition-all':effect,
                'rounded-[0_0_50%_50%] -translate-x-1/2 scale-90':isEquals,
                'active:bg-gray-600':changeValue
                },
                computedIndicatorClass,
                indicatorClass
            ]"
            :style="styleIndicator"
            type="button"
            @touchstart="activeFocus(),actived = true"
            @mousedown="activeFocus(),actived = true">
            <span
                v-if="indicatorText"
                :class="[
                    computedTextClass,
                    textClass,
                    {'group-active:translate-y-[115%]':isEquals}
                ]"
                >
                {{ valueIndicator1 }}
                <span v-if="textFixed">
                    {{ textFixed }}
                </span>
            </span>
            
        </button>
        <button
            v-if="Array.isArray(modelValue)"
            :disabled="disabled"
            :class="[
                {
                    'transition-all':effect,
                    'rounded-[50%_50%_0_0] -translate-x-1/2 -translate-y-full scale-90':isEquals,
                    'active:bg-gray-600':changeValue,
                    'hidden':  props.hideIndicator2,
                },
                computedIndicatorClass,
                indicator2Class ? indicator2Class : indicatorClass,
            ]"
            :style="styleIndicatorTwo"
            type="button"
            @touchstart="activeFocus(),two = true,actived = true"
            @mousedown="activeFocus(),two = true,actived = true">
            
            <span
                v-if="indicatorText"
                :class="[computedTextClass, textClass]"
                >
                {{ valueIndicator2 }}
                <span v-if="textFixed">
                    {{ textFixed }}
                </span>
            </span>
    
        </button>
    </div>
</template>