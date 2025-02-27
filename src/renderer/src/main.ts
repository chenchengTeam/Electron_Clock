//公共样式
import '@renderer/design/index.scss'

import { createApp } from 'vue'

import App from '@renderer/views/App.vue'

// 引入自定义插件对象：注册整个项目的全局组件
import globalComponents from '@renderer/components/index'

import 'virtual:svg-icons-register'

const app = createApp(App)

app.use(globalComponents)

app.mount('#app')
