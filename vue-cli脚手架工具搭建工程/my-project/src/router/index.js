import router from 'vue-router'
import Vue from "vue"
import HelloWorld from '../components/HelloWorld.vue'
import HelloEarth from '../components/HelloEarth.vue'

Vue.use(router)
//配置路由
export default new router({
    routes:[{
        name: 'HelloWorld',
        path: '/111',  //指定要跳转的路径
        component: HelloWorld  //指定要跳转的组件
    },{
        name: 'HelloEarth',
        path: '/222',  //指定要跳转的路径
        component: HelloEarth  //指定要跳转的组件
       //指定要跳转的组件
      }
    ]
  })