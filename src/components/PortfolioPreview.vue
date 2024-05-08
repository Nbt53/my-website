<template>
  <div class="portfolio__preview">
    <div class="portfolio__preview-content">
      <h2 class="mb-medium portfolio__preview-title">{{ document.title }}</h2>
      <p class="portfolio__preview-description">
        {{ document.description[0] }}
      </p>
      <div class="portfolio__preview-tech">
        <div v-for="tech in document.technologies" :key="tech.index">
          <p class="form__list-item mb-small">{{ tech }}</p>
        </div>
      </div>
    </div>
    <div class="portfolio__preview-imageContainer">
      <img
        class="portfolio__preview-image"
        :src="document.images[0]"
        alt="Portfolio Image"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    document,
  },
  setup() {
    return {};
  },
};
</script>

<style>
</style>