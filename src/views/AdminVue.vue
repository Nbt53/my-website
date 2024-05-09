<template>
  <div class="admin">
    <div v-if="user.user.value == null">
      <form @submit.prevent="handleLogin" class="form">
        <h3>Admin Login</h3>
        <input type="email" placeholder="Email" v-model="email" />
        <input type="password" placeholder="Password" v-model="password" />
        <button class="button button__regular">Sign in</button>
        <p v-if="error">{{ error.user }}</p>
      </form>
    </div>

    <div v-else>
      <form @submit.prevent="handleLogout" class="logout">
        <button class="button button__regular">Logout</button>
      </form>

      <CreatePortfolio />
      <MessageRender />
    </div>
  </div>
</template>

<script>
import useLogin from "@/composables/useLogin";
import useLogout from "@/composables/useLogout";
import getUser from "@/composables/getUser";
import { ref } from "vue";
import CreatePortfolio from "@/components/CreatePortfolio.vue";
import MessageRender from "@/components/MessageRender.vue";
export default {
  components: {
    CreatePortfolio,
    MessageRender,
  },
  setup() {
    const email = ref("");
    const password = ref("");
    const user = getUser();
    const { error, login } = useLogin();
    const { logout } = useLogout();

    const handleLogin = async () => {
      await login(email.value, password.value);
    };
    const handleLogout = async () => {
      await logout();
    };

    return { email, password, user, error, handleLogin, handleLogout };
  },
};
</script>

<style>
</style>