import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router'
import 'element-plus/theme-chalk/el-loading.css';

import 'element-plus/theme-chalk/el-message-box.css';

import 'element-plus/theme-chalk/el-message.css';

import '@/style/index.css'


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router)
app.use(createPinia())
app.mount('#app')


