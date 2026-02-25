import {onBeforeUnmount, onMounted,ref} from "vue"
import type {Ref} from "vue"

const BREAKPOINTS = {
    mobile: 425,
    tablet: 768,
    tablet_landscape: 1024,
    desktop: 1200,
    desktop_large: 1440,
    hd: 1920
}

export interface Breakpoints {
    width: number,
    lt_mobile: boolean,
    mobile: boolean,
    gt_mobile: boolean,
    lt_tablet: boolean,
    tablet: boolean,
    gt_tablet: boolean,
    lt_tablet_landscape: boolean,
    tablet_landscape: boolean,
    gt_tablet_landscape: boolean,
    lt_desktop: boolean,
    desktop: boolean,
    gt_desktop: boolean,
    lt_desktop_large: boolean,
    desktop_large: boolean,
    gt_desktop_large: boolean,
    lt_hd: boolean,
    hd: boolean
}

export default function useBreakpoints(): Ref<Breakpoints> {

    const breakpoints: Ref<Breakpoints> = ref({
        width: 0,
        lt_mobile: false,
        mobile: false,
        gt_mobile: false,
        lt_tablet: false,
        tablet: false,
        gt_tablet: false,
        lt_tablet_landscape: false,
        tablet_landscape: false,
        gt_tablet_landscape: false,
        lt_desktop: false,
        desktop: false,
        gt_desktop: false,
        lt_desktop_large: false,
        desktop_large: false,
        gt_desktop_large: false,
        lt_hd: false,
        hd: false
    })

    function getWidthFromUserAgent() {
        console.log('user agent');
        return 1920;
    }

    function calculateBreakPoint(): Breakpoints {
        let width =typeof window === "undefined" ? getWidthFromUserAgent() : window.innerWidth
        breakpoints.value = {
            width,
            lt_mobile: width < BREAKPOINTS.mobile,
            mobile: width >= BREAKPOINTS.mobile && width < BREAKPOINTS.tablet,
            gt_mobile: width >= BREAKPOINTS.mobile,
            lt_tablet: width < BREAKPOINTS.tablet,
            tablet: width >= BREAKPOINTS.tablet && width < BREAKPOINTS.tablet_landscape,
            gt_tablet: width >= BREAKPOINTS.tablet,
            lt_tablet_landscape: width < BREAKPOINTS.tablet_landscape,
            tablet_landscape: width >= BREAKPOINTS.tablet_landscape && width < BREAKPOINTS.desktop,
            gt_tablet_landscape: width > BREAKPOINTS.tablet_landscape,
            lt_desktop: width < BREAKPOINTS.desktop,
            desktop: width >= BREAKPOINTS.desktop && width < BREAKPOINTS.desktop_large,
            gt_desktop: width >= BREAKPOINTS.desktop,
            lt_desktop_large: width < BREAKPOINTS.desktop_large,
            desktop_large: width >= BREAKPOINTS.desktop_large && width < BREAKPOINTS.hd,
            gt_desktop_large: width > BREAKPOINTS.desktop_large,
            lt_hd: width < BREAKPOINTS.hd,
            hd: width >= BREAKPOINTS.hd
        }
        return breakpoints.value
    }

    onMounted(() => {
        calculateBreakPoint()
    })

    if (typeof window !== "undefined") {
        window.addEventListener('resize', calculateBreakPoint)

        onBeforeUnmount(() => {
            window.removeEventListener('resize', calculateBreakPoint)
        })
    }

    return breakpoints

}
