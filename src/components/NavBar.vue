<template>
  <nav class="nav">
    <div class="nav__container">
      <div class="nav__item">
        <router-link to="/" class="nav__link">Home</router-link>
      </div>

      <div class="nav__item">
        <router-link to="/about" class="nav__link">About</router-link>
      </div>

      <div class="nav__item">
        <router-link to="/portfolio" class="nav__link">Portfolio</router-link>
      </div>

      <div class="nav__item">
        <router-link to="/contact" class="nav__link">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>