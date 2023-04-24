import { ref } from "vue";
import { defineStore } from "pinia";

interface User {
  email: string;
  password: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as User | null,
    signedIn: ref(false),
    error: null as string | null,
  }),

  actions: {
    signIn(email: string, password: string) {
      if (email === "test@gmail.com" && password === "test") {
        this.signedIn = true;
        this.user = { email, password };
        this.error = null;
      } else {
        this.signedIn = false;
        this.user = null;
        this.error = "Incorrect email or password";
      }
    },

    signOut() {
      this.signedIn = false;
      this.user = null;
      this.error = null;
    },
  },
});
