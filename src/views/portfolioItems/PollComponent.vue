<template>
  <div class="poll">
    <div class="poll__new-container poll__section">
      <div class="poll__new-header">
        <h2>New Poll</h2>
        <span
          class="material-symbols-outlined poll__clickable"
          v-if="!viewNewPoll"
          @click="toggleNewPoll"
        >
          expand_content
        </span>
        <span
          class="material-symbols-outlined poll__clickable"
          v-else
          @click="toggleNewPoll"
        >
          collapse_content
        </span>
      </div>
      <div v-if="viewNewPoll">
        <NewPollForm />
      </div>
    </div>
    <div class="poll__section" v-for="poll in documents" :key="poll.index">
      <poll :doc="poll" @addVote="updateVotes" />
      {{ poll.totalVotes }}
    </div>
  </div>

  <p class="error" v-if="error">{{ error }}</p>
</template>

<script>
import NewPollForm from "@/components/poll/NewPollForm.vue";
import { ref } from "vue";
import getCollection from "@/composables/getCollection";
import Poll from "@/components/poll/Poll.vue";

export default {
  components: {
    NewPollForm,
    Poll,
  },
  setup() {
    const viewNewPoll = ref(false);
    const { documents, error } = getCollection("poll", "category");
    const updateVotes = () => {
      documents.value.totalVotes ++;
    };
    const toggleNewPoll = () => {
      viewNewPoll.value = !viewNewPoll.value;
    };
    return { viewNewPoll, toggleNewPoll, documents, error, updateVotes, };
  },
};
</script>

<style>
</style>