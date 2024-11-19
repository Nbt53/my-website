<template>
  <form class="form poll__form" @submit.prevent="handleSubmit">
    <input type="text" v-model="question" placeholder="Poll Question" />
    <input type="text" v-model="category" placeholder="category" />
    <input
      type="text"
      v-model="option"
      placeholder="option"
      @keydown.enter.prevent="addOption"
    />
    <div v-if="options.length">
      <div v-for="(opt, index) in options" :key="index">
        <p class="form__list-item mb-medium" @click="removeOption">{{ opt }}</p>
      </div>
    </div>
    <button class="button button__regular" type="submit">Create Poll</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useListRemove from "@/composables/useListRemove";
import useUploadPoll from "../../composables/poll/useUploadPoll";
import { timestamp } from "@/firebase/config";
export default {
  setup() {
    const question = ref("");
    const options = ref([]);
    const option = ref("");
    const category = ref("");

    const { ListRemove } = useListRemove();
    const { uploadPoll } = useUploadPoll();

    const addOption = () => {
      options.value.push({ option: option.value, votes: 0 });
      option.value = "";
    };

    const removeOption = (e) => {
      options.value = ListRemove(options, e.target.innerText);
    };

    const handleSubmit = () => {
      uploadPoll({
        question: question.value,
        options: options.value,
        category: category.value,
        createdAt: timestamp(),
        totalVotes: 0,
      });
      question.value = "";
      options.value = [];
    };

    return {
      question,
      options,
      category,
      option,
      addOption,
      removeOption,
      handleSubmit,
    };
  },
};
</script>

<style>
</style>