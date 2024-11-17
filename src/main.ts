// Key Dependencies
import { createApp, h } from "vue";
import "./assets/index.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from 'pinia'

// Exceptionless
import { Exceptionless } from "@exceptionless/browser";

await Exceptionless.startup((c: any) => {
  c.apiKey = process.env.VUE_APP_EXCEPTIONLESS_API_KEY;
  c.serverUrl = process.env.VUE_APP_EXCEPTIONLESS_SERVER_URL;
});

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
