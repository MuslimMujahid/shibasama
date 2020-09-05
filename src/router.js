import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Library from './views/Library'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/library',
            name: 'Library',
            component: Library
        }
    ]
})