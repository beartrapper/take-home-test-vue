<script setup lang="ts">
import { reactive } from "vue";
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router';

const router = useRouter();

// helper for ease
function useField() {
  return reactive({
    value: "",
    error: ""
  });
}

//delcaring fields
const username = useField();
const password = useField();


//on submit
async function handleSubmit() {
  await useAuthStore().signIn(username.value, password.value);

  if (useAuthStore().signedIn) {
    router.push({ name: 'home' });
  } else {
    username.error = "username might be incorrect";
    password.error = "password might be incorrect";
  }

}


//onchange
function handleChange(_type: string, e: any) {


  if (_type === "username") {
    username.error = "";
    username.value = e;
  } else if (_type === "password") {
    password.value = e;
    password.error = "";

  }
}

</script>

<template>
  <div class="main-contiainer">
  <nord-card padding="1" >
    <h2 class="sub-container" slot="header">Sign in</h2>
    <form action="#" @submit.prevent="handleSubmit" class="sub-container">
      <nord-stack>
        <nord-input
          label="Email"
          expand
          type="email"
          name="username"
          placeholder="user@example.com"
          :error="username.error"
          v-model="username.value"
          @input="handleChange('username', $event.target.value)"
        ></nord-input>

        <div class="password">
          <nord-input
            label="Password"
            expand
            type="password"
            name="password"
            placeholder="••••••••"
            :error="password.error"
            v-model="password.value"
            @input="handleChange('password', $event.target.value)"

          >
          </nord-input>
          <a href="#">Forgot password?</a>
        </div>

        <nord-button type="submit" expand variant="primary">
          Sign in
        </nord-button>
      </nord-stack>
    </form>
  </nord-card>

  <nord-card class="n-align-center">
    New User? <a href="#">Create an account</a>.
  </nord-card>
</div>
</template>

<style scoped>
.password {
  position: relative;
}

.password a {
  text-decoration: none;
  font-size: var(--n-font-size-s);
  position: absolute;
  inset-block-start: 0;
  inset-inline-end: 0;
}


.main-contiainer {
  padding-left: 35vw;
  padding-right: 35vw;
  padding-top: 20vh;
}

.sub-container {
  padding: 1vw;
}
</style>