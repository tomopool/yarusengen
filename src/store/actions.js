import firestore from '@/firebase/firestore'
import api from './api.js'

const declarationsRefs = firestore.collection('declarations')

export default {

  getDeclarations({commit}) {
    declarationsRefs.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const declaration = {
          id: doc.id,
          after_time: doc.data().after_time,
          create_date: api.formatDateTimeFromTimeStamp(doc.data().create_date, 'yyyy/MM/dd HH:mm:ss'),
          declaration: doc.data().declaration,
          specified_time: api.formatDateTimeFromTimeStamp(doc.data().specified_time, 'yyyy/MM/dd HH:mm:ss'),
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
    }).catch((error) => {
      debugger
    })
  },
  async addDeclaration({}, payload) {
    const declaration = {
      after_time: payload.after_time,
      create_date: new Date(Date.now()),
      declaration: payload.declaration,
      specified_time: payload.specified_time
    }
    await declarationsRefs.add(declaration)
      .then(() => {
      })
      .catch(err => {
        console.error('Error adding document: ', err)
      })
  }


}