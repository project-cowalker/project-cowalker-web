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
      params: {
        recruit_idx: payload
      }
    }
      , {
      headers: {
        'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJpYXQiOjE1MzEyNDM1OTEsImV4cCI6MTUzMzgzNTU5MX0.G0It8kBcjK1QI2rVrJNamvLX8gRgmZBZZEeqJTRNZD0'
      }
    }).then(response => {
      commit('allapplyMember', response.data)
      console.log(payload + '.. recruit_idx 조회')
      console.log(localStorage.getItem('token'))
      // http://18.191.14.154:8080/reviews
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
  }
}
