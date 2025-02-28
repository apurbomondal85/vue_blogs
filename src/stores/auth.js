import { defineStore } from "pinia";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
  }),
  actions: {
    async login(email, password) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        this.user = userCredential.user;
      } catch (error) {
        console.error("Login Error:", error.message);
      }
    },
    async logout() {
      await signOut(auth);
      this.user = null;
    },
  },
});
