<template>
  <main>
    <v-jumbotron src='http://www.earlyadopter.co.kr/wp-content/uploads/2017/01/Q_Dock_00.jpg' contain height="700px">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex x12 sm8 md7 lg7 align-content-center class="text-xs-center text-sm-right"> <!--버튼 중앙으로-->
            <!--프로젝트 보기-->
            <v-btn class="button" dark @click.native.stop="dialog = true" @click="guard">프로젝트 보기</v-btn>
            <v-dialog id="dialog" v-model="dialog" width="480.77px">
              <v-card height="508.55px">
                <v-container class="v-container" text-xs-center> <!--가운데 정렬-->

                  <v-layout row wrap fill-height="300px">
                    <v-layout class="top">
                      <v-flex xs12>
                        <v-card-text><h2>코워커와 함께 새로운 여정을 떠나볼까요?</h2></v-card-text>
                      </v-flex>
                    </v-layout>

                    <v-container fluid>
                      <form @submit.prevent="onSignIn"> <!--제출 이벤트가 페이지를 다시 로드 X -->
                        <v-layout row wrap>
                          <v-flex xs12>
                            <input class="input" name="email" label="Email" id="email" type="email" v-model="email"
                                   required placeholder="이메일">
                          </v-flex>
                        </v-layout>
                        <v-layout row wrap>
                          <v-flex xs12 class="pw">
                            <input class="inputpw" name="password" label="Password" id="password" type="password"
                                   v-model="password" required placeholder="비밀번호">
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

      <v-container>
        <h3>추천 프로젝트</h3>
      <v-layout d-inline-flex v-for="board in allgetrecommendproject" :key="board.id">
            <v-flex x12 sm10 md8 lg10 offset-sm1 offset-md2>
                <v-card flat :to="'/boards/' + board._id" class="v-card" width="260px" height="300px">
                    <v-container fluid>
                        <v-card-media  class="card_image" v-if="board.img_url" height="160px" width="260px" :src="board.img_url"></v-card-media>
                        <v-card-title primary-title>
                            <v-flex class="v-card-content">
                                <h4>{{board.title}}</h4> <!--class="headline mb-0"-->
                                <h6 class="date">{{board.area}} · {{board.department}} · {{board.aim}}</h6>
                            </v-flex>
                        </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer> <!--아이콘들 오른쪽 정렬-->
                </v-card-actions>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
        </v-container>
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
    color: #212121;
    border: white 2px solid;
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
    height: 40.64px;
    padding: 12px 20px;
    margin: 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 25px;
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

  .top {
    margin-top: 120px;
  }
  .pw {
    margin-top: 10px;
  }
  .log_signup {
    margin-top: 10px;
  }
  .v-container {
    background-image: url("https://blogfiles.pstatic.net/MjAxODA3MDFfMjIx/MDAxNTMwNDU2NzY5MzU3.QJYd3SZYqQ7VsFnzlfMNBYHP0E5Mk1hsxaNtiHKAzE8g.l4TOp5kUPfXXW4pJ9S3IHiKFxH97so9U93_Uk2oZx7cg.PNG.rkdud410/sign_illust.png");
  }
  .v-card {
    margin: auto;
    width: 470px;
    margin: 5px;
    border:thistle 0.8px solid;
    border-radius: 8px;
}
.card_iamge {
    border-radius: 8px;
}

h4 {
    text-align: center;
    border: 1px solid #64DFFF;
    width: 75%;
    margin: auto;
    margin-top: 20px;
}
.date
{
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: center;
}
#item_list{
    margin-top: 10vh;

}
.store{
    margin-right: .5vw;
}
.lookbtn{
    padding-left: 60px;
}
.v-card-content {
     margin: auto;
}
h3 {
  margin-left: 5%;
  margin-bottom: 20px;
}

</style>
