export const boardGetters = {
  allBoards (state, getters) {
    return state.boards
  },

  loadedBoard (state) {
    return (id) => {
      return state.boards.find((board) => {
        return board.id === id
      })
    }
  },

  registeredboards (state) {
    return state.registeredboards
  },

  // stor/////////////e: (state, getters) {
  //   re/'

  user (state, getters) {
    return state.user
  },
  loading (state) {
    return state.loading
  },
  error (state) {
    return state.error
  }

}
