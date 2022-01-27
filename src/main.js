import { createApp } from 'vue'
import App from '~/App.vue'
import router from '~/routes'
import store from '~/store'
import fetch from '~/plugins/fetch'

const app = createApp(App)
// vue 플러그인 등록
app.use(router)
app.use(store)
app.use(fetch)
app.mount('#app')
