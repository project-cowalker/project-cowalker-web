<template >
  <v-layout margin: auto grid-list-lg>
    <v-flex xs12 sm10 md10 lg10 xl10 offset-sm1 offset-md1> <!--v-card 안에서-->
    <v-card>

     <v-container d-inline-flex  class="v-container">
       <v-card class="hidden-xs-only" width="350px"> <!--v-card만 width 조정가능 그래서 이미지 감싸줌-->
        <v-card-media height="450px"></v-card-media>
         </v-card>
        <div> <!--사진 옆 설명부분-->
          <v-layout class="dk">
            <v-flex class="private">
               <v-card-title class="title">
               <v-flex justify-center>
                 <p class="mainImg">aa</p>
                 <!--<img :src="profile_url" v-if="profile_url" alt="" class="mainImg">
                 <!--class="headline mb-0"-->
               </v-flex>
               </v-card-title>
            </v-flex>
          </v-layout>

          <v-layout row wrap>
            <v-text class=namebg v-model="name">이충엽</v-text>
            <img  class="memoImg" src="https://blogfiles.pstatic.net/MjAxODA3MDdfMTAg/MDAxNTMwOTQ2MzMzNDA3.u36ldwOCzFflZ059tjEB2VEvndo3bULeRG4RakT4vsAg.iw-Au5shR6dxmQjzJaCIlB16Qz7xVfU-NDkNOukkHcYg.PNG.peach404/my_letter.png" alt="">
          </v-layout>

       <v-layout justify-center class="total">
          <table class="tb" >
            <tr><br></tr>
            <tr>
              <th><p>씨앗&emsp;&emsp;</p></th>
              <th><p>500알&emsp;&emsp;</p></th>
              <th><img class="bagImg" src="https://blogfiles.pstatic.net/MjAxODA3MDdfMjg4/MDAxNTMwOTQ2Mjk5ODQx.pGRet3IouXfl5l92dNA4Z4x3iIkz-h8cfPDayiS-JWIg.baYrTBjRPGKRSBGJc-HLFWt_65OAnCTLpFrixQaLjCAg.PNG.peach404/my_backpack_nothing.png" alt=""></th>
            </tr>
            <tr>
              <th><p>소속&emsp;&emsp;</p></th>
              <th><p>S.O.P.T&emsp;&emsp;</p></th>
            </tr>
            <tr>
              <th><p>이메일&ensp;&emsp;</p></th>
              <th><p>&emsp;&emsp;www.qwert.com</p></th>
            </tr>
            <tr><br></tr>
          </table>
       </v-layout>
          <v-layout justify-center>
          <table class="sub" justify-center>
            <tr>
              <th><p class="se">목적</p></th><th>&emsp;</th>
              <th><p>공모전 참여</p></th><th>&emsp;&emsp;&emsp;</th>
              <th><p class="se">분야</p></th><th>&ensp;</th>
              <th><p>IT</p></th><th>&emsp;&emsp;&emsp;</th>
              <th><p class="se">지역</p></th><th>&ensp;</th>
              <th><p>광화문</p></th>
            </tr>
          </table>
          </v-layout>
      </div>
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

  }
}

</script>

<style scoped>

.title {
    text-align:center;
    margin-left: 30px;
}

.private {
    margin-left: 33%;
    margin-top: 7%;

}

  .mainImg{
    width: 90px;
    height: 90px;
    margin-left: 10px;
    background-color: violet;
  }
.namebg{
  background-color: #EEFBFF;
  margin-left: 46%;
  font-size: 17px;

}
  .total{
    font-size: 13px;
    margin-left: -60px;

  }
  .sub{
    font-size: 12px;

  }
  .se{
    color: #979797;
  }
  .bagImg{
    width: 40px;
  }
  .memoImg{
    margin-left: 15px;
  }
</style>
