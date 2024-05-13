<template>
  <div class="todo">
    <div class="todo__book">
      <div class="todo__page">
        <h2 class="header">{{ user }}'s Todo List</h2>
        <ShowTodos />
      </div>
      <div class="todo__page">
        <h2 class="header">Add task</h2>
        <TodoForm />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import TodoForm from "@/components/todo/TodoForm.vue";
import ShowTodos from "@/components/todo/ShowTodos.vue";
export default {
  components: {
    TodoForm,
    ShowTodos,
  },
  setup() {
    const user = ref("Test User");
    return { user };
  },
};
</script>

<style>
</style>