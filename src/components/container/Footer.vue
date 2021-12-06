<style lang="scss">
@include b(footer) {
    padding: $--footer-padding;
    box-sizing: border-box;
    flex-shrink: 0;
}
</style>

<template>
    <footer class="h-footer" :style="{ height: height }">
        <slot></slot>
    </footer>
</template>

<script lang="ts">
export default {
    name: 'HFooter',
}
</script>

<script lang="ts" setup>
import { withDefaults } from 'vue';

interface Props {
    height?: string;
}

withDefaults(defineProps<Props>(), {
    height: '60px'
})
</script>