<template>
  <div class="error" v-if="error">{{ error }}</div>
  <div v-for="item in portfolios" :key="item.key">
    <p>{{ item.title }}</p>
  </div>
</template>

<script>
import getCollection from "@/composables/getCollection";
export default {
  setup() {
    const { error, documents: portfolios } = getCollection("portfolio");
    console.log(portfolios);
    return {
      portfolios,
      error,
    };
  },
};
</script>

<style>
</style>