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
  userViewSuccess (state, payload) {
    console.log('user View success')
    console.log(payload.user)
    state.divisions = payload.user
    console.log(state.divisions)
  },
  allgetrecommendproject (state, payload) {
    console.log('all recommendboards success')
    state.recommendboards = payload.result
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
  getAlarmSuccess (state, payload) {
    state.alarms = payload.result
    console.log('all get Alarm success')
    console.log(payload.result)
  },
  getRecruitSuccess (state, payload) {
    state.recruits = payload.result
    console.log('all getRecruit success')
    console.log(payload.result)
  },
  getMypageIntroSuccess (state, payload) {
    state.mypageintros = payload.result
    console.log('all getMypage Intro Success')
    console.log(payload.result)
  },
  getMypageSuccess (state, payload) {
    console.log('all getMypageSuccess')
    state.mypages = payload.data[0]
    console.log(state.mypages)
  },
  getDetailRecruitSuccess (state, payload) {
    state.recruitDetail = payload.result[0]
    console.log('all getDetailRecruit success')
    console.log(payload.result[0] + ' 모집상세 내용')
  },
  getQuestion (state, payload) {
    state.questions = payload.result
    console.log(state.questions)
  },
  writeApplySuccess (state, payload) {
    state.applys = payload
  },
  setLoading (state, payload) {
    state.boards = payload
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
  },
  allapplyMember (state, payload) {
    state.applymembers = payload.result
    console.log(state.applymembers)
  },
  alljoinMember (state, payload) {
    state.joinmembers = payload.member
    console.log(state.joinmembers)
  },
  allApplyView (state, payload) {
    state.applyview = payload.result
    console.log(state.applymembers)
  },
  getApplyDetailView (state, payload) {
    state.ApplyDetailView = payload.result[0]
    console.log(state.ApplyDetailView)
  },
  PermitSuccess (state, payload) {
    console.log('지원 수락 성공')
  },
  RejectSuccess (state, payload) {
    console.log('지원 거절 성공')
  }

}
