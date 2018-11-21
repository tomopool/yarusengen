import 'firebaseui'
import firebaseApp from '@/firebase/firebaseApp.js'
import router from '../router'

const fireAuth = firebaseApp.firebase().auth()

export default {
  createUserWithEmailAndPassword(email, password) {
    fireAuth.createUserWithEmailAndPassword(email, password)
      .then(result => {
        const newUser = result.user
        newUser.sendEmailVerification({
          url: 'http://' + window.location.host + '/signin'
        })
      }).catch(error => {
        debugger
      })
  },
  async signInWithEmailAndPassword(email, password) {
    try {
      await fireAuth.signInWithEmailAndPassword(email, password)
    } catch (error) {
      return {
        error: true,
        message: error.message
      }
    }

    return {
      error: false
    }
  },
  signOut() {
    fireAuth.signOut().then(() => {
      router.push('/signin')
    })
  },
  reSendVerifyMail() {
    getCurrentUser().sendEmailVerification({
      url: 'http://' + window.location.host + '/signin'
    })
  },
  getCurrentUser() {
    return fireAuth.currentUser
  }
}
