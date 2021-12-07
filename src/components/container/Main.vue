<style lang="scss">
@import "../styles/mixin.scss";
@include b(main) {
    display: block;
    flex: 1;
    flex-basis: auto;
    overflow: auto;
    box-sizing: border-box;
    padding: $--main-padding;
}
</style>

<template>
    <main class="h-main">
        <slot></slot>
    </main>
</template>

<script lang="ts">
export default {
    name: 'HMain',
};
</script>
