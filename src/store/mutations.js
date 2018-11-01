export default {
  ADD_DECLARATIONS(state, payload) {
    state.declarations.push(payload.declaration)
  },
  DELETE_DECLARATIONS(state) {
    state.declarations.length = 0
  }
}
