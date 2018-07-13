<template>
  <main class="Home">

   <v-jumbotron  src="https://s3.ap-northeast-2.amazonaws.com/project-cowalker/KakaoTalk_20180714_021531616.png" contain height="755px">
     <v-container class="mainbox" fill-height>
          <v-layout align-center>
          <v-flex  class="hidden-xs-only">
            <p class="recommend_project">이번주 추천 프로젝트는 <br> 무엇일까?</p>
            <hr class="underline5" color=white nosthade/>
            <p class="recommend_project">없이 산다</p>
            <p class="recommend_project">자발적 결핍 프로젝트</p>
          </v-flex>
          <v-flex x12 sm8 md7 lg7 align-content-center class="text-xs-center text-sm-right"> <!--버튼 중앙으로-->
            <!--프로젝트 보기-->
            <v-btn class="hidden-xs-only" flat dark @click.native.stop="dialog = true" @click="guard"><p class="button">프로젝트 상세보기  ></p></v-btn>

            <v-dialog id="dialog" v-model="dialog" width="480.77px">
              <v-card height="508.55%">

                <v-container class="v-container" text-xs-center> <!--가운데 정렬-->

                    <v-layout class="top">
                      <v-flex xs7 sm10 md12 lg12>
                        <v-card-text><h2>코워커와 함께 새로운 여정을 떠나볼까요?</h2></v-card-text>
                      </v-flex>
                    </v-layout>

                    <v-container fluid>
                      <form @submit.prevent="onSignIn"> <!--제출 이벤트가 페이지를 다시 로드 X -->
                        <v-layout row wrap>
                          <v-flex xs7 sm10 md12 lg12>
                            <input class="input" name="email" label="Email" id="email" type="email" v-model="email"
                                   required placeholder="이메일">
                          </v-flex>
                        </v-layout>
                        <v-layout row wrap>
                          <v-flex xs7 sm10 md12 lg12 class="pw">
                            <input class="inputpw" name="password" label="Password" id="password" type="password"
                                   v-model="password" required placeholder="비밀번호">
                          </v-flex>
                        </v-layout>
                        <v-layout row wrap class="log_signup">
                          <v-flex xs7 sm10 md12 lg12 >
                            <v-btn class="log" type="submit" round @click.native="dialog = false">로그인</v-btn>
                          </v-flex>
                          <v-flex xs7 sm10 md12 lg12>
                            <app-board-signup-dialog></app-board-signup-dialog>
                          </v-flex>
                        </v-layout>
                      </form>
                    </v-container>
                  <v-layout row wrap>
                  </v-layout>

                </v-container>
              </v-card>
            </v-dialog>

          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>

      <v-container class="main_recommend">
        <h3>추천 프로젝트</h3>
      <v-layout d-inline-flex v-for="board in allgetrecommendproject" :key="board.id">
            <v-flex xs12 sm10 md8 lg10 offset-sm1>
                <v-card :to="'/boards/' + board._id" class="v-card" width="260px" height="310x">

                        <v-card-media  class="card_image" v-if="board.img_url" height="210px" width="260px" :src="board.img_url[0]"></v-card-media>
                            <v-flex class="v-card-content">
                                <h5>{{board.title}}</h5> <!--class="headline mb-0"-->
                                <h6 class="date">{{board.area}} · {{board.department}} · {{board.aim}}</h6>
                           </v-flex>
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
  @media only screen and (max-width: 400px) {
     .mainbox{
       background-image: url("https://s3.ap-northeast-2.amazonaws.com/project-cowalker/KakaoTalk_20180714_051201118.jpg");
     }
    .container.fill-height{
    }

  }
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
    background: url("https://s3.ap-northeast-2.amazonaws.com/project-cowalker/KakaoTalk_20180714_031455352.png");
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
    margin-top: 10px;
  }
  .v-container {
    background-image: url("https://s3.ap-northeast-2.amazonaws.com/project-cowalker/KakaoTalk_20180714_025607762.png");
  }
  .v-card {
    margin: auto;
    width: 470px;
    margin: 7px;
    border:thistle 0.1px solid;
    border-radius: 8px;
}

h5 {
    text-align: center;
    border: 1px solid #64DFFF;
    width: 50%;
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
h3 {
  margin-left: 4%;
  margin-bottom: 20px;
}
h2 {
  font-size: 20px;
}
.recommend_project {
  color: white;
  font-size: 220%;
  margin-bottom: 10%;
  margin-top: 5%;
}
.underline5 {
  width: 130%;
}
.hidden-xs-only {
  font-weight: bold;
  margin-bottom: 11%;

}

.textBtn{
 font-weight: bold;
  color: #ffffff;
}
.main_recommend {
  margin-left: 9%;
  margin-bottom: 3%;
}
.Home {
  background-color: white;
}
</style>
