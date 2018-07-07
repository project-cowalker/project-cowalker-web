import Vue from 'vue'
import Vuex from 'vuex'
import { boardGetters } from './getters.js'
import { boardMutations } from './mutations.js'
import { boardActions } from './actions.js'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    boards: [],
    user: null,
    error: null,
    loading: false,
    registeredboards: [],
    store: [],
    recruits: []
  }, /* vuex는 페이지를 리로드하면 토큰 값을 다 떨구기 때문에
localstorage를 사용해서 토큰값을 저장하거나 쿠키값 사용 */
  mutations: Object.assign({}, boardMutations),
  getters: Object.assign({}, boardGetters),
  actions: Object.assign({}, boardActions),

  plugins: [
    createPersistedState({
      storage: {
        getItem: key => Cookies.get(key),
        // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
        setItem: (key, value) =>
          Cookies.set(key, value, { expires: 3 }),
        removeItem: key => Cookies.remove(key)
      }
    })
  ]
})
