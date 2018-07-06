import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Boards from '@/components/Boards/Boards'
import Board from '@/components/Boards/Board'
import Profile from '@/components/User/Profile'
import Intro from '@/components/Subpage/Intro'
import history from '@/components/Subpage/History'
import SubRecruit from '@/components/Subpage/SubRecruit'
import Opened1 from '@/components/Opened/Opened1'
import Recruit from '@/components/Boards/Recruit'
import Apply from '@/components/Boards/Apply'

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
      path: '/opened1',
      name: 'Opened1',
      component: Opened1
    },
    {
      path: '/boards/:id/recruit',
      name: 'Recruit',
      component: Recruit
    },
    {
      path: '/apply',
      name: 'Apply',
      component: Apply
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
          path: 'subrecruit',
          component: SubRecruit
        }

      ]

    }

  ],
  mode: 'history' // /#/ 삭제
})
