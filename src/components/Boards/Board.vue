<template>
  <v-layout margin: auto grid-list-lg class="back_color">
    <v-flex xs12 sm10 md10 lg10 xl10 offset-sm1 offset-md1> <!--v-card 안에서-->
      <div>
        <v-container d-inline-flex class="v-container">
          <v-card flat class="hidden-xs-only" width="450px"> <!--v-card만 width 조정가능 그래서 이미지 감싸줌-->
            <v-card-media :src="allDetailView.img_url[0]" height="380px"></v-card-media>
            <div class="aim_de_area"><h5>목적 &ensp; {{allDetailView.aim}} &emsp; &emsp; 분야 &ensp;
              {{allDetailView.department}} &emsp; &emsp; 지역 &ensp; {{allDetailView.area}}</h5></div>
          </v-card>
          <div> <!--사진 옆 설명부분-->
            <v-card-title class="title">
              <v-flex align-center>
                <div>
                  <!--<p>{{ allDetailrecruitView.user}}</p>-->
                  <button class="title_btn" disabled depressed><h5>{{ allDetailView.title }}</h5></button>
                  <!--class="headline mb-0"-->
                </div>
              </v-flex>
            </v-card-title>

            <v-container d-inline-flex>
              <v-layout> <!--추천공유참여하기 가운데로 모으기-->
                <v-flex class="user_name" d-inline-flex xs5 sm8 md5 lg3 xl3>
                  <div><img :src="allDetailView.project_user_profile_url" width="33px" height="33px" class="user_img">
                  </div>
                  <div> with <h3>{{allDetailView.project_user_name}}</h3> <img src="@/assets/intro_facin.png"></div>

                </v-flex>
              </v-layout> <!--모바일환경에서 제대로 작동하려면 layout안에 flex 선언하기-->
            </v-container>

            <v-container>
              <v-layout justify-center> <!--추천공유참여하기 가운데로 모으기-->
                <v-flex class="summary">
                  <p> &emsp; &emsp; 요약 소개:</p>
                  <p class="intro"> {{ allDetailView.summary }} </p>
                </v-flex>
              </v-layout> <!--모바일환경에서 제대로 작동하려면 layout안에 flex 선언하기-->
            </v-container>

            <v-container text-xs-center>
              <v-layout justify-center class="recommend_share"> <!--추천공유참여하기 가운데로 모으기-->
                <v-flex>
                  <app-board-recommend-dialog></app-board-recommend-dialog> <!--:id="allDetailView.project_idx"-->
                  <app-board-share-dialog></app-board-share-dialog>
                  &ensp;

                  <div v-if="userView === '참여하기'">
                    <v-btn class="register-btn" large accent slot="activator" outline color="cyan lighten-4">
                      <v-text class="register-text">참여하기</v-text>
                    </v-btn> <!--참여하기-->
                  </div>
                  <div v-else>
                  <v-btn class="register-btn" :to="'/boards/' + this.project_idx + '/recruit'"
                         large accent slot="activator" outline color="cyan lighten-4">
                    <v-text class="register-text">모집하기</v-text>
                  </v-btn> <!--모집하기-->
                  </div>
                </v-flex>
              </v-layout> <!--모바일환경에서 제대로 작동하려면 layout안에 flex 선언하기-->
            </v-container>
          </div>
        </v-container>

        <v-divider></v-divider>
        <div id="v-tab">
          <v-tabs v-model="active" slider-color="cyan lighten-4">
            <v-tab :to="'/boards/' + this.project_idx + '/'">소개</v-tab>
            <v-tab :to="'/boards/' + this.project_idx + '/subrecruit'">모집</v-tab>
          </v-tabs>
          <router-view></router-view>
        </div>

      </div>

    </v-flex>
  </v-layout>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  props: ['project_idx'], // project_idx 값 넘기기
  data: () => ({}),
  computed: {
    ...mapGetters({
      boards: 'allBoards',
      allDetailView: 'allDetailView',
      userView: 'userView'
    })
  },
  created () {
    this.$store.dispatch('getDetailView', this.project_idx)// 서버로부터 게시글 다 받아오기
    this.$store.dispatch('getuserView', this.project_idx)
  }
}
</script>

<style scoped>

  .v-container {
    margin: auto;
    margin-left: 7%;

  }

  .title {
    margin-left: 20px;
    text-align: center;
  }

  .register-text {
    color: black;
    width: 120px;
  }

  .recommend_share {
    margin-top: 25px;

  }

  .back_color {
    background-color: white;
  }

  .title_btn {
    width: 140px;
    height: 35px;
    background: #E1F5FE;
  }

  .intro {
    margin-left: 70px;
  }

  h3 {
    display: inline-block;
    margin-top: 3px;
  }

  .user_img {
    border: gray 2px solid;
    border-radius: 80px;
  }

  h5 {
    color: gray;
  }

  .aim_de_area {
    float: right;
  }

  .scrap {
    margin-top: 10px;
  }

  .user_name {
    margin-left: 5%;
  }

  .summary {
    margin-left: 10%;
  }
</style>
