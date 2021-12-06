<style lang="scss">
@include b(aside) {
    overflow: auto;
    box-sizing: border-box;
    flex-shrink: 0;
}
</style>

<template>
    <aside class="h-aside" :style="{ width: width }">
        <slot></slot>
    </aside>
</template>

<script lang="ts">
export default {
    name: 'HAside',
}
</script>

<script lang="ts" setup>
import { withDefaults } from 'vue';

interface Props {
    width?: string;
}

withDefaults(defineProps<Props>(), {
    width: '300px'
})
</script>