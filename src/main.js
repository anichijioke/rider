import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import initializeFirebase from './firebase/firebase'
// import '@fortawesome/fontawesome-free/css/all.css'
// import '@fortawesome/fontawesome-free/js/all.js'
// import firebase from 'firebase'
// var firebaseConfig = {
//   apiKey: 'AIzaSyBM6JI7_EWrEWqoK02CojPSOtHxoC_E5so',
//   authDomain: 'logistics-e3d46.firebaseapp.com',
//   projectId: 'logistics-e3d46',
//   storageBucket: 'logistics-e3d46.appspot.com',
//   messagingSenderId: '217878782560',
//   appId: '1:217878782560:web:cb77b024410bfffeac5905',
//   measurementId: 'G-DNX5K57X2V'
// }
// firebase.initializeApp(firebaseConfig)
initializeFirebase()

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
