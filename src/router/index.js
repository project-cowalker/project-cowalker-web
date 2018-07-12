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
// import JoinDialog from '@/components/Boards/Dialog/JoinDialog'
import JoinDetailView from '@/components/Boards/JoinDetailView'
import ApplyList from '@/components/Boards/ApplyList'

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
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/opened1',
      name: 'Opened1',
      component: Opened1
    },
    {
      path: '/boards/:project_idx/recruit',
      name: 'Recruit',
      props: true,
      component: Recruit
    },
    {
      path: '/boards/:project_idx/:recruit_idx/apply',
      name: 'Apply',
      props: true,
      component: Apply
    },
    {
      path: '/boards/:project_idx/subrecruit/:recruit_idx',
      name: 'subrecruit',
      props: true,
      component: JoinDetailView
    },
    {
      path: '/boards/:project_idx/subrecruit/:recruit_idx/:apply_idx/:applicant_idx',
      name: 'applylist',
      props: true,
      component: ApplyList
    },
    {
      path: '/boards/:project_idx',
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
          props: true,
          component: history
        },
        {
          path: 'subrecruit',
          props: true,
          component: SubRecruit
        },

      ]

    }

  ],
  mode: 'history',
  scrollBehavior() {
    return { x:0, y:0 }
  }
})
