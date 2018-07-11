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
                        <button class="kakao" @click="sendKakao()"><img src="@/assets/kakao_icon.png"></button>
                        <button ><img class="facebook" @click="sendFacebook()" src="@/assets/facebook_icon.png"></button>

                        <button ><img class="share_btn" src="@/assets/link_icon.png"></button>
                    </v-card>
                </v-layout>

              <social-sharing url="http://localhost:8080/boards/"
                              title="The Progressive JavaScript Framework"
                              description="Intuitive, Fast and Composable MVVM for building interactive interfaces."
                              quote="Vue is a progressive framework for building user interfaces."
                              hashtags="vuejs,javascript,framework"
                              twitter-user="vuejs"
                              inline-template>
                <network network="facebook">
                  <i class="fa fa-facebook"></i> Facebook
                </network>
              </social-sharing>
            </v-container>
        </v-card>
    </v-dialog>
</template>
<script src="/dist/vue-social-sharing.min.js"></script>

<script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>

<script src="https://connect.facebook.net/en_US/sdk.js"></script>

<script>
// import RegisterDialog from './components/Board/Registration/RegisterDialog.vue'
// main.js에 추가해줌

import {mapGetters} from 'vuex'

export default {
  props: ['project_idx',//프로젝트 공유
          'recruit_idx' //모집공고 공유
  ],
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
    // makeShareInfo () {
    //   const object = {
    //     project_idx : this.project_idx
    //   }
    //   console.log(object)
    //   this.$store.dispatch('shareInfo', object)
    //   Router.push('/board')
    //
    // },
    // sendFacebook () {
    //   window.fbAsyncInit = function() {
    //     FB.init({
    //       appId            : 'your-app-id',
    //       autoLogAppEvents : true,
    //       xfbml            : true,
    //       version          : 'v3.0'
    //     });
    //   };
    //
    //   (function(d, s, id){
    //     var js, fjs = d.getElementsByTagName(s)[0];
    //     if (d.getElementById(id)) {return;}
    //     js = d.createElement(s); js.id = id;
    //     js.src = "https://connect.facebook.net/en_US/sdk.js";
    //     fjs.parentNode.insertBefore(js, fjs);
    //   }(document, 'script', 'facebook-jssdk'));
    // },

    sendKakao () {
      Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: '',
          description: '우리의 팀이 되어주세요!                     공유를 해주시면 토큰을 드립니다!',
          imageUrl: "https://blogfiles.pstatic.net/MjAxODA3MTFfMTUy/MDAxNTMxMjQ0MzQzODMz.4pSsbJR60g6IUHr5zC94MR7x2iyj8a74fiRnZdq0o4Eg.q8_oxogaXKoypRn8h-p_XwH1DnHmrtyQ3Bekopq5hFsg.PNG.peach404/sampleimg.png",
          link: {
            mobileWebUrl: 'http://localhost:8080/boards/' +'project_idx',
            webUrl: 'http://localhost:8080/boards/'+'project_idx'
          }
        },
        buttons: [
          {
            title: '코워커 웹으로 보기',
            link: {
              mobileWebUrl: 'http://localhost:8080/boards/' +'project_idx',
              webUrl: 'http://localhost:8080/boards/'+'project_idx'
            }
          }
        ]
      });
        // requestUrl: "'http://localhost:8080/boards/' + board.project_idx"
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
  width: 35px;
  height: 35px;
  margin-top: 12px;
  margin-right: 30px;
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
