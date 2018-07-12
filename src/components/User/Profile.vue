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
          <v-flex class="profileImg" fluid xs12 sm10 md10 lg12 xl10>
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
          <v-tab-item><!--소개, 연혁, 모집 부분-->
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
      allmypageView: 'allmypageView',
      allmypageIntro: 'allmypageIntro'
    })
  },
  created () {
    this.$store.dispatch('mypageView')
    this.$store.dispatch('mypageIntro')
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
    /*height: 320px;*/
    margin: 0;
  }
  .mainImg{
    margin-left: -20px;
  }
  .intro {
    margin-top: 40px;
    border: rgb(218, 217, 217) 1px solid;
    border-radius: 10px;
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
    margin-left: -30px
  }

  .tb {
    width: 100%;
    max-width: 100%;
  }

  .title {
    margin-left: 30%;
  }

  .namebg {
    background-color: #d1ecff;
    font-size: 17px;
    margin-top:10px;
    margin-left: 10px;
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

</style>
