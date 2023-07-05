import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

import VueDOMPurifyHTML from 'vue-dompurify-html'

const app = createApp(App)

const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

app.use(router)
app.use(pinia)
app.use(VueDOMPurifyHTML)
app.mount('#app')
