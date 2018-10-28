import firestore from '@/firebase/firestore'
import api from './api.js'

const declarationsRefs = firestore.collection('declarations')

export default {

  getDeclarations({commit}) {
    declarationsRefs.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        debugger
        const declaration = {
          id: doc.id,
          after_time: doc.data().after_time,
          create_date: api.formatDate(new Date(doc.data().create_date.seconds * 1000), 'yyyy/MM/dd'),
          declaration: doc.data().declaration,
          specified_time: api.formatDate(new Date(doc.data().specified_time.seconds * 1000), 'yyyy/MM/dd'),
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
  startListener({ commit }) {
    if (this.unsubscribe) {
      console.warn('listener is running. ', this.unsubscribe)
      this.unsubscribe()
      this.unsubscribe = null
    }
    // 3. Firestoreからデータを検索する
    this.unsubscribe = declarationsRefs.orderBy('create_date', 'asc').onSnapshot(querySnapshot => {

      // 6. データが更新されるたびに呼び出される
      querySnapshot.docChanges.forEach(change => {
  debugger
        const declaration = {
          id: change.doc.id,
          after_time: change.doc.data().after_time,
          create_date: new Date(change.doc.data().create_date.seconds),
          declaration: change.doc.data().declaration,
          specified_date: new Date(change.doc.data().specified_dateseconds.seconds),
        }
        commit(MUTATION.ADD_DECLARATIONS, {
          declaration
        })

        // 4. ミューテーションを通してステートを更新する
        // if (change.type === 'added') {
        //   commit('add', payload)
        // } else if (change.type === 'modified') {
        //   commit('set', payload)
        // } else if (change.type === 'removed') {
        //   commit('remove', payload)
        // }
      })
    },
    (error) => {
      console.error(error)
    })
  },
  addDeclaration({ commit }, payload) {
    memosRef.add(payload)
      .then(doc => {
        // Do not mutate vuex store state outside mutation handlers.
      })
      .catch(err => {
        console.error('Error adding document: ', err)
      })
  }


}