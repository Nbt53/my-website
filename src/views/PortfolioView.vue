<template>
  <div class="error" v-if="error">{{ error }}</div>
  <div v-for="item in portfolios" :key="item.key">
    <PortfolioPreview :document="item" />
  </div>
</template>

<script>
import getCollection from "@/composables/getCollection";
import PortfolioPreview from "@/components/PortfolioPreview.vue";
export default {
  components: {
    PortfolioPreview,
  },
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