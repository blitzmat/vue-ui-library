import { ref, computed } from 'vue';

export function useTruncateString(text: string, maxLength: number): string {

    const inputText = ref(text);
    const maxLen = ref(maxLength);

    const truncatedText = computed(() => {
        if (!inputText.value || inputText.value.length <= maxLen.value) {
            return inputText.value;
        }

        if (maxLen.value <= 0) {
            return '';
        }

        let truncated = inputText.value.substring(0, maxLen.value);

        // Find the last space in the truncated string
        const lastSpaceIndex = truncated.lastIndexOf(' ');

        // If a space is found, truncate to that space
        if (lastSpaceIndex !== -1) {
            truncated = truncated.substring(0, lastSpaceIndex);
        }

        return truncated + '...';
    });

    return truncatedText.value
}
