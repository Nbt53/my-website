<template>
  <div class="home">
    <div class="home__header">
      <div class="home__header-title">
        <h1>Nicholas</h1>
        <h1>Hargreaves</h1>
      </div>
      <h2>Full Stack Web Developer</h2>
      <h3>Crafting seamless web experiences with cutting-edge technologies</h3>
      <div class="home__contact" v-if="width < 1200">
        <ContactButton />
      </div>
    </div>
    <div class="home__contact" v-if="width > 1200">
      <ContactButton />
    </div>
  </div>

  <TechIconRender />
</template>

<script>
import TechIconRender from "../components/TechIconRender.vue";
import ContactButton from "../components/ContactButton.vue";
import { onMounted, onUnmounted, ref } from "vue";
export default {
  name: "HomeView",
  components: { TechIconRender, ContactButton },
  setup() {
    const width = ref(window.innerWidth);

    const updateWidth = () => {
      width.value = window.innerWidth;
      console.log(width.value);
    };

    onMounted(() => {
      window.addEventListener("resize", updateWidth);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", updateWidth);
    });
    return { width };
  },
};
</script>
