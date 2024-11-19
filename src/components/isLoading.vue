<template>
  <div class="loading">
    <PixelSpinner
      :animation-duration="2000"
      :pixel-size="50"
      :color="spinnerColor"
    />
  </div>
</template>

<script>
import { PixelSpinner } from 'epic-spinners';

export default {
    components: { PixelSpinner },
  setup() {
    const spinnerColor = "#ff0000";
    return { spinnerColor };
  },
};
</script>

<style>
</style>