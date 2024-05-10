<template>
  <div class="crosses__score">
    <div class="crosses__score-box">
      <p class="crosses__score-player">{{ players[0] }}</p>
      <div class="crosses__score-scores">{{ score[0] }}</div>
    </div>
    <span class="crosses__score-divider">|</span>
    <div class="crosses__score-box">
      <p class="crosses__score-player">{{ players[1] }}</p>

      <div class="crosses__score-scores">{{ score[1] }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: { score: Array, players: Array },
};
</script>

<style>
</style>