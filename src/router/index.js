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
import Opened2 from '@/components/Opened/Opened2'
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
    }, {
      path: '/opened2',
      name: 'Opened2',
      component: Opened2
    },
    {
      path: '/boards/:project_idx/recruit',
      name: 'Recruit',
      props: true,
      component: Recruit
    },
    {
      path: '/boards/:project_idx/apply',
      name: 'Apply',
      props: true,
      component: Apply
    },
    {
      path: '/boards/:project_idx',
      name: 'Boards',
      props: true, // 이렇게 설정해줘야 props에 url에서 project_idx 받아올 수 있음
      component: Board,
      children: [
        {
          path: '',
          component: Intro
        },
        {
          path: 'history',
          props: true,
          component: history
        },
        {
          path: 'subrecruit',
          props: true,
          component: SubRecruit
        }

      ]

    }

  ],
  mode: 'history' // /#/ 삭제
})
