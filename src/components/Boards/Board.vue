<template >
  <v-layout margin: auto grid-list-lg class="back_color">
    <v-flex xs12 sm10 md10 lg10 xl10 offset-sm1 offset-md1> <!--v-card 안에서-->
    <div>

      <v-container d-inline-flex  class="v-container">
          <v-card flat class="hidden-xs-only" width="350px"> <!--v-card만 width 조정가능 그래서 이미지 감싸줌-->
        <v-card-media :src="board.image" height="380px"></v-card-media>
         </v-card>
                <div> <!--사진 옆 설명부분-->
                      <v-card-title class="title">
                      <v-flex align-center>
                      <button class="title_btn" disabled depressed><h5>{{ board.title }}</h5></button> <!--class="headline mb-0"-->
                      <img src="https://postfiles.pstatic.net/MjAxODA3MDJfODYg/MDAxNTMwNTQwMDc4Mjc1.cxB8ww7y5FgwqClGg9szzzySMH-E5ch3kq9W69hlFWog.yIQY71HhslVvtUNSybDfPpdE_3CyMlyA-atCh6VZ8r8g.PNG.rkdud410/intro_scrap_unclick.png?type=w966"
                      class="memo"/>
                      </v-flex>

                      </v-card-title>

            <v-container>
            <v-layout justify-center class="next_picture"> <!--추천공유참여하기 가운데로 모으기-->
            <v-flex>
                <p>with &nbsp; {{user.id}} <img src="https://postfiles.pstatic.net/MjAxODA3MDJfMjg1/MDAxNTMwNTQxNjg0MjU0.1Ysslob8AQNbBrvtunTvD8AJl1Uqm6kh1vz8tGqdacog.Me0encEJSv6aSOGrIwG3g72LPSEmkS1rd2W7o_k_Zyog.PNG.rkdud410/intro_facin.png?type=w966"/></p>
            </v-flex>
            </v-layout> <!--모바일환경에서 제대로 작동하려면 layout안에 flex 선언하기-->
            </v-container>

            <v-container>
            <v-layout justify-center> <!--추천공유참여하기 가운데로 모으기-->
            <v-flex>
                <p> &emsp; &emsp; 요약 소개:</p>
                <p class="intro">이 곳은 프로젝트에 대한 짧은 소개와 주요 목적에 대한~</p>
            </v-flex>
            </v-layout> <!--모바일환경에서 제대로 작동하려면 layout안에 flex 선언하기-->
            </v-container>

            <v-container  text-xs-center>
            <v-layout justify-center class="recommend_share"> <!--추천공유참여하기 가운데로 모으기-->
            <v-flex>
                  <app-board-recommend-dialog :id="board.id"></app-board-recommend-dialog>
                  <app-board-share-dialog :id="board.id"></app-board-share-dialog>
                    &ensp;
                    <app-board-join-dialog :id="board.id"></app-board-join-dialog> <!--참여하기-->
                    <v-btn class="register-btn" :to="'/boards/' + board.id + '/recruit'"
                    large accent slot="activator" outline color="cyan lighten-4">
                    <v-text class="register-text">모집하기</v-text></v-btn> <!--모집하기-->
            </v-flex>
            </v-layout> <!--모바일환경에서 제대로 작동하려면 layout안에 flex 선언하기-->
            </v-container>
              </div>
        </v-container>

        <v-divider></v-divider>
            <div id="v-tab">
              <v-tabs v-model="active" slider-color="cyan lighten-4">
                <v-tab :to="'/boards/' + board.id + '/'">소개</v-tab>
                <v-tab :to="'/boards/' + board.id + '/history'">연혁</v-tab>
                <v-tab :to="'/boards/' + board.id + '/subrecruit'">모집</v-tab>
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
  props: ['id'], // board id
  data: () => ({
  }),
  computed: {
    ...mapGetters({
      boards: 'allBoards',
      user: 'user'
    }),

    board () { // 해당 id를 가진 게시글을 보여줌
      return this.$store.getters.loadedBoard(this.id)
    }
  }
}
</script>

<style scoped>

.v-container {
    margin: auto;

}
.title {
    margin-left:20px;
    text-align:center;
}

.register-text {
    color: black;
    width: 120px;
}
.next_picture {
     border:pink 2px dashed;
}
.recommend_share {
     margin-top : 25px;

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
  margin-left : 70px;
}

</style>
