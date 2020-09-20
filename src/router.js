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
        {
            path: '/sorttable',
            name: 'SortTable',
            component: () => import('./SortTable.vue')
        },
        {
            path: '/dragtreetable',
            name: 'DragTreeTable',
            component: () => import('./DragTreeTable.vue')
        },
        {
            path: '/select',
            name: 'Select',
            component: () => import('./Select.vue')
        },
        {
            path: '/word',
            name: 'word',
            component: () => import('./exportWord.vue')
        },
        {
            path: '/socket',
            name: 'socket',
            component: () => import('./socket.vue')
        },
    ]
})
// 导出路由
export default router;
