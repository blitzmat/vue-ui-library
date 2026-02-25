<script lang="ts">
import { h, defineComponent, ref, computed, VNode, Text, VNodeProps, VNodeChild } from 'vue';
import { useTruncateString } from '../../composables/useTruncateString';

// Helper function to process a single VNode or primitive
function processVNode(
    node: VNode | string | number | boolean | null | undefined,
    shouldTruncate: boolean,
    limit: number
): VNodeChild {
    if (node === null || node === undefined) {
        return null;
    }

    if (typeof node === 'string') {
        const originalText = node.trim();
        const displayText = shouldTruncate
            ? useTruncateString(originalText, limit)
            : originalText;
        return h(Text as any, null, displayText);
    }

    if (typeof node === 'number' || typeof node === 'boolean') {
        return node;
    }

    const vnode = node as VNode;

    if (vnode.type === Text) {
        const originalText = String(vnode.children).trim();
        const displayText = shouldTruncate
            ? useTruncateString(originalText, limit)
            : originalText;
        return h(Text as any, vnode.props as VNodeProps | null, displayText);
    }

    if (Array.isArray(vnode.children)) {
        const processedChildren = vnode.children.map(child =>
            processVNode(child as any, shouldTruncate, limit)
        );
        return h(vnode.type as any, vnode.props as VNodeProps | null, processedChildren);
    }

    if (typeof vnode.children === 'string') {
        const originalText = vnode.children.trim();
        const displayText = shouldTruncate
            ? useTruncateString(originalText, limit)
            : originalText;
        return h(vnode.type as any, vnode.props as VNodeProps | null, displayText);
    }

    return vnode;
}

export default defineComponent({
    name: 'VYCTruncate',
    props: {
        limit: Number,
    },
    setup(props, { slots }) {
        const isTruncated = ref(true);

        const shouldTruncate = computed(() => {
            if (!props.limit) return false;
            return isTruncated.value;
        });

        const toggleOpen = () => {
            isTruncated.value = false; // Remove the limit
        };

        const toggleClose = () => {
            isTruncated.value = true; // Add the limit
        };

        return () => {
            const defaultSlotNodes = slots.default ? slots.default() : [];
            const openSlotNodes = slots.open ? slots.open() : [];
            const closeSlotNodes = slots.close ? slots.close() : [];

            if (!props.limit || !defaultSlotNodes.length) {
                const mainContentDiv = h('div', defaultSlotNodes);
                return h('div', [mainContentDiv]);
            }

            const processedNodes = defaultSlotNodes.map(node =>
                processVNode(node, shouldTruncate.value, props.limit!)
            );

            const toggleSlotContent = isTruncated.value
                ? h('div', {
                    onClick: toggleOpen,
                }, openSlotNodes)
                : h('div', {
                    onClick: toggleClose,
                }, closeSlotNodes);

            return h('div', [processedNodes, toggleSlotContent]);
        };
    }
});
</script>
