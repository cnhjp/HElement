<style lang="scss">
@include b(header) {
  padding: $--header-padding;
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>

<template>
  <header class="h-header" :style="{ height: height }">
    <slot></slot>
  </header>
</template>

<script lang="ts">
export default {
  name: 'HHeader',
};
</script>

<script lang="ts" setup>
import { withDefaults } from 'vue';
interface Props {
  height?: string,
}

withDefaults(defineProps<Props>(), {
  height: '60px',
});

</script>
