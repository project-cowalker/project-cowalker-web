<template>
    <v-dialog v-model="RecommendDialog" max-width="450">
        <v-btn flat accent slot="activator"><img src="@/assets/intro_recommend.png">추천</v-btn> <!-- flat 버튼 뒷배경 삭제-->
        <v-card>
            <v-container class="v-container" text-xs-center>
                <v-layout row wrap justify-center>
                         <v-card-title><h4>추천하기</h4></v-card-title>
                </v-layout>
                <hr color="#80DEEA">
                <v-layout justify-center>
                <v-card-title><h4>멋진 동행을 추천해주세요!</h4></v-card-title>
                </v-layout>

                <v-layout justify-center>
                <v-card-title><h3>감사의 표시로 씨앗을 드립니다.</h3></v-card-title>
                </v-layout>
                <v-layout justify-center>
                    <v-card flat class="share_card" width="180px" height="60px">
                        <!--<button id="kakao" @click="sendLink()" :key="kakao"><img src="@/assets/kakao_icon.png"></button>-->
                      <social-sharing url="http://cowalker.cf/boards/${project_idx}"
                                      title="Cowalker"
                                      description=""
                                      quote="우리팀이 되어주세요! 공유 해주시면 토큰을 드립니다."
                                      hashtags=""
                                      twitter-user="vuejs"
                                      inline-template>
                        <network network="line">
                          <button id="kakao"><img  style=" margin-top: 10px;" width="35px" src="@/assets/line.png"></button>
                        </network>
                      </social-sharing>

                      <social-sharing url="http://cowalker.cf/boards/${project_idx}"
                                      title="Cowalker"
                                      description=""
                                      quote="우리팀이 되어주세요! 공유 해주시면 토큰을 드립니다."
                                      hashtags=""
                                      twitter-user="vuejs"
                                      inline-template>
                        <network network="facebook">
                          <button ><img class="btn"  width="35px" src="@/assets/facebook_icon.png"></button>
                        </network>
                      </social-sharing>
                    </v-card>
                </v-layout>

            </v-container>
        </v-card>
    </v-dialog>
</template>

<script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
<script></script>
<script>
// import RegisterDialog from './components/Board/Registration/RegisterDialog.vue'
// main.js에 추가해줌
import {mapGetters} from 'vuex'

export default {
  props: ['project_id'], // board 데이터가 가진 id
  data () {
    return {
      RecommendDialog: false
    }
  },
  computed: {
    ...mapGetters({
      boards: 'allBoards'
    })
  },
  methods: {
    sendLink() {
      Kakao.init('e0def3726582d98b3bc5211b736bfa1a')
      Kakao.Link.createDefaultButton({
        container: '#kakao',
        objectType: 'feed',
        content: {
          title: '',
          description: '우리의 팀이 되어주세요!                     공유를 해주시면 토큰을 드립니다!',
          imageUrl: "https://blogfiles.pstatic.net/MjAxODA3MTFfMTUy/MDAxNTMxMjQ0MzQzODMz.4pSsbJR60g6IUHr5zC94MR7x2iyj8a74fiRnZdq0o4Eg.q8_oxogaXKoypRn8h-p_XwH1DnHmrtyQ3Bekopq5hFsg.PNG.peach404/sampleimg.png",
          link: {
            mobileWebUrl: 'http://cowalker.cf/boards/',
            webUrl: 'http://cowalker.cf/boards/'
          }
        },
        buttons: [
          {
            title: '코워커 웹으로 보기',
            link: {
              mobileWebUrl: 'http://cowalker.cf/boards/',
              webUrl: 'http://cowalker.cf/boards/'
            }
          }
        ]
      })
    }

  }}

</script>

<style scoped>
  button:focus {outline:none;}
.share {
    color : gray;
    width: 20px;
}

.share_card {
  margin-top: 35px;
  border: 1px solid #64DFFF;
  border-radius: 19px;

}
#kakao {
    width: 38px;
    height: 38px;
    /*margin-right: px;*/
    margin-top: 12px;
}


</style>
