<template>
  <form class="form__todo" @submit.prevent="handleSubmit">
    <input type="text" placeholder="Task" v-model="form.task" />
    <textarea
      v-model="form.description"
      placeholder="Add a brief description"
    ></textarea>
    <select v-model="form.importance">
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
    <select v-model="form.TimeRanges">
      <option value="< 1 hour">"&lt; 1 hour"</option>
      <option value="1-3 hours">1-3 hours</option>
      <option value="3-5 hours">3-5 hours</option>
      <option value="5-8 hours">5-8 hours</option>
      <option value="8-12 hours">8-13 hours</option>
      <option value="> 12 hours">&gt; 12 hours"</option>
    </select>
    <div class="form__todo-div">
      <p class="body">Completed by:</p>
      <input type="date" v-model="form.completedBy" />
    </div>
    <p class="error" v-if="error">Error Uploading: {{ error }}</p>

    <button>Add Task</button>
  </form>
</template>

<script>
import useUploadTodos from "@/composables/todo/useUploadTodos";
import { timestamp } from "@/firebase/config";
import { ref } from "vue";
export default {
  setup() {
    const form = ref({
      task: "",
      description: "",
      importance: "low",
      TimeRanges: "< 1 hour",
      completedBy: "",
      completed: false,
      createdAt: timestamp(),
      user: "Test User",
    });
    const { uploadTodos, error } = useUploadTodos();
    const handleSubmit = () => {
      try {
        uploadTodos(form);
      } catch (err) {
        console.log(err.message);
      }
    };

    return { form, error, handleSubmit };
  },
};
</script>

<style>
</style>