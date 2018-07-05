<template>
<main>
     <v-jumbotron  src='http://www.earlyadopter.co.kr/wp-content/uploads/2017/01/Q_Dock_00.jpg' contain height="700px">
          <v-container fill-height>
          <v-layout align-center>
             <v-flex x12 sm8 md7 lg7  align-content-center class="text-xs-center text-sm-right"> <!--버튼 중앙으로-->
                <!--프로젝트 보기-->
                <v-btn class="button" dark @click.native.stop="dialog = true" @click="guard">프로젝트 보기</v-btn>
          <v-dialog id="dialog" v-model="dialog" width="480.77px">
                  <v-card height="484.55px">
                     <v-container class="v-container" text-xs-center> <!--가운데 정렬-->

                <v-layout row wrap fill-height="300px">
                  <v-layout class="top">
                    <v-flex xs12 >
                        <v-card-text><h2>코워커와 함께 새로운 여정을 떠나볼까요?</h2></v-card-text>
                    </v-flex>
                    </v-layout>

                     <v-container fluid>
                            <form @submit.prevent="onSignIn"> <!--제출 이벤트가 페이지를 다시 로드 X -->
                                <v-layout row wrap>
                                    <v-flex xs12>
                                        <input class="input" name="email" label="Email" id="email" type="email" v-model="email" required placeholder="이메일">
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap>
                                    <v-flex xs12 class="pw">
                                        <input class="inputpw" name="password" label="Password" id="password" type="password" v-model="password" required placeholder="비밀번호">
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap class="log_signup">
                                    <v-flex xs12>
                                        <v-btn class="log" type="submit" round @click.native="dialog = false">로그인</v-btn>
                                    </v-flex>
                                     <v-flex xs12>
                                     <app-board-signup-dialog></app-board-signup-dialog>
                                     </v-flex>
                                </v-layout>
                            </form>
                        </v-container>
                </v-layout>
                 <v-layout row wrap>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>

             </v-flex>
          </v-layout>
        </v-container>
        </v-jumbotron>

         <v-jumbotron  src='http://momsmagazine.co.kr/worp/wp-content/uploads/2015/12/%EC%8A%A4%ED%8B%B0%EB%B8%8C%EC%9E%A1%EC%8A%A4-768x460.png' contain height="580px">
          <v-container fill-height>
          <v-layout align-center>
             <v-flex x12 sm8 md7 lg7  align-content-center class="text-xs-center text-sm-right"> <!--버튼 중앙으로-->

                 <v-btn class="button" dark @click.native.stop="dialog = true" @click="guard">프로젝트 보기</v-btn>

             </v-flex>
          </v-layout>
        </v-container>
        </v-jumbotron>
</main>

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
      boards: 'allBoards'
    }),
    board () {
      return this.$store.getters.loadedBoard(this.id)
    },
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.loading
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
    }
  }
}
</script>

<style scoped>
.button {
  margin-right: 50px;
  color: #212121;
  border :white 2px solid;
  opacity: 0.8;
}

.log {
  width: 116.86px;
  height: 40.64px;
  box-shadow: none;
  background: url("https://blogfiles.pstatic.net/MjAxODA3MDFfMzgg/MDAxNTMwNDUyNjQxNDM5.mKX989lzYykQU5ALcT3_SQP-J1VwLAmf29GEYo3bV2Yg.leHoFt4jmF-m96MXXCYj33BOMaMAEKs1HusK6LtD1mcg.PNG.rkdud410/sign_blue_btn.png");
}

.input {
    width: 262.08px;
    height:  40.64px;
    padding: 12px 20px;
    margin: 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 25px;
}
.inputpw {
   width: 262.08px;
    height:  40.64px;
    padding: 12px 20px;
    margin: 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    border-radius: 25px;
    background: url("https://postfiles.pstatic.net/MjAxODA3MDJfODYg/MDAxNTMwNDYwMjk1NTg3.jYhRgBcl9sAWliY26EK-EPfVhLYTQBzws41bRejER9sg.jQGG20bRIw6h5f4eMSftzxsNicGPNd03gE3phqsuXUYg.PNG.rkdud410/password_eye_preview_see.png?type=w966");
    background-repeat: no-repeat;
}

.top {
  margin-top : 120px;
}
.pw {
  margin-top : 10px;
}
.log_signup {
  margin-top : 10px;
}
.v-container {
  background-image: url("https://blogfiles.pstatic.net/MjAxODA3MDFfMjIx/MDAxNTMwNDU2NzY5MzU3.QJYd3SZYqQ7VsFnzlfMNBYHP0E5Mk1hsxaNtiHKAzE8g.l4TOp5kUPfXXW4pJ9S3IHiKFxH97so9U93_Uk2oZx7cg.PNG.rkdud410/sign_illust.png");
}

</style>
