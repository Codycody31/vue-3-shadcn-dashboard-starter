import { defineStore } from "pinia";

export default defineStore("user", {
  state: () => ({
    user: {
      name: "John",
      email: "demo@gmail.com",
    },
    token: null,
  }),
  getters: {
    getUser(state) {
      return state.user;
    },
    getToken(state) {
      return state.token;
    },
  },
});
