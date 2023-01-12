import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.sass'
import Vuetify from './plugins/vuetify'

createApp(App).use(Vuetify).mount('#app')