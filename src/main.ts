import { createApp } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import EXEImg from './custom-components/EXEImg/index.vue'
import EXEButton from './custom-components/EXEButton/index.vue'
import App from './App.vue'
import { schemaComponents } from './components/props-components/index'
import './scss/reset.scss'

const app = createApp(App)
for (const key in schemaComponents) {
    app.component(key, schemaComponents[key])
}
app.component('draggable', VueDraggableNext)
app.component('EXEImg', EXEImg)
app.component('EXEButton', EXEButton)
app.use(ElementPlus)
app.mount('#app')
