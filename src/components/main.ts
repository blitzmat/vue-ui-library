import type { App } from 'vue'
import './style.css'
import VYCAccordion from './vyc-accordion/VYCAccordion.vue'
import VYCAccordionPanel from './vyc-accordion/VYCAccordionPanel.vue'
import VYCButton from './vyc-button/VYCButton.vue'
import VYCCarousel from './vyc-carousel/VYCCarousel.vue';
import VYCCheckbox from './vyc-form/VYCCheckbox.vue'
import VYCDrawer from './vyc-drawer/VYCDrawer.vue'
import VYCForm from './vyc-form/VYCForm.vue'
import VYCGallery from './vyc-gallery/VYCGallery.vue'
import VYCInput from './vyc-form/VYCInput.vue'
import VYCImage from './vyc-image/VYCImage.vue'
import VYCModal from './vyc-modal/VYCModal.vue';
import VYCPagination from './vyc-pagination/VYCPagination.vue';
import VYCProgress from './vyc-progress/VYCProgress.vue';
import VYCRadio from './vyc-form/VYCRadio.vue'
import VYCImageReveal from './vyc-image-reveal/VYCImageReveal.vue'
import VYCScrollAnimation from './vyc-scroll-animation/VYCScrollAnimation.vue'
import VYCSelect from './vyc-form/VYCSelect.vue'
import VYCSlide from './vyc-carousel/VYCSlide.vue'
import VYCSlider from './vyc-slider/VYCSlider.vue'
import VYCTabs from './vyc-tabs/VYCTabs.vue';
import VYCTab from './vyc-tabs/VYCTab.vue';
import VYCTextArea from './vyc-form/VYCTextArea.vue';
import VYCToast from './vyc-toast/VYCToast.vue';
import VYCTooltip from './vyc-tooltip/VYCTooltip.vue';
import VYCTranslate from './vyc-translate/VYCTranslate.vue';
import VYCTruncate from './vyc-truncate/VYCTruncate.vue';
import VYCVideo from './vyc-video/VYCVideo.vue';
import VYCWizard from './vyc-wizard/VYCWizard.vue';


export default {
    install: (app: App) => {
        app.component('VYCAccordion', VYCAccordion)
        app.component('VYCAccordionPanel', VYCAccordionPanel)
        app.component('VYCButton', VYCButton)
        app.component('VYCCarousel', VYCCarousel)
        app.component('VYCCheckbox', VYCCheckbox)
        app.component('VYCDrawer', VYCDrawer)
        app.component('VYCForm', VYCForm)
        app.component('VYCGallery', VYCGallery)
        app.component('VYCInput', VYCInput)
        app.component('VYCImage', VYCImage)
        app.component('VYCModal', VYCModal)
        app.component('VYCPagination', VYCPagination)
        app.component('VYCProgress', VYCProgress)
        app.component('VYCRadio', VYCRadio)
        app.component('VYCImageReveal', VYCImageReveal)
        app.component('VYCScrollAnimation', VYCScrollAnimation)
        app.component('VYCSelect', VYCSelect)
        app.component('VYCSlide', VYCSlide)
        app.component('VYCSlider', VYCSlider)
        app.component('VYCTabs', VYCTabs)
        app.component('VYCTab', VYCTab)
        app.component('VYCTextArea', VYCTextArea)
        app.component('VYCToast', VYCToast)
        app.component('VYCTooltip', VYCTooltip)
        app.component('VYCTranslate', VYCTranslate)
        app.component('VYCTruncate', VYCTruncate)
        app.component('VYCVideo', VYCVideo)
        app.component('VYCWizard', VYCWizard)
    }
}

export {
    VYCAccordion,
    VYCAccordionPanel,
    VYCButton,
    VYCCarousel,
    VYCCheckbox,
    VYCDrawer,
    VYCForm,
    VYCGallery,
    VYCInput,
    VYCModal,
    VYCPagination,
    VYCProgress,
    VYCRadio,
    VYCImage,
    VYCImageReveal,
    VYCScrollAnimation,
    VYCSelect,
    VYCSlide,
    VYCSlider,
    VYCTabs,
    VYCTab,
    VYCTextArea,
    VYCToast,
    VYCTooltip,
    VYCTranslate,
    VYCTruncate,
    VYCVideo,
    VYCWizard,
}
