<template>
  <div class="tech">
    <div class="tech__icons">
      <div v-for="icon in icons" :key="icon.id" class="tech__icon">
        <div v-html="icon.SVG"></div>
        <p>{{ icon.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import tech from "../assets/techIcons.js";
export default {
  setup() {
    const icons = ref(tech);

    return { icons };
  },
};
</script>

<style>

</style>