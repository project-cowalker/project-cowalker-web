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
    <v-toolbar flat dark class="transparent" color="grey ligthen-3">

      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer"><img src="@/assets/hometap_logo.png" class="hometap_logo"></router-link>
      </v-toolbar-title>
      <v-toolbar-items class="toolbar_item_left">
        <v-btn class="toolbar_item_left" flat v-for="item in leftMenu" :key="item.title" :to="item.link">
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items flat class="hidden-xs-only"> <!--hidden-xs-only는 모바일 환경에서 사라짐-->
        <!--개설-->
        <v-toolbar-items class="toolbar_item_right">
          <v-btn flat v-for="item in openedMenu" :key="item.title" :to="item.link">
            {{item.title}}
          </v-btn>
        </v-toolbar-items>
        <!--알람-->
        <v-flex v-if="this.userIsAuthenticated">
          <v-menu offset-y class="toolbar_item_right" >
            <v-btn flat slot="activator" depressed width="30px" style="margin-top: 20px;">알림</v-btn>
            <v-list class="list">
              <div v-if="alarmView">
                <v-list-tile  v-for="list in alarmView" :key="alarm">
                  <img class="alarmImg" src="@/assets/alarm_photo_cowalker.png">
                  <v-list-tile-title class="alarmText">{{ list.contents }}</v-list-tile-title>
                </v-list-tile>
              </div>
              <div v-else>
                <img class="alarmImg" src="@/assets/alarm_photo_cowalker.png">
                <v-list-title class="alarmText"> 프로젝트에 참여해보세요!</v-list-title>
              </div>
            </v-list>
          </v-menu>
        </v-flex>
        <!--마이페이지-->
        <v-flex v-if="this.userIsAuthenticated">
          <v-toolbar-items class="toolbar_item_right" >
            <v-btn flat v-for="item in profileMenu"  :key="item.title" :to="item.link" style="margin-top: 20px">
              {{item.title}}
            </v-btn>
          </v-toolbar-items>
        </v-flex>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
    <v-divider></v-divider>
    <v-footer class="hidden-xs-only" height="60" color="light gray">
      <v-spacer>
      </v-spacer>
      <v-spacer>
        <span class="footer">회사 소개&emsp;|&emsp;사업자 소개&emsp;|&emsp;이용약관&emsp;|&emsp;공지사항&emsp;|&emsp;처음오셨나요?</span>
      </v-spacer>
      <v-spacer>
        <span class="footer">Copyright © 2018 Cowalker.All Rights Reserved</span>
      </v-spacer>
    </v-footer>
  </v-app>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data () {
    return {
      sideNav: false,
      items: []
    }
  },
  computed: {
    ...mapGetters({
      alarmView: 'alarmView'
    }),
    openedMenu () {
      let openedMenu = [
        {title: '개설', link: '/opened1'}
      ]
      return openedMenu
    }
    ,
    leftMenu () {
      let leftMenu = [
        {title: '탐색', link: '/boards'}
      ]
      return leftMenu
    },
    profileMenu () {
      let profileMenu = [
        {title: '마이페이지', link: '/profile'}
      ]
      return profileMenu
    },
    userIsAuthenticated () {
      console.log(this.$store.getters.user)
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  created () {
    this.$store.dispatch('sendAlarm')
  },
  methods: {}
}
</script>

<style>
  .footer{
    color: grey;
    font-size: 13px;
  }
  .alarmText {
    font-size: 13px;
  }
  .alarmImg {
    width: 22px;
    height: 22px;
    margin: 3px;
  }
  .list {
    margin-top: 14px;
    margin-left: 5px;
    margin-bottom: 5px;
  }
  .toolbar_item_left:hover {
    background-color: rgb(89, 233, 233);
  }
  .toolbar_item_right:hover {
    background-color: rgb(89, 233, 233);
  }
  .v-toolbar {
    height: 48px;
  }

  .hometap_logo {
    margin-bottom: 10px;
  }

  .hidden-xs-only {
    margin-bottom: 15px;
  }

  .toolbar_item_left {
    margin-bottom: 15px;
  }
  .footer{
    color: grey;
    font-size: 13px;
  }
</style>
