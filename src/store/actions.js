import axios from 'axios'
import Router from '@/router/index'


export const boardActions = {

  getAllboards ({commit}) {
    commit('allBoards') // 네트워킹 시작을 알림(commit으로 mutation 호출)
    axios.get('http://bghgu.tk:3000/api/search').then(response => {
      commit('allBoardsSuccess', response.data)
      console.log(response.data)
      // http://18.191.14.154:8080/reviews
    })
  },
  getrecommendproject ({commit}) {
    axios.get('http://bghgu.tk:3000/api/home').then(response => {
      commit('allgetrecommendproject', response.data)
    })
  },
  // this.$store.dispatch('signUp', object)
  signUp ({commit}, payload) {
    commit('setLoading', true)
    commit('clearError')
    axios.post('http://bghgu.tk:3000/api/signup', payload)
      .then(r => {
        commit('setLoading', false)
        commit('signUpSuccess')
        Router.push('/') // 라우터
      }).catch(
        (error) => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        }
      )
  },

  signIn ({commit}, payload) {
    commit('setLoading', true)
    commit('clearError')
    axios.post('http://bghgu.tk:3000/api/signin', payload)
      .then(response => {
        commit('setLoading', false)
        commit('signInSuccess', payload)
        console.log(payload)
        commit('tokenSave', response)
        Router.push('/')
      }).catch(
        (error) => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        }
      )
  },
  uploadOpened ({ commit }, payload) {
    axios.post('http://bghgu.tk:3000/api/project', payload,
      {
        headers: {
          'Content-Type': 'application/json',
          'authorization': localStorage.getItem('token')
        }
      }
    )
      .then(res => {
        commit('writeSuccess')
        console.log(res.data.project_idx)
        Router.push('/boards')
        alert('개설완료')
      }).catch(
        (error) => console.log(error)
      )
  },
  onUploadMypage ({ commit }, payload) {
    axios.put('http://bghgu.tk:3000/api/mypage', payload,
      {
        headers: {
          'Content-Type': 'application/json',
          'authorization': localStorage.getItem('token')
        }
      }
    ).then(res => {
      commit('writeSuccess')
      console.log(res.data)
      alert('수정완료!!!!')

      // commit('mypageView', res.data)
    }).catch(
      (error) => console.log(error)
    )
  },
  onloadIntro ({ commit }, payload) {
    axios.put('http://bghgu.tk:3000/api/intro', payload,
      {
        headers: {
          'authorization': localStorage.getItem('token')
        }
      }
    ).then(res => {
      commit('writeSuccess')
      console.log(res.data)
      Router.push('/profile')
      alert('작성완료')
    }).catch(
      (error) => console.log(error)
    )
  },
  sendFilter ({ commit }, payload) {
    axios.get('http://bghgu.tk:3000/api/search?' + 'aim=' + payload.aim + '&area=' + payload.area + '&department=' + payload.department + '&position=' + payload.position + '&keyword=' + payload.keyword)
      .then(res => {
        commit('sendFilterSuccess')
        commit('allBoardsSuccess', res.data)
      }).catch(
        (error) => console.log(error)
      )
  },
  recruiting ({commit}, payload) {
    axios.post('http://bghgu.tk:3000/api/project/recruit', payload,
      {
        headers: {
          'authorization': localStorage.getItem('token')
        }
      })
      .then(res => {
        commit('recruitingSuccess')
      }
      ).catch(
        (error) => console.log(error)
      )
  },
  getDetailView ({commit}, payload) {
    axios.get('http://bghgu.tk:3000/api/project/' + payload).then(response => {
      commit('getDetailViewSuccess', response.data)
      console.log(payload + 'project_idx 값')
    })
  },
  getuserView ({commit}, payload) {
    axios.get('http://bghgu.tk:3000/api/project/' + payload,
      {
        headers: {
          'Authorization': localStorage.getItem('token')
        }
      }).then(response => {
      commit('userViewSuccess', response.data)
      console.log(response.data)
    })
  },
  recruitingView ({commit}, payload) {
    axios.get('http://bghgu.tk:3000/api/project/' + payload + '/recruit').then(response => {
      commit('getRecruitSuccess', response.data)
      console.log(payload)
    })
  },
  sendAlarm ({commit}) {
    axios.get('http://bghgu.tk:3000/api/alarm',
      {
        headers: {
          'authorization': localStorage.getItem('token')
        }
      }).then(response => {
      commit('getAlarmSuccess', response.data)
    })
  },
  mypageView ({commit}) {
    axios.get('http://bghgu.tk:3000/api/mypage',
      {
        headers: {
          'authorization': localStorage.getItem('token')
        }
      }).then(response => {
      commit('getMypageSuccess', response.data)
    })
  },
  mypageIntro ({commit}) {
    axios.get('http://bghgu.tk:3000/api/intro',
      {
        headers: {
          'authorization': localStorage.getItem('token')
        }
      }).then(response => {
      commit('getMypageIntroSuccess', response.data)
    })
  },
  recruitingDetailView ({commit}, payload) {
    axios.get('http://bghgu.tk:3000/api/project/' + payload.project_idx + '/recruit/' + payload.recruit_idx, {
      headers: {
        'authorization': localStorage.getItem('token')
      }
    }).then(response => {
      commit('getDetailRecruitSuccess', response.data)
      console.log(payload + ' project_idx , recruit_idx')
    })
  },
  getQuestion  ({commit}, payload) {
    axios.get('http://bghgu.tk:3000/api/question/' + payload).then(response => {
      commit('getQuestion', response.data)
      console.log(payload + ' recruit_idx 값')
    })
  },
  writeApply ({ commit }, payload) {
    axios.post('http://bghgu.tk:3000/api/apply', payload,
      {
        headers: {
          'Content-Type': 'application/json',
          'authorization': localStorage.getItem('token')
        }
      }
    )
      .then(res => {
        commit('writeApplySuccess')
      }).catch(
        (error) => console.log(error)
      )
  },
  getapplyMember ({commit}, payload) {
    console.log('recruit_idx값 ' + payload, '토큰값' + localStorage.getItem('token'))
    axios.get('http://bghgu.tk:3000/api/apply/' + payload, {
      headers: {
        'authorization': localStorage.getItem('token')
      }
    }).then(response => {
      commit('allapplyMember', response.data)
      console.log(payload + '.. recruit_idx 조회')
      console.log(localStorage.getItem('token'))
    })
  },
  getjoinMember ({commit}, payload) {
    axios.get('http://bghgu.tk:3000/api/project/team/' + payload).then(response => {
      commit('alljoinMember', response.data)
      console.log(payload + 'project_idx 값')
    })
  },
  clearError ({commit}) {
    commit('clearError')
  },
  logout ({commit}) {
    commit('logoutSuccess')
    Router.push('/')
  },
  register ({commit}, payload) { // payload로 db id값 넘어옴
    axios.get('http://bghgu.tk:3000/results').then(res => {
      commit('register', res, payload)
    })
  },

  getstore ({commit}) {
    axios.get('http://bghgu.tk:3000/stores/list').then(res => {
      commit('allstoreSuccess', res)
    })
  },
  getApplyView ({commit}, payload) {
    console.log(payload.apply_idx + ': ---apply_idx', payload.applicant_idx + ' : applicant_idx')
    console.log(localStorage.getItem('token') + ': 토큰값')
    axios.get('http://bghgu.tk:3000/api/apply/' + payload.apply_idx + '/' + payload.applicant_idx,
      {
        headers: {
          'Content-Type': 'application/json',
          'authorization': localStorage.getItem('token')
        }
      }).then(response => {
      commit('getApplyDetailView', response.data)
    })
  },
  applyPermit ({ commit }, payload) {
    axios({
      method: 'PUT',
      url: 'http://bghgu.tk:3000/api/apply/' + payload.apply_idx + '/' + payload.applicant_idx + '/join/' + payload.join,
      headers: {
        authorization: localStorage.getItem('token')
      }
    }).then(response => {
      commit('PermitSuccess', response.data)
      alert('수락완료')
    }).catch(
      (error) => console.log(error)
    )
  },
  applyReject ({ commit }, payload) {
    axios({
      method: 'PUT',
      url: 'http://bghgu.tk:3000/api/apply/' + payload.apply_idx + '/' + payload.applicant_idx + '/join/' + payload.join,
      headers: {
        authorization: localStorage.getItem('token')
      }
    }).then(response => {
      commit('RejectSuccess', response.data)
      alert('거절완료')
    }).catch(
      (error) => console.log(error)
    )
  },
  getmyprojectList ({commit}) {
    axios.get('http://bghgu.tk:3000/api/user/project', {
      headers: {
        'authorization': localStorage.getItem('token')
      }
    }).then(response => {
      commit('allmyprojectList', response.data)
    })
  }
}
