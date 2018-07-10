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
      console.log(payload)
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
