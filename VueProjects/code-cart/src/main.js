import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/css/bootstrap.css'

// 导入axios
import axios from 'axios'
axios.defaults.baseURL = 'https://www.escook.cn'

const app = createApp(App)
app.config.globalProperties.$http = axios

app.mount('#app')
