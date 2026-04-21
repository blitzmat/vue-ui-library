import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// Use root-relative path for reliability
const pages = import.meta.glob('/src/pages/**/*.vue')

// Create routes from glob
const generatedRoutes: RouteRecordRaw[] = Object.entries(pages).map(([path, component]) => {
    let routePath = path
        .replace('/src/pages', '')
        .replace(/\.vue$/, '')
        .replace(/\/index$/, '')
        .toLowerCase()

    if (!routePath.startsWith('/')) routePath = '/' + routePath

    const name = routePath
        .replace(/^\//, '')
        .replace(/\//g, '-')
        .replace(/-$/, '') || 'home'

    return {
        path: routePath,
        name,
        component,
        meta: {
            title: name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
        }
    }
})

// If no pages found, add a fallback home route (prevents empty routes array)
const routes: RouteRecordRaw[] = generatedRoutes.length > 0
    ? generatedRoutes
    : [
        {
            path: '/',
            name: 'home',
            component: () => import('./pages/index.vue') // adjust path as needed
        }
    ]

// Add catch-all ONLY if we have at least one valid route to redirect to
if (routes.length > 0 && routes.some(r => r.path === '/')) {
    routes.push({
        path: '/:pathMatch(.*)*',
        redirect: '/'
    })
}

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

// const routes = [
//     { path: '/', component: Home },
//     { path: '/accordion', component: Accordion },
//     { path: '/button', component: Button },
//     { path: '/carousel', component: Carousel },
//     { path: '/drawer', component: Drawer },
//     {
//         path: '/forms', redirect: '/forms/form', children: [
//             { path: '/forms/form', component: Form },
//             { path: '/forms/checkbox', component: Checkbox },
//             { path: '/forms/input', component: Input },
//             { path: '/forms/radio', component: Radio },
//             { path: '/forms/select', component: Select },
//             { path: '/forms/textarea', component: Textarea },
//         ]
//     },
//     { path: '/gallery', component: Gallery },
//     { path: '/modal', component: Modal },
//     { path: '/pagination', component: Pagination },
//     { path: '/progress', component: Progress },
//     { path: '/images', component: Images },
//     { path: '/image-reveal', component: ImageReveal },
//     { path: '/scroll-animation', component: ScrollAnimation },
//     { path: '/slider', component: Slider },
//     { path: '/tabs', component: Tabs },
//     { path: '/toast', component: Toast },
//     { path: '/tooltip', component: Tooltip },
//     { path: '/translate', component: Translate },
//     { path: '/truncate', component: Truncate },
//     { path: '/video', component: Video },
//     { path: '/wizard', component: Wizard },
// ]

// const router = createRouter({
//     history: createWebHistory(import.meta.env.BASE_URL),
//     routes,
// })

