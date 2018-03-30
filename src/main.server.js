import Vue from 'vue'
import App from './App.vue'

export default context => {
    return new Promise.resolve(
        new Vue({
            render: h => h(App)
        })
    )
}

