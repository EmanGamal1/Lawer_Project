// import './assets/main.css'
import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@fortawesome/fontawesome-free/css/all.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEye)
library.add(faFacebook, faTwitter, faLinkedin)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')