import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import firebase from 'firebase'
// import HelloWorld from '../components/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../components/Register.vue')
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "register" */ '../components/Login.vue'),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/register/business',
    name: 'RegisterBusiness',
    component: () => import(/* webpackChunkName: "register" */ '../components/RegisterBusiness.vue')
    // meta: {
    //   requiresGuest: true
    // }
  },
  {
    path: '/register/rider',
    name: 'RegisterRider',
    component: () => import(/* webpackChunkName: "register" */ '../components/RegisterRider.vue')
    // meta: {
    //   requiresGuest: true
    // }
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import(/* webpackChunkName: "register" */ '../components/ForgotPassword.vue')
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: '/homepage',
    name: 'HomePage',
    component: () => import(/* webpackChunkName: "register" */ '../views/Home.vue'),
    // meta: {
    //   requiresAuth: true
    // }
    children: [
      {
        path: 'payment',
        name: 'Paystack',
        component: () => import(/* webpackChunkName: "register" */ '../components/Paystack.vue')
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "register" */ '../components/Dashboard/Dashboard.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'profile',
        name: 'Profile',
        component: () => import(/* webpackChunkName: "register" */ '../components/Dashboard/Profile.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'requestRider',
        name: 'RequestRider',
        component: () => import(/* webpackChunkName: "register" */ '../components/RequestRiderModal.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'update-profile',
        name: 'Updateprofile',
        component: () => import(/* webpackChunkName: "register" */ '../components/Dashboard/Updateprofile.vue'),
        meta: {
          requiresAuth: true
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // const token = localStorage.getItem('token')
  // if (to.name === 'Login' || to.name === 'RegisterBusiness') {
  //   if (token) next('/dashboard')
  // }
  // Check for requiredAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if NOT logged in
    console.log(firebase.auth().currentUser)
    if (!localStorage.getItem('token')) {
      // Go to login
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      // Proceed to the route
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // Check logged in
    if (localStorage.getItem('token')) {
      // Go to login
      next({
        path: 'homepage/dashboard',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      // Proceed to the route
      next()
    }
  } else {
    // Proceed to the route
    next()
  }
})

export default router
