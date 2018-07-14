<template>
  <v-container class="v-container" text-xs-center> <!--가운데 정렬-->

    <v-layout class="top">
      <v-flex xs12 sm10 md12 lg12 justify-center>
        <v-card-text><h2>코워커와&ensp;함께&ensp;새로운&ensp;<br>여정을&ensp;떠나볼까요?</h2></v-card-text>
      </v-flex>
    </v-layout>

    <v-container fluid>
      <form @submit.prevent="onSignIn"> <!--제출 이벤트가 페이지를 다시 로드 X -->
        <v-layout row wrap>
          <v-flex xs12 sm10 md12 lg12>
            <input class="input" name="email" label="Email" id="email" type="email" v-model="email"
                   required placeholder="이메일">
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12 sm10 md12 lg12 class="pw">
            <input class="inputpw" name="password" label="Password" id="password" type="password"
                   v-model="password" required placeholder="비밀번호">
          </v-flex>
        </v-layout>
        <v-layout row wrap class="log_signup">
          <v-flex xs12 sm10 md12 lg12 justify-center>
            <v-btn class="log" type="submit" round @click.native="dialog = false">로그인</v-btn>
          </v-flex>
          <v-flex xs12 sm10 md12 lg12 class="bottom">
            <app-board-signup-dialog></app-board-signup-dialog>
          </v-flex>
        </v-layout>
      </form>
    </v-container>
    <v-layout row wrap>
    </v-layout>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
import Router from '@/router/index'
export default {
  props: ['id'], // board id
  data () {
    return {
      email: '',
      password: '',
      dialog: false
    }
  },
  computed: {
    ...mapGetters({
      boards: 'allBoards',
      allgetrecommendproject: 'allgetrecommendproject'
    }),
    board () {
      return this.$store.getters.loadedBoard(this.id)
    },
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    }
  },
  methods: {
    guard () { // 홈화면 프로젝트 보기에서 로그인 되어있는 경우는 /boards로 이동
      if (this.$store.getters.user !== null && this.$store.getters.user !== undefined) {
        Router.push('/boards')
      }
    },
    onSignIn () {
      const object = {
        email: this.email, // 서버에 있는 user_id에 this.email저장
        password: this.password // 서버에 있는 user_pw
      }
      this.$store.dispatch('signIn', object)
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    },
    logout: function () {
      this.$store.dispatch('logout')
    }
  },
  created () {
    this.$store.dispatch('getrecommendproject') // 서버로부터 게시글 다 받아오기
  }
}
</script>

<style scoped>
  .button {
    margin-right: 50px;
    opacity: 0.8;
    font-size: 25px;
    margin-top: 65%;
    margin-left: 38%;
  }
  .log {
    width: 116.86px;
    height: 40.64px;
    box-shadow: none;
    margin-right: 3%;
    background: url("https://s3.ap-northeast-2.amazonaws.com/project-cowalker/KakaoTalk_20180714_031455352.png");
  }
  .bottom{
    margin-bottom: 150px;
  }
  .input {
    width: 262.08px;
    height: 40.64px;
    padding: 12px 20px;
    margin-top: 10px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 25px;
  }
  .input:focus {
    outline: none;
  }
  .inputpw {
    width: 262.08px;
    height: 40.64px;
    padding: 12px 20px;
    margin: 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    border-radius: 25px;
    background: url("https://postfiles.pstatic.net/MjAxODA3MDJfODYg/MDAxNTMwNDYwMjk1NTg3.jYhRgBcl9sAWliY26EK-EPfVhLYTQBzws41bRejER9sg.jQGG20bRIw6h5f4eMSftzxsNicGPNd03gE3phqsuXUYg.PNG.rkdud410/password_eye_preview_see.png?type=w966");
    background-repeat: no-repeat;
  }
  .inputpw:focus {
    outline: none;
  }
  .top {
    margin-top: 120px;
  }
  .pw {
    margin-top: 10px;
  }
  .log_signup {
    margin-top: 30px;
  }
  .v-container {
    background-image: url("https://s3.ap-northeast-2.amazonaws.com/project-cowalker/KakaoTalk_20180714_025607762.png");
  }
  /*footer{*/
    /*color: white;*/
  /*}*/

  h3 {
    margin-left: 4%;
    margin-bottom: 20px;
  }
  h2 {
    font-size: 20px;
  }
  .Home {
    background-color: white;
  }
</style>
