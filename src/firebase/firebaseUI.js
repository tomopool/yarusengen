import 'firebaseui'
import firebaseApp from '@/firebase/firebaseApp.js'

const fireAuth = firebaseApp.firebase().auth()

export default {
  createUserWithEmailAndPassword(email, password) {
    fireAuth.createUserWithEmailAndPassword(email, password)
      .then(user => {
        // TODO undefinedになってた user.email
        console.log('auth create !!' + user.email)
      })
  },
  signInWithEmailAndPassword(email, password) {
    fireAuth.signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log('auth signin !!')
      })
  },
  signOut() {
    fireAuth.signOut().then(() => {
      this.$router.push('/signin')
    })
  }
}
