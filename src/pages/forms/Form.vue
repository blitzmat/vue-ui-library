<script setup lang="ts">
import { VYCForm, VYCInput, VYCButton, VYCRadio, VYCTextArea, VYCCheckbox, VYCSelect } from '@/components';
import { onMounted, ref } from 'vue';

interface Form {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    message: string,
    latestNews: string,
    moreOptions: string,
    privacyPolicy: boolean,
    selectOption: string
}
interface Error {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    message: string,
    latestNews: string,
    moreOptions: string,
    privacyPolicy: string,
    selectOption: string,
}

const formRef = ref()
const form = ref<Form>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
    latestNews: '',
    moreOptions: '',
    privacyPolicy: false,
    selectOption: ''
})
const error = ref<Error>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
    latestNews: '',
    moreOptions: '',
    privacyPolicy: '',
    selectOption: ''
})

const isSuccess = ref<boolean>(false)
const isFailed = ref<boolean>(false)

function onSuccess(data: Form) {
    error.value = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
        latestNews: '',
        moreOptions: '',
        privacyPolicy: '',
        selectOption: ''
    }
    form.value = data
    isFailed.value = false
    isSuccess.value = true
}
function onFailed(errors: Error) {
    error.value = errors
    isSuccess.value = false
    isFailed.value = true
}


function validate(event: Event) {
    console.log(formRef.value, {a: event.target})
    formRef.value.validateField(event.target)
}

// function checkboxValidate(event: Event) {
//     form.value.privacyPolicy = (event.target as HTMLInputElement).checked
//     validate(event)
// }
</script>

<template>
    <h1 class="h1">Input Checkbox</h1>
    <hr class="hr">
    <VYCForm ref="formRef" @success="onSuccess" @failed="onFailed" custom-validation>
        <VYCInput required v-model="form.firstName" id="first-name" label="First Name - With blur event validation" :error="error.firstName" @blur="event => validate(event)" />
        
        <VYCInput required v-model="form.lastName" id="last-name" label="Last Name" :error="error.lastName" input-error-classes="border-red-500">
            <template #prefix>
                <span>X</span>
            </template>
            <template #affix>
                <span>X</span>
            </template>
        </VYCInput>
        <VYCInput required v-model="form.email" id="email" label="Email" type="email" :error="error.email" />
        <VYCInput required v-model="form.phoneNumber" id="phone-number" label="Phone Number" type="number" :error="error.phoneNumber" />
        <VYCTextArea v-model="form.message" id="message" label="Message" required :error="error.message" placeholder="Test" />
        Want to receive latest news?
        <VYCRadio v-model="form.latestNews" value="1" id="latest-news-1" name="latest-news" label="Yes" required />
        <VYCRadio v-model="form.latestNews" value="0" id="latest-news-0" name="latest-news" label="No" required :error="error.latestNews" />

        More options
        <VYCRadio v-model="form.moreOptions" value="1" id="input-radio-1" name="more-options" label="Yes" required />
        <VYCRadio v-model="form.moreOptions" value="0" id="input-radio-2" name="more-options" label="No" required :error="error.moreOptions" />
        
        <VYCCheckbox 
            v-model="form.privacyPolicy"
            required
            id="privacy-policy"
            name="privacy-policy"
            label="Do you agree with our privacy policy?"
            :error="error.privacyPolicy"
        />
        <VYCSelect required name="select-option" id="select-option" label="Select Option" v-model="form.selectOption" :error="error.selectOption">
            <option value="" selected>Select option</option>
            <option value="option-1">Option 1</option>
            <option value="option-2">Option 2</option>
            <option value="option-3">Option 3</option>
        </VYCSelect>
        <VYCButton type="submit">Submit</VYCButton>
        <div v-if="isSuccess">
            <h2 class="h2">Payload - Success</h2>
            <p class="text-green-600">{{ form }}</p>
        </div>
        <div v-if="isFailed">
            <h2 class="h2">Payload - Failed</h2>
            <p class="text-red-600">{{ error }}</p>
        </div>
    </VYCForm>

    <hr>

    <h2 class="h1">Properties</h2>
    <div class="property">
        name: action <br>
        type: string<br>
        default: POST<br>
        description: Form action of submit
    </div>
    <div class="property">
        name: customValidation <br>
        type: boolean<br>
        default: false<br>
        description: Displays custom validation
    </div>
    <h2 class="h1">Exposures</h2>
    <div class="property">
        name: validateField<br>
        type: function<br>
        arguments: Element
        description: Pass a form element to the function to validate eg. validateField($querySelector('input'))
    </div>
    <h2 class="h1">Events</h2>
    <div class="property">
        name: @success<br>
        type: event<br>
        description: A success event is emitted when form passes validation
    </div>
    <div class="property">
        name: @failed <br>
        type: event<br>
        description: A failed event is emitted when form has validation errors
    </div>
</template>
