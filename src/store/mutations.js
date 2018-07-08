import Router from '@/router/index'

export const boardMutations = {
  allBoards (state) {
    console.log('all boards start')
  },
  allBoardsSuccess (state, payload) {
    console.log('all boards success')
    state.boards = payload.result
    console.log(payload.result)
  },
  signUp (state, payload) {
    console.log('')
    // state.user = payload.data
    console.log(state.user) // Object {user_id: "test4@test.com", user_pw: "1"}
  },
  signUpSuccess (state) {
    console.log('signUpFinish')
  },
  signInSuccess (state, payload) {
    state.user = payload // Object {user_id: , user_pw: }
    console.log('signInFinish')
    console.log(state.user)
  },
  tokenSave (state, response) {
    state.token = response.data.token
    // 토큰을 로컬 스토리지에 저장
    localStorage.setItem('token', state.token)
    console.log('토큰값 출력')
    console.log(state.token)
  },
  writeBoards (state, payload) {
    state.boards = payload
  },
  writeSuccess (state) {
    console.log('writeFinish')
  },
  recruitingSuccess (state) {
    console.log('recruitFinish')
  },
  sendFilterSuccess (state) {
    console.log('sendFilterSuccess')
  },
  getDetailViewSuccess (state, payload) {
    state.detailboard = payload.result
    console.log('all getDetailView success')
    console.log(state.detailboard[0].title)
  },
  getRecruitSuccess (state, payload) {
    state.recruits = payload.result
    console.log('all getRecruit success')
    console.log(payload.result)
  },
  getMypageSuccess (state, payload) {
    console.log('all getMypageSuccess')
    state.mypages = payload.data[0]
    console.log(state.mypages)
  },
  setLoading (state, payload) {
    state.loading = payload
  },
  setError (state, payload) {
    state.error = payload
  },
  clearError (state) {
    state.error = null
  },
  logoutSuccess (state) {
    state.user = null
    state.token = null
    localStorage.removeItem(state.token)
    console.log('user logout success')
    console.log(state.user)
    Router.push('/signin')
  },
  setUser (state, payload) {
    state.user = payload
  },
  register (state, res, payload) {
    console.log(res.data[0]) // Object {id: "1", title: "모집"...
    for (var i = 0; i < res.data.length - 1; i++) {
      if (payload === res.data[i].id) {
        state.registeredboards = res.data[i]
      }
      console.log('registeredboards save success')
    }
    console.log(state.registeredboards)
  },

  allstoreSuccess (state, payload) {
    console.log('all store success')
    state.store = payload.data
    console.log(payload.data)
  }
}
