import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 将路径注入到Router中
const router = new Router({
    'mode': 'history',
    'routes':[
        {
            path: '/',
            name: 'CodeMirror',
            component: () => import('./CodeMirror.vue')
        },
        {
            path: '/table',
            name: 'SelectTable',
            component: () => import('./SelectTable.vue')
        },
    ]
})
// 导出路由
export default router;