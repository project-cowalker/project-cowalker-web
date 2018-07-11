import axios from 'axios'
import Router from '@/router/index'

export const boardActions = {

  getAllboards ({commit}) {
    commit('allBoards') // 네트워킹 시작을 알림(commit으로 mutation 호출)
    axios.get('http://bghgu.tk:3000/api/search').then(response => {
      commit('allBoardsSuccess', response.data)
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
        Router.push('/')
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
      Router.push('/profile')
      alert('수정완료')
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
    axios.get('http://bghgu.tk:3000/api/search?' + 'aim=' + payload.aim + '&area=' + payload.area + '&department=' + payload.department + '&position=' + payload.position)
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
  recruitingView ({commit}, payload) {
    axios.get('http://bghgu.tk:3000/api/project/' + payload + '/recruit').then(response => {
      commit('getRecruitSuccess', response.data)
      console.log(payload)
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
  clearError ({commit}) {
    commit('clearError')
  },
  logout ({commit}) {
    commit('logoutSuccess')
  },
  register ({commit}, payload) { // payload로 db id값 넘어옴
    axios.get('http://localhost:4000/results').then(res => {
      commit('register', res, payload)
    })
  },

  getstore ({commit}) {
    axios.get('http://18.191.14.154:8080/stores/list').then(res => {
      commit('allstoreSuccess', res)
    // http://18.191.14.154:8080/reviews
    })
  },
  getApplyView ({commit}, payload) {
    console.log(payload.apply_idx + ': ---apply_idx', payload.applicant_idx + ' : applicant_idx')
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
    console.log(localStorage.getItem('token') + ' -- 토큰값')
    axios.put('http://bghgu.tk:3000/api/apply/' + payload.apply_idx + '/' + payload.applicant_idx + '/join/' + payload.join,
      {
        headers: {
          'Content-Type': 'application/json',
          'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJpYXQiOjE1MzEzNDEwNDcsImV4cCI6MTUzMzkzMzA0N30.ePv38HABolL6G8vtHKU6FwnixAYfYUZ__DzfH2CFI_E'
        }
      }
    ).then(response => {
      commit('PermitSuccess', response.data)
      alert('수락완료')
      Router.push('/boards/' + this.project_idx)
    }).catch(
      (error) => console.log(error)
    )
  },
  applyReject ({ commit }, payload) {
    console.log(localStorage.getItem('token') + ' -- 토큰값')
    axios.put('http://bghgu.tk:3000/api/apply/' + payload.apply_idx + '/' + payload.applicant_idx + '/join/' + payload.join,
      {
        headers: {
          'Content-Type': 'application/json',
          'authorization': localStorage.getItem('token')
        }
      }
    ).then(response => {
      commit('RejectSuccess')
      alert('거절완료')
      Router.push('/boards/' + this.project_idx)
    }).catch(
      (error) => console.log(error)
    )
  }
}
