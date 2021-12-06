<template>
    <h-container>
        <h-header>header</h-header>
        <h-main>main</h-main>
        <h-footer>footer</h-footer>
    </h-container>

    <h-container style="margin-top:50px;">
        <h-header>header</h-header>
        <h-container>
            <h-aside width="100px">aside</h-aside>
            <h-main>main</h-main>
        </h-container>
        <h-footer>footer</h-footer>
    </h-container>

    <h-container style="margin-top:50px;">
        <h-aside>aside</h-aside>
        <h-container>
            <h-header>header</h-header>
            <h-main>main</h-main>
            <h-footer>footer</h-footer>
        </h-container>
    </h-container>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
:deep(.h-container) {
    background-color: antiquewhite;
}
:deep(.h-header) {
    background-color: bisque;
}
:deep(.h-main) {
    height: 300px;
    background-color: cadetblue;
}
:deep(.h-footer) {
    background-color: coral;
}
:deep(.h-aside) {
    background-color: cyan;
}
</style>
