<template>
  <div class="start-header">
    <greeter-component />
  </div>
  <div class="start-body">
    <weather-widget />
    <news-feed />
  </div>
</template>

<script>
import GreeterComponent from "@/components/homepage/GreeterComponent.vue";
import WeatherWidget from "@/components/homepage/WeatherWidget.vue";
import NewsFeed from '@/components/homepage/NewsFeed.vue';
export default {
  components: {
    GreeterComponent,
    WeatherWidget,
    NewsFeed,
    
  },
  setup() {
    return {};
  },
};
</script>

<style>
.start-body{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
}
</style>