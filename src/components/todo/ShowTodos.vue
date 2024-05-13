<template>
  <div class="todo__show">
    <div class="todo__item" v-for="todo in documents" :key="todo.index">
      <ToDo :item="todo" :key="todo.id" />
    </div>
    <p class="error" v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import getCollection from "@/composables/getCollection";
import ToDo from "@/components/todo/ToDo.vue";
export default {
  components: {
    ToDo,
  },
  setup() {
    const { documents, error } = getCollection("todos", "createdAt");
    return { documents, error };
  },
};
</script>

<style>
</style>