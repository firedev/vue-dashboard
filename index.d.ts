declare module 'vue-firestore'

declare module '@firebase/app' {
  type Firebase = {
    firebase: {
      initializeApp: () => { collection: () => void }
    }
  }
  export = Firebase
}

declare module 'gotrue-js' {
  type recoverSession = () => void
}
