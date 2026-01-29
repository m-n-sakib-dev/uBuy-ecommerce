import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";

const pinia = createPinia();

const app = createApp(App);
app.use(router);
app.use(pinia);

app.use(ToastPlugin, {
        position: "bottom-right",
        duration: 3000,
});
app.mount("#app");
