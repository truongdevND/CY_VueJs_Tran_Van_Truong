
import './assets/css/main.css';


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {highlightDirective} from "@/views/exercise15/vdirective/vhighlight.js";
import {zoomDirective} from "@/views/exercise15/vdirective/vzoom.js";

const app = createApp(App)

app.directive('highlight', highlightDirective)
app.directive('zoom', zoomDirective)


app.use(createPinia())
app.use(router)

app.mount('#app')
