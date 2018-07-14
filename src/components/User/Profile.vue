<template>
  <v-container>
    <v-layout justify-end>
      <app-board-mypage-dialog></app-board-mypage-dialog>
      <form @submit.prevent="logout">
        <button type="submit" class="btncss">로그아웃</button>
      </form>
    </v-layout>
    <v-flex xs12 sm10 md10 lg10 xl10 offset-sm1> <!--v-card 안에서-->
      <v-container d-inline-flex class="v-container">

        <v-flex fluid xs12 sm10 md10 lg12 xl10>
          <v-card class="hidden-xs-only" width="450px"> <!--v-card만 width 조정가능 그래서 이미지 감싸줌-->
            <v-card-media :src="allmypageView.background_url" height="400px" style="border: 1px solid #d1ecff;"></v-card-media>
          </v-card>
        </v-flex>

        <v-container> <!--사진 옆 설명부분-->
          <v-flex class="profileImg" fluid xs12 sm10 md10 lg12 xl12>
            <v-layout justify-center text-xs-center >
              <v-card width="110px" class="title" flat>
                <v-card-media :src="allmypageView.profile_url" class="mainImg" height="110px" style="border: 1px solid #d1ecff;"></v-card-media>
              </v-card>
            </v-layout>
          </v-flex>

          <v-layout  xs12 sm10 md12 lg12 xl10 justify-center>
            <v-text class=namebg>&ensp;{{allmypageView.name}}&ensp;</v-text>
          </v-layout>

          <v-layout class="total">
            <v-flex xs12 sm12 md10 lg12 xl10 text-xs-center offset-sm1>
              <table class="tb">
                <tr><br></tr>
                <tr>
                  <th><p>씨앗</p></th>
                  <th><p>{{allmypageView.point}} 포인트</p></th>
                  <th>
                    <button type="button"><img @click="bag" class="bagImg" src="@/assets/my_backpack_nothing.png" alt=""></button>
                  </th>
                </tr>
                <tr>
                  <th><p>&emsp;웹 사이트</p></th>
                  <th><p>{{allmypageView.portfolio_url}}</p></th>
                </tr>
                <tr>
                  <th><p>&emsp;한줄소개</p></th>
                  <th><p>{{allmypageView.introduce}}</p></th>
                </tr>
                <tr><br></tr>
              </table>
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex class="hidden-xs-only" xs12 sm12 md12 lg12 xl10 offset-sm2>
              <table class="sub">
                <tr>
                  <th><p class="se">목적</p></th>
                  <th>&emsp;</th>
                  <th><p>{{allmypageView.aim}}</p></th>
                  <th>&emsp;&emsp;</th>
                  <th><p class="se">분야</p></th>
                  <th>&ensp;</th>
                  <th><p>{{allmypageView.department}}</p></th>
                  <th>&emsp;&ensp;</th>
                  <th><p class="se">지역</p></th>
                  <th>&ensp;</th>
                  <th><p>{{allmypageView.area}}</p></th>
                </tr>
              </table>
            </v-flex>
          </v-layout>

        </v-container>
      </v-container>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <div>
        <v-tabs v-model="active" slider-color="cyan lighten-4">
          <v-tab>
            소개
          </v-tab>
          <v-tab>
            프로젝트
          </v-tab>
          <v-tab-item><!--소개-->
            <v-card flat>
              <app-board-Intro-dialog></app-board-Intro-dialog>
              <v-container>
                <!--<v-card-media  class="carousel" height="320px" width="260px" :src="allmypageIntro.intro_img_url[1]"></v-card-media>-->
                <v-carousel class="carousel" hide-delimiters>
                  <v-carousel-item
                    v-for="image in allmypageIntro.intro_img_url"
                    :src="image"
                    :key="image"
                    v-if="allmypageIntro"
                  ></v-carousel-item>
                </v-carousel>
                <v-flex>
                  <v-card flat class="intro" width="100%" height="200px">
                    <h3>소개</h3>
                    <p>{{allmypageIntro.intro_contents}}</p>
                  </v-card>
                </v-flex>
              </v-container>
            </v-card>
          </v-tab-item>

          <v-tab-item><!--프로젝트-->
            <v-card flat>
              <h4>개설 프로젝트</h4>
              <v-container class="v-container">
                <v-layout d-inline-flex v-for="board in allmyprojectList" :key="board.title">
                  <v-flex xs5 sm10 md8 lg10 offset-sm1 offset-md2 class="dkdk">
                    <v-card  :to="'/boards/'" class="v-card" width="250px">
                      <v-card-media  class="card_image" v-if="board.img_url" height="210px" width="250px" :src="board.img_url[0]"></v-card-media>
                      <v-flex class="v-card-content">
                        <h5 class="board_title">{{board.title}}</h5> <!--class="headline mb-0"-->
                        <h6 class="date">{{board.area}} · {{board.department}} · {{board.aim}}</h6>
                      </v-flex>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </div>
    </v-flex>
  </v-container>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    data () {
      return {}
    },
    computed: {
      ...mapGetters({
        user: 'user',
        boards: 'allBoards',
        allmypageView: 'allmypageView',
        allmypageIntro: 'allmypageIntro',
        allmyprojectList: 'allmyprojectList'
      })
    },
    created () {
      this.$store.dispatch('mypageView')
      this.$store.dispatch('mypageIntro')
      this.$store.dispatch('getmyprojectList')
    },
    methods: {
      logout () {
        this.$store.dispatch('logout')
      },
      bag () {
        alert('서비스 준비중입니다.')
      }
    }
  }

</script>

<style scoped>
  .carousel {
    height: 280px;
    margin: 0;
  }
  .mainImg{
    margin-left: -20px;
  }
  .intro {
    margin-top: 40px;
    border:rgb(218, 217, 217) 1px solid;
    border-radius: 10px;
    margin-bottom: 5%;
  }

  .btncss {
    width: 50px;
    height: 20px;
    border: 1px solid #707070;
    text-align: center;
    border-radius: 6px;
    font-size: 12px;
    background-color: #fcfcfc;
    margin-left: 8px;
  }

  .profileImg {
    margin-left: 9%;
  }

  .tb {
    width: 100%;
    max-width: 100%;
  }

  .title {
    margin-left: 30%;
  }
  h4 {
    margin-top: 2%;
    margin-left: 3%;
  }

  .namebg {
    background-color: #d1ecff;
    font-size: 15px;
    margin-top:10px;
    margin-left: 3%;
  }

  .total {
    font-size: 13px;
  }

  .sub {
    font-size: 12px;
    width: 100%;
    max-width: 100%;
  }

  .bagImg {
    width: 40px;
  }

  .memoImg {
    margin-left: 15px;
  }

  button:focus {
    outline: 0;
  }
  .v-container{
    margin-bottom: 1%;
  }
  .v-card {
    margin: 1%;
    margin-top: 2%;
    border:thistle 0.1px solid;
    border-radius: 8px;
  }
  .card_iamge {
    border-radius: 8px;
  }
  .board_title {
    text-align: center;
    border: 1px solid #64DFFF;
    width: 60%;
    margin: auto;
    margin-top: 10px;
  }
  .date
  {
    margin-top: 10px;
    text-align: center;
  }
  h3 {
    margin-left: 5%;
    margin-top: 20px;
    border-bottom: 2.5px solid #81D4FA;
    width: 35px;
  }
  .dkdk {
    margin: 10%;
  }

</style>
