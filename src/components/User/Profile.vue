<template >
  <v-layout grid-list-lg>
    <v-flex xs12 sm10 md10 lg10 xl10 offset-sm1 offset-md1> <!--v-card 안에서-->
    <v-card>

     <v-container d-inline-flex  class="v-container">
          <v-card class="hidden-xs-only" width="350px"> <!--v-card만 width 조정가능 그래서 이미지 감싸줌-->
        <v-card-media height="450px"></v-card-media>
         </v-card>
        <div> <!--사진 옆 설명부분-->
               <v-card-title class="title">
               <v-flex align-center>
               <h4>profile 사진 들어갈 부분</h4> <!--class="headline mb-0"-->
               </v-flex>
               </v-card-title>

    <v-container>
    <v-layout justify-center class="dk"> <!--추천공유참여하기 가운데로 모으기-->
     <v-flex class="private">
         <v-text><p>소속</p></v-text>
         <v-text><p>자기 사이트 주소 :   {{user.id}}</p></v-text>
     </v-flex>
    </v-layout> <!--모바일환경에서 제대로 작동하려면 layout안에 flex 선언하기-->
    </v-container>

    <v-container  text-xs-center>
    <v-layout justify-center class="dk"> <!--추천공유참여하기 가운데로 모으기-->
     <v-flex>
          <v-btn flat class="recommend"><v-icon>thumb_up_alt</v-icon>추천</v-btn>
          <v-btn flat class="share"><v-icon>share</v-icon>공유</v-btn> <!-- flat 버튼 뒷배경 삭제-->
            <v-btn class="register-btn" large outline color="cyan lighten-4">
            <v-text class="register-text">참여하기</v-text></v-btn>
     </v-flex>
    </v-layout> <!--모바일환경에서 제대로 작동하려면 layout안에 flex 선언하기-->

    <v-layout row wrap>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-card-text>
                        <v-container fluid>
                            <form @submit.prevent="logout"> <!--제출 이벤트가 페이지를 다시 로드 X -->
                                <v-layout row wrap>
                                    <v-flex xs12>
                                        <v-btn type="submit" outline color="indigo">logout</v-btn>
                                    </v-flex>
                                </v-layout>
                            </form>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>

    </v-container>

      </div>
        </v-container>
        <v-divider></v-divider>
        <v-divider></v-divider>

        <div>
    <v-tabs v-model="active" slider-color="cyan lighten-4">
      <v-tab>
        소개
      </v-tab>
     <v-tab-item> <!--소개, 연혁, 모집 부분-->
        <v-card flat>
          <v-card-text>본인 소개</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>

  </div>

      </v-card>

    </v-flex>
  </v-layout>
</template>

<script>
import {mapGetters} from 'vuex'
export default { // 로그아웃 기능 template
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  methods: {
    logout: function () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style scoped>

.title {
    margin-left:20px;
    text-align:center;
}

.private {
     border:red 2px dashed;
     margin-left: 90px;
     margin-right: 90px;
}

</style>
