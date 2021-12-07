<template>
  <ul>
    <li
      v-for="route in routes"
      :key="route.routeName"
      @click="toPage(route.routeName)"
    >{{ route.name }}</li>
  </ul>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const routes = ref([
  { name: 'Container Demo', routeName: 'demo-container' },
]);

const router = useRouter();

function toPage(routeName: string) {
  router.push({ name: routeName });
}
</script>
