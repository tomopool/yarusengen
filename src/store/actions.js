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
          create_date: api.formatDateTime(new Date(doc.data().create_date.seconds * 1000), 'yyyy/MM/dd HH:mm:ss'),
          declaration: doc.data().declaration,
          specified_time: api.formatDateTime(new Date(doc.data().specified_time.seconds * 1000), 'yyyy/MM/dd HH:mm:ss'),
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
  doneDeclaration({commit}, payload) {
    declarationsRefs.doc(payload.documentId).delete().then(() => {
      debugger
    }).catch((error) => {
      debugger
    })
  },
  addDeclaration({ commit }, payload) {
    const declaration = {
      after_time: payload.after_time,
      create_date: Date.now(),
      declaration: payload.declaration,
      specified_time: payload.specified_time
    }
    declarationsRefs.add(declaration)
      .then(doc => {
        debugger
        const declaration = {
          id: doc.id,
          after_time: doc.data().after_time,
          create_date: api.formatDateTime(new Date(doc.data().create_date.seconds * 1000), 'yyyy/MM/dd HH:mm:ss'),
          declaration: doc.data().declaration,
          specified_time: api.formatDateTime(new Date(doc.data().specified_time.seconds * 1000), 'yyyy/MM/dd HH:mm:ss'),
        }
        commit('ADD_DECLARATIONS', {
          declaration
        })
      })
      .catch(err => {
        console.error('Error adding document: ', err)
      })
  }


}