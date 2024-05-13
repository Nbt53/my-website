<template>
  <div class="portfolio__preview">
    <div class="portfolio__preview-content">
      <h2 class="mb-medium portfolio__preview-title">{{ document.title }}</h2>
      <h3>{{ document.category }}</h3>
      <p class="portfolio__preview-description">
        {{ document.description[0] }}
      </p>
      <div class="portfolio__preview-tech">
        <div v-for="tech in document.technologies" :key="tech.index">
          <p class="form__list-item mb-small">{{ tech }}</p>
        </div>
      </div>
      <div class="portfolio__preview-links">
        <a :href="document.viewUrl" target="blank" class="fw-unset">
          <button class="button button__portfolio">View Website</button>
        </a>
        <a :href="document.gitUrl" target="blank" class="fw-unset">
          <button class="button button__portfolio">View Code</button>
        </a>
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
    document: Object,
  },
  setup() {
    return {};
  },
};
</script>

<style>
</style>