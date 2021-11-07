import { createApp } from 'vue'
import App from './App.vue'

const rootEl = document.createElement('div');
rootEl.id = "widget"

document.querySelector('body').appendChild(rootEl)

console.log('okssss')
window.WIDGET_KEY

//createApp(App).mount({ element: rootEl })
createApp(App).mount("#widget")
