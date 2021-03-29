// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics'

// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/firestore'

// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
  apiKey: 'AIzaSyBM6JI7_EWrEWqoK02CojPSOtHxoC_E5so',
  authDomain: 'logistics-e3d46.firebaseapp.com',
  projectId: 'logistics-e3d46',
  storageBucket: 'logistics-e3d46.appspot.com',
  messagingSenderId: '217878782560',
  appId: '1:217878782560:web:cb77b024410bfffeac5905',
  measurementId: 'G-DNX5K57X2V'
}
// Initialize Firebase
export default () => {
  firebase.initializeApp(firebaseConfig)
  firebase.analytics()
}
