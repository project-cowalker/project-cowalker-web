import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Boards from '@/components/Boards/Boards'
import Board from '@/components/Boards/Board'
import Profile from '@/components/User/Profile'
import Intro from '@/components/Subpage/Intro'
import history from '@/components/Subpage/History'
import Recruit from '@/components/Subpage/Recruit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/boards',
      name: 'Boards',
      component: Boards
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/boards/:id',
      name: 'Boards',
      props: true,
      component: Board,
      children: [
        {
          path: '',
          component: Intro
        },
        {
          path: 'history',
          component: history
        },
        {
          path: 'recruit',
          component: Recruit
        }

      ]

    }

  ],
  mode: 'history' // /#/ 삭제
})
