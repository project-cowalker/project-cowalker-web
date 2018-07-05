import axios from 'axios'
import Router from '@/router/index'

export const boardActions = {

  getAllboards ({commit}) {
    commit('allBoards') // 네트워킹 시작을 알림(commit으로 mutation 호출)
    axios.get('http://localhost:4000/results').then(res => {
      commit('allBoardsSuccess', res)
      // http://18.191.14.154:8080/reviews
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
        const newUser = {
          id: payload.user_id,
          registeredBoards: [],
          fbKeys: {}
        }
        console.log(payload)
        commit('setUser', newUser) // newUser
        Router.push('/')
      }).catch(
        (error) => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        }
      )
  },
  recruiting ({commit}, payload) {
    commit('setLoading', true)
    commit('clearError')
    axios.post('http://bghgu.tk:3000/api/recruit', payload)
      .then(res => {
        commit('setLoading', false)
        commit('recruitingSuccess')
      }
      // console.log(payload)
        // }).catch(
        //   (error) => {
        //     commit('setLoading', false)
        //     commit('setError', error)
        //     console.log(error)
        // }
      )
  },

  writeBoards ({ commit }, payload) {
    axios.post('http://18.191.14.154:8080/reviews/write', payload)
      .then(res => {
        commit('writeSuccess')
        console.log(res)// 게시판 글 조회는 get방식 등록은 post방식
      }).catch(
        (error) => console.log(error)
      )
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
