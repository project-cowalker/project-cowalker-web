<template>
  <v-dialog v-model="RecommendDialog" max-width="450">
        <v-btn flat class="share" accent slot="activator"><v-icon>share</v-icon>공유</v-btn> <!-- flat 버튼 뒷배경 삭제-->
        <v-card>
            <v-container class="v-container" text-xs-center>
                <v-layout row wrap justify-center>
                  <v-card-title><h3>공유하기</h3></v-card-title>
                </v-layout>
                <hr color="#80DEEA">
                <v-layout justify-center>
                <v-card-title><h3 class="mainfont">이 멋진 프로젝트를 널리 알리세요!</h3></v-card-title>
                </v-layout>

                <v-layout justify-center>
                <v-card-title><p class="subfont">감사의 표시로 씨앗을 드립니다.</p></v-card-title>

                </v-layout>

                <v-layout justify-center>
                    <v-card flat class="share_card" width="230px" height="57px">
                      <button id="kakao" @click="sendLink()" :key="kakao"><img src="@/assets/kakao_icon.png">
                      </button>
                      <social-sharing url="http://cowalker.cf/boards/${project_idx}"
                                      title="Cowalker"
                                      description=""
                                      quote="우리팀이 되어주세요! 공유 해주시면 토큰을 드립니다."
                                      hashtags=""
                                      twitter-user="vuejs"
                                      inline-template>
                        <network network="facebook">
                          <button ><img width="35px" src="@/assets/facebook_icon.png"></button>
                        </network>
                      </social-sharing>
                        <button ><img class="share_btn" src="@/assets/link_icon.png"></button>
                    </v-card>
                </v-layout>
          </v-container>
        </v-card>
    </v-dialog>
</template>
<!--<script src="/dist/vue-social-sharing.min.js"></script>-->
<script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
<script></script>
<!--<script src="https://connect.facebook.net/en_US/sdk.js"></script>-->
<script>
// import RegisterDialog from './components/Board/Registration/RegisterDialog.vue'
// main.js에 추가해줌

import {mapGetters} from 'vuex'

export default {
  props: ['project_idx'], // 프로젝트 공유
  data() {
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
        objectType: 'feed',
        container: '#kakao',
        content: {
          title: '',
          description: '우리의 팀이 되어주세요!                     공유를 해주시면 토큰을 드립니다!',
          imageUrl: 'https://blogfiles.pstatic.net/MjAxODA3MTFfMTUy/MDAxNTMxMjQ0MzQzODMz.4pSsbJR60g6IUHr5zC94MR7x2iyj8a74fiRnZdq0o4Eg.q8_oxogaXKoypRn8h-p_XwH1DnHmrtyQ3Bekopq5hFsg.PNG.peach404/sampleimg.png',
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
            },

            title: '앱으로 보기',
            link: {
              mobileWebUrl: 'http://cowalker.cf/boards/',
              webUrl: 'http://cowalker.cf/boards/'
            }
          }
        ]
      });
    }
  }
}
</script>

<style scoped>
.share {
    color : gray;
}
.mainfont{
  margin-top: 20px;
}
.subfont{
  margin-top: -10px;
}

.share_card {
    margin-top: 15px;
  border: 1px solid #64DFFF;
  border-radius: 19px;

}
.facebook{
  width: 20px;
  height: 20px;
  margin-top: 12px;
  margin-right: 10px;
}
.kakao {
    width: 38px;
    height: 38px;
    margin-top: 12px;
    margin-right: 30px;
}
.share_btn {
    width: 35px;
    height: 35px;
    margin-top: 12px;
}

</style>
