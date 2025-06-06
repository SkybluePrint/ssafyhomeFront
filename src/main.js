// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { refreshAccessToken } from "./services/auth";

// ✅ Font Awesome 관련 import
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// ✅ 아이콘 등록
library.add(fas, fab)

import "./assets/css/LoginView.css"

async function bootstrap() {
  // 1) 새로고침 시 토큰 갱신
  await refreshAccessToken();

  // 2) Vue 앱 설정 및 마운트
  const app = createApp(App);
  app.component('font-awesome-icon', FontAwesomeIcon);
  app.use(router);
  app.mount("#app");
}

bootstrap();
