<template>
  <div class="loading" v-if="loading">
    <is-loading />
  </div>
  <div class="widget" v-else>
    <h3>News Feed</h3>
    <carousel :items-to-show="1" :wrap-around="true" :mouse-drag="true" class="news-carousel">
      <slide v-for="article in articles" :key="article.id">
        <div class="news-article">
          <h4>{{ article.title }}</h4>
          <p class="article">{{ article.description }}</p>
          <a class="article article-link" :href="article.url" target="_blank">Read more</a>
        </div>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import IsLoading from '@/components/isLoading.vue';

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    IsLoading
  },
  setup() {
    const link =
      'https://newsdata.io/api/1/news?apikey=pub_596950b731bcd9af2ab3e4281fb64613dc895&q="manchester%20city"&language=en';
    const articles = ref([]);
    const loading = ref(true);

    onMounted(async () => {
      try {
        const response = await fetch(link);
        const data = await response.json();
        articles.value = data.results;
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        loading.value = false;
      }
    });

    return {
      articles,
      loading
    };
  }
};
</script>

<style scoped>
.widget{
    display: flex;
    flex-direction: column;
}

.news-carousel {
  width: 80%;
  height: 80%;
}

.news-article {
  text-align: center;
}

.article {
  text-align: center;
  font-size: 8px;
}

.article-link {
  color: #007bff;
}
</style>