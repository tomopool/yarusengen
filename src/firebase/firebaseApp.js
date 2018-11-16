
import Firebase from 'firebase'


const config = {
  apiKey: "AIzaSyBLi-KCY4iL11RYOVjPr70jU7UPsWBuKLU",
  authDomain: "yarusengen.firebaseapp.com",
  databaseURL: "https://yarusengen.firebaseio.com",
  projectId: "yarusengen",
  storageBucket: "yarusengen.appspot.com",
  messagingSenderId: "76605483511"
}
const firebase = Firebase.initializeApp(config)

export default {
  firebase() {
    return firebase
  }
}