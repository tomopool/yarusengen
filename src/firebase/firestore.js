import Firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyBLi-KCY4iL11RYOVjPr70jU7UPsWBuKLU",
  authDomain: "yarusengen.firebaseapp.com",
  databaseURL: "https://yarusengen.firebaseio.com",
  projectId: "yarusengen",
  storageBucket: "yarusengen.appspot.com",
  messagingSenderId: "76605483511"
}

// const firebaseApp = Firebase.initializeApp(config, 'exercise-vue')
const firebaseApp = Firebase.initializeApp(config, 'exercise-vue')
const firestore = firebaseApp.firestore()
firestore.settings({ timestampsInSnapshots: true })

export default firestore
