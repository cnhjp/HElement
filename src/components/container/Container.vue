<style lang="scss">
@include b(container) {
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0;
    @include when(vertical) {
        flex-direction: column;
    }
}
</style>

<template>
    <section class="h-container" :class="{ 'is-vertical': isVertical }">
        <slot></slot>
    </section>
</template>

<script lang="ts">
export default {
    name: 'HContainer',
}
</script>

<script lang="ts" setup>
import { useSlots, computed, VNode, Component } from 'vue';
interface Props {
    direction?: string;
}

const props = defineProps<Props>();

const slots = useSlots();

const isVertical = computed(() => {
    if (slots && slots.default) {
        return slots.default().some((vn: VNode) => {
            const tag = (vn.type as Component).name;
            return tag === 'HHeader' || tag === 'HFooter';
        })
    } else {
        return props.direction === 'vertical';
    }
})

</script>