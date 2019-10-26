import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index.vue'
import home from './home/index'

Vue.use(Router)

export default new Router({ 
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass:"is-active",// 选中的样式
  routes:[
    ...home,
    ...[
      {
        path: '/',
        name: 'index',
        component: index,
        meta: {
          keepAlive: false,
        },
        children:[
          {
            name:"home",
            path:"/",
            component:()=>import("@/views/Home"),
            meta: {
              keepAlive: true
            },
            
          },
          {
              name:"theatre",
              path:"/theatre/theatreList",
              component:()=>import("@/views/Theatre"),
              meta: {
                keepAlive: true
              },
          },
          {
              name:"pj",
              path:"/pj",
              component:()=>import("@/views/pj"),
            
          },
          {
              name:"login",
              path:"/login",
              component:()=>import("@/views/Login"),
              meta: {
                keepAlive: true,
              },
              
          },
        ]
      },
      {
        name:"tindex",
        path:"/theatre/index",
        component:()=>import("../views/TheIndex.vue"),
        meta: {
          keepAlive: false
        },
      },{
        name:"showList",
        path:"/Theatre/showList",
        component:()=>import("../views/ShpwList.vue"),
        meta: {
          keepAlive: false
        },
      },
      {
        name:"details",
        path:"/ticket/:id",
        component:()=>import("../views/Details.vue"),
        meta: {
          keepAlive: false
        },
        
      },
    ]
  ]
  
})
