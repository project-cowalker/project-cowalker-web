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
  allDetailView (state, getters) {
    return state.detailboard[0]
  },

  allrecruitView (state, getters) {
    return state.recruits
  },
  allDetailrecruitView (state, getters) {
    return state.recruitDetail
  },
  allgetrecommendproject (state, getters) {
    return state.recommendboards
  },
  allQuestion (state, getters) {
    return state.questions
  },
  registeredboards (state) {
    return state.registeredboards
  },
  allmypageView (state, getters) {
    return state.mypages
  },

  allmypageIntro (state) {
    return state.mypageintros
  }
  ,
  allApplyMember (state, getters) {
    return state.applymembers
  },
  user (state, getters) {
    return state.user
  },
  loading (state) {
    return state.loading
  },
  error (state) {
    return state.error
  },
  token (state) {
    return state.token // 토큰 값 가져오기
  }

}
