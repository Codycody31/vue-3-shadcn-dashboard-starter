// Key Dependencies
import { createApp, h } from "vue";
import "./assets/index.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp({
  data() {
    return {
      appName: "Next Shadcn",
    };
  },
  render: () => h(App),
});

app.use(pinia)
app.use(router);
app.mount("#app");
