<template>
  <div class="form__contact">
    <form @submit.prevent="handleSubmit" class="form">
      <h3 class="mb-large">Contact Me</h3>
      <input type="text" v-model="name" placeholder="name" />
      <input type="email" placeholder="E-mail" v-model="email" />
      <textarea
        name="message"
        placeholder="Type a message"
        v-model="message"
      ></textarea>
      <button class="button button__regular">Send message</button>
      <p v-if="error" class="error">{{ error }}</p>
      <div class="form__contact-links">
        <ContactButton />
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { addDoc, collection } from "firebase/firestore";
import { db, timestamp } from "@/firebase/config";
import ContactButton from "../components/ContactButton.vue";

export default {
  components: { ContactButton },
  setup() {
    const name = ref("");
    const email = ref("");
    const message = ref("");
    const error = ref(null);

    const handleSubmit = async () => {
      if (!name.value || !email.value || !message.value) {
        error.value = "Please fill out all fields";
        return;
      }
      error.value = null;
      const data = {
        name: name.value,
        email: email.value,
        message: message.value,
        createdAt: timestamp(),
        read: false,
      };
      try {
        const res = await addDoc(collection(db, "messages"), data);
      } catch (err) {
        console.log(err.message);
        error.value = "Failed to send message";
      }
    };

    return { name, email, message, error, handleSubmit };
  },
};
</script>

<style>
</style>