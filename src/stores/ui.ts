import { defineStore } from "pinia";

export default defineStore("ui", {
  state: () => ({
    commandPalette: {
        isOpen: false,
    }
  }),
});
