<template>
    <div class="widget">
        <div v-if="loading">
    <is-loading />
    <p class="loading">Getting Weather</p>
  </div>
  <div v-else>
    <div class="weather-widget">
      <h3>Weather</h3>
      <p>
        in {{ location }} it's currently
        {{ weather.main.temp }}&deg;
      </p>
      <p>High: {{ weather.main.temp_max }}&deg;</p>
      <p>Low: {{ weather.main.temp_min }}&deg;</p>
      <p>{{ weather.weather[0].description }}</p>
    </div>
  </div> 
    </div>
 
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
import isLoading from "../isLoading.vue";

export default {
  components: { isLoading },
  setup() {
    const api = "521e80f3f35814f48dfafd04232e7ea7";
    const location = ref("");
    const weather = ref(null);
    const loading = ref(true);

    const getCurrentPosition = () => {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    };

    onMounted(async () => {
      console.log("Component mounted, checking geolocation...");
      if (navigator.geolocation) {
        console.log("Geolocation supported, getting current position...");
        try {
          const position = await getCurrentPosition();
          console.log("Position obtained:", position);
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const apiCall = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=metric`;
          console.log("API call:", apiCall);
          const response = await axios.get(apiCall);
          console.log("API response:", response);
          location.value = response.data.name;
          weather.value = response.data;
        } catch (error) {
          console.error("Error getting geolocation or fetching weather data:", error);
        } finally {
          loading.value = false;
        }
      } else {
        console.error("Geolocation is not supported by this browser.");
        loading.value = false;
      }
    });

    return { location, weather, loading };
  },
};
</script>

<style>
.widget p{
    text-transform: capitalize;
}
</style>