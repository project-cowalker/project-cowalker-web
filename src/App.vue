<template>
   <v-app class="v-app">
     <v-navigation-drawer app temporary v-model="sideNav"> <!--app을 안써줬더니 자꾸 이상하게 뜸 app으로 감싸줘야함!-->
       <v-list>
         <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
           <v-list-tile-action>
             <v-icon>{{ item.icon }}</v-icon>
           </v-list-tile-action>
           <v-list-tile-content>{{ item.title }}</v-list-tile-content>
         </v-list-tile>
       </v-list>
     </v-navigation-drawer>
     <v-toolbar flat dark class="v-toolbar" color="grey darken-1">
       <v-toolbar-side-icon
         @click.stop="sideNav = !sideNav"
         class="hidden-sm-and-up "></v-toolbar-side-icon>
       <v-toolbar-title>
         <router-link to="/" tag="span" style="cursor: pointer"><img src="@/assets/hometap_logo.png"></router-link>
       </v-toolbar-title>
       &emsp;
         <v-toolbar-items class="toolbar_item_left">
           <v-btn flat v-for="item in leftMenu" :key="item.title" :to="item.link">
             {{item.title}}
           </v-btn>
           </v-toolbar-items>
       <v-spacer></v-spacer>
       <v-toolbar-items class="hidden-xs-only"> <!--hidden-xs-only는 모바일 환경에서 사라짐-->
         <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">
           <v-icon left dark>{{ item.icon }}</v-icon>
           <div>{{ item.title }}</div>
         </v-btn>
       </v-toolbar-items>
     </v-toolbar>
           <main>
        <router-view></router-view>
          </main>
       </v-app>
    </template>

<script>
export default {
  data () {
    return {
      sideNav: false,
      items: [
        {
          src: 'http://www.earlyadopter.co.kr/wp-content/uploads/2017/01/Q_Dock_00.jpg'
        },
        {
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/800px-New_york_times_square-terabass.jpg'
        }
      ]
    }
  },
  computed: {
    menuItems () {
      let menuItems = [
        { title: '개설', link: '/opened1' },
        { title: '스크랩', link: '/bag' },
        { title: '메세지', link: '/message' },
        { title: '로그인', link: '/login' }
      ]
      if (this.userIsAuthenticated) {
        menuItems = [
          { title: '개설', link: '/opened1' },
          { title: '스크랩', link: '/bag' },
          { title: '메세지', link: '/message' },
          { title: '알림', link: '/alert' },
          { icon: 'face', link: '/Profile' }
        ]
      }
      return menuItems
    },
    leftMenu () {
      let leftMenu = [
        { title: '탐색', link: '/boards' }
      ]
      return leftMenu
    },
    userIsAuthenticated () {
      console.log(this.$store.getters.user)
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  methods: {
  }
}
</script>

<style>

.toolbar_item_left:hover {
  background-color: rgb(89, 233, 233);
}

.toolbar_item_right:hover {
  background-color: rgb(89, 233, 233);
}

</style>
