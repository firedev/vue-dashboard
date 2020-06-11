import { firebase } from '@firebase/app'
import '@firebase/firestore'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDcS8rf4HV3DJsWG33yV-GCqUqTnMeonlo',
  authDomain: 'vue-dashboard-978d5.firebaseapp.com',
  databaseURL: 'https://vue-dashboard-978d5.firebaseio.com',
  projectId: 'vue-dashboard-978d5',
  storageBucket: 'vue-dashboard-978d5.appspot.com',
  messagingSenderId: '300110423111',
  appId: '1:300110423111:web:0fd377b9a3126a7725fd62',
  measurementId: 'G-NB73X14BLP',
})

export const db = firebaseApp.firestore()
