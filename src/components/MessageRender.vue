<template>
  <div class="messages">
    <h2>Messages</h2>
    <div v-for="message in messages" :key="message.key">
      <div class="message">
        <p class="name">You have a message from {{ message.name }}</p>
        <p class="email">
          you can contact them at
          <a :href="'mailto:' + message.email">{{ message.email }}</a>
        </p>
        <p class="content">{{ message.message }}</p>
        <p class="read" v-if="message.read">read</p>
        <p class="unread" v-else>Unread</p>
        
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "@/composables/getCollection";

export default {
  setup() {
    const { error, documents: messages } = getCollection(
      "messages",
      "createdAt"
    );
    console.log(messages.value);
    console.log(error.value);
    return { messages, error };
  },
};
</script>

<style>
</style>