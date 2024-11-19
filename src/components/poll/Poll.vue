<template>
  <h2 class="mb-large">{{ doc.question }}</h2>
  <div v-for="(opt, index) in doc.options" :key="index">
    <div class="poll__option" @click="addVote(opt, opt.votes)">
      <p class="poll__option-text">{{ opt.option }}</p>
      <p>{{ opt.votes }}</p>
    </div>
  </div>
</template>

<script>
import useEditDoc from "@/composables/poll/useEditDoc";

export default {
  props: {
    doc: Object,
  },

  setup(props, { emit }) {
    const { editDoc } = useEditDoc();

    const addVote = (choice, votes) => {
      const option = props.doc.options.filter(
        (opt) => opt.option === choice.option
      );
      option[0].votes = votes + 1;
      emit("addVote", option[0].votes);
      const newData = props.doc;
      editDoc(props.doc.id, newData);
    };

    return { addVote };
  },
};
</script>

<style>
</style>