import Firebase from 'firebase'
import 'firebase/firestore'



// const firebaseApp = Firebase.initializeApp(config, 'exercise-vue')
const firebaseApp = Firebase.initializeApp(config, 'exercise-vue')
const firestore = firebaseApp.firestore()
firestore.settings({ timestampsInSnapshots: true })

export default firestore
