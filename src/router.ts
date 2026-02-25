import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Accordion from '@/pages/Accordion.vue'
import Button from '@/pages/Button.vue'
import Carousel from '@/pages/Carousel.vue'
import Checkbox from '@/pages/forms/Checkbox.vue'
import Drawer from '@/pages/Drawer.vue'
import Input from '@/pages/forms/Input.vue'
import Form from '@/pages/forms/Form.vue'
import Gallery from '@/pages/Gallery.vue'
import Modal from '@/pages/Modal.vue'
import Pagination from '@/pages/Pagination.vue'
import Progress from '@/pages/Progress.vue'
import Radio from '@/pages/forms/Radio.vue'
import Images from '@/pages/Images.vue'
import ImageReveal from '@/pages/ImageReveal.vue'
import ScrollAnimation from '@/pages/ScrollAnimation.vue'
import Select from '@/pages/forms/Select.vue'
import Slider from '@/pages/Slider.vue'
import Tabs from '@/pages/Tabs.vue'
import Textarea from '@/pages/forms/Textarea.vue'
import Toast from '@/pages/Toast.vue'
import Tooltip from '@/pages/Tooltip.vue'
import Translate from '@/pages/Translate.vue'
import Truncate from '@/pages/Truncate.vue'
import Video from '@/pages/Video.vue'
import Wizard from '@/pages/Wizard.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/accordion', component: Accordion },
    { path: '/button', component: Button },
    { path: '/carousel', component: Carousel },
    { path: '/drawer', component: Drawer },
    {
        path: '/forms', redirect: '/forms/form', children: [
            { path: '/forms/form', component: Form },
            { path: '/forms/checkbox', component: Checkbox },
            { path: '/forms/input', component: Input },
            { path: '/forms/radio', component: Radio },
            { path: '/forms/select', component: Select },
            { path: '/forms/textarea', component: Textarea },
        ]
    },
    { path: '/gallery', component: Gallery },
    { path: '/modal', component: Modal },
    { path: '/pagination', component: Pagination },
    { path: '/progress', component: Progress },
    { path: '/images', component: Images },
    { path: '/image-reveal', component: ImageReveal },
    { path: '/scroll-animation', component: ScrollAnimation },
    { path: '/slider', component: Slider },
    { path: '/tabs', component: Tabs },
    { path: '/toast', component: Toast },
    { path: '/tooltip', component: Tooltip },
    { path: '/translate', component: Translate },
    { path: '/truncate', component: Truncate },
    { path: '/video', component: Video },
    { path: '/wizard', component: Wizard },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
