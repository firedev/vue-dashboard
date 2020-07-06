import { firebase } from '@firebase/app'
import { FirebaseApp } from '@firebase/app-types'
import '@firebase/firestore'

type LocalFirebaseApp = FirebaseApp & {
  initializeApp: () => void
  firestore: () => () => void
}

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDcS8rf4HV3DJsWG33yV-GCqUqTnMeonlo',
  appId: '1:300110423111:web:0fd377b9a3126a7725fd62',
  authDomain: 'vue-dashboard-978d5.firebaseapp.com',
  databaseURL: 'https://vue-dashboard-978d5.firebaseio.com',
  measurementId: 'G-NB73X14BLP',
  messagingSenderId: '300110423111',
  projectId: 'vue-dashboard-978d5',
  storageBucket: 'vue-dashboard-978d5.appspot.com',
}) as LocalFirebaseApp

export const db = firebaseApp.firestore()
