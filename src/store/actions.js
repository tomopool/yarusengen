import api from './api.js'
import firebaseApp from '@/firebase/firebaseApp.js'
import 'firebase/firestore'

const db = firebaseApp.firebase().firestore()
db.settings({ timestampsInSnapshots: true })
const declarationsRefs = db.collection('declarations')

export default {

  getDeclarations({commit}) {
    declarationsRefs.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        const declaration = {
          id: doc.id,
          after_time: data.after_time,
          create_date: data.create_date,
          declaration: data.declaration,
          specified_time: data.specified_time,
          yaru_type: data.yaru_type
        }
        commit('ADD_DECLARATIONS', {
          declaration
        })
      })
    })
  },
  clearDeclarations({commit}) {
    commit('DELETE_DECLARATIONS')
  },
  doneDeclaration({dispatch}, payload) {
    declarationsRefs.doc(payload.documentId).delete()
    .then(() => {
      dispatch('clearDeclarations')
      dispatch('getDeclarations')
    }).catch(err => {
      console.error('Error adding document: ', err)
    })
  },
  async addDeclaration({}, payload) {
    const declaration = {
      after_time: payload.after_time,
      create_date: new Date(Date.now()),
      declaration: payload.declaration,
      specified_time: payload.specified_time,
      yaru_type: payload.yaru_type
    }
    await declarationsRefs.add(declaration)
      .then(() => {
      })
      .catch(err => {
        console.error('Error adding document: ', err)
      })
  }


}