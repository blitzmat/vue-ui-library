// src/composables/useGroupedMenu.ts
import { computed } from 'vue'
import { useRouter, type RouteRecordRaw } from 'vue-router'

export interface MenuGroup {
    key: string
    title: string
    basePath: string
    routes: RouteRecordRaw[]
}

export function useGroupedMenu(options?: {
    filter?: (route: RouteRecordRaw) => boolean
    groupBy?: (route: RouteRecordRaw) => string
    sortGroups?: (a: MenuGroup, b: MenuGroup) => number
    sortRoutes?: (a: RouteRecordRaw, b: RouteRecordRaw) => number
}) {
    const router = useRouter()

    const {
        filter = defaultFilter,
        groupBy = defaultGroupBy,
        sortGroups = defaultSortGroups,
        sortRoutes = defaultSortRoutes,
    } = options ?? {}

    const menuGroups = computed<MenuGroup[]>(() => {
        const routes = router.getRoutes().filter(filter)

        // Group routes by key
        const groupsMap = new Map<string, RouteRecordRaw[]>()

        routes.forEach(route => {
            const key = groupBy(route)
            const existing = groupsMap.get(key) ?? []
            existing.push(route)
            groupsMap.set(key, existing)
        })

        // Convert to MenuGroup array
        const groups: MenuGroup[] = Array.from(groupsMap.entries()).map(([key, groupRoutes]) => {
            // Sort routes within group
            groupRoutes.sort(sortRoutes)

            const baseRoute = groupRoutes.find(r => r.path === `/${key}`) || groupRoutes[0]
            const title = baseRoute?.meta?.title as string || key.charAt(0).toUpperCase() + key.slice(1)

            return {
                key,
                title,
                basePath: `/${key}`,
                routes: groupRoutes,
            }
        })

        // Sort groups
        groups.sort(sortGroups)

        return groups
    })

    return { menuGroups }
}

// Default implementations
function defaultFilter(route: RouteRecordRaw): boolean {
    // Exclude catch-all and routes with dynamic params (e.g., :id)
    return !route.path.includes(':') && route.path !== '/:pathMatch(.*)*'
}

function defaultGroupBy(route: RouteRecordRaw): string {
    const segments = route.path.split('/').filter(Boolean)
    return segments[0] || 'home'  // root path '/' → 'home'
}

function defaultSortGroups(a: MenuGroup, b: MenuGroup): number {
    if (a.key === 'home') return -1
    if (b.key === 'home') return 1
    return a.key.localeCompare(b.key)
}

function defaultSortRoutes(a: RouteRecordRaw, b: RouteRecordRaw): number {
    // Sort by path depth, then alphabetically
    const depthA = a.path.split('/').filter(Boolean).length
    const depthB = b.path.split('/').filter(Boolean).length
    if (depthA !== depthB) return depthA - depthB
    return a.path.localeCompare(b.path)
}
