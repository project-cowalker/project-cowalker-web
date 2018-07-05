<template>
    <v-dialog v-model="RecommendDialog" max-width="450">
        <v-btn flat class="share" accent slot="activator">추천</v-btn> <!-- flat 버튼 뒷배경 삭제-->
        <v-card>
            <v-container class="v-container" text-xs-center>
                <v-layout row wrap justify-center>
                         <v-card-title><h4>추천하기</h4></v-card-title>
                </v-layout>
                <v-divider></v-divider>
                <v-layout justify-center>
                <v-card-title><h4>'user_id'</h4>님이 '코워커'프로젝트의 '개발자'파트를 추천합니다!</v-card-title>
                </v-layout>

                <v-layout justify-center>
                <v-card-title><h3>추천하시면 추첨으로 <br>
                스타벅스 쿠폰을 드립니다!</h3></v-card-title>
                </v-layout>
                <v-layout justify-center>
                    <v-card flat class="share_card" width="170px" height="60px">
                        <button id="kakao" @click="sendLink()"></button>
                        <button class="share_btn"></button>
                    </v-card>
                </v-layout>

            </v-container>
        </v-card>
    </v-dialog>
</template>

<script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
<script>
// import RegisterDialog from './components/Board/Registration/RegisterDialog.vue'
// main.js에 추가해줌
Kakao.init('e0def3726582d98b3bc5211b736bfa1a')
import {mapGetters} from 'vuex'

export default {
  props: ['id'], // board 데이터가 가진 id
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
    sendLink () {
      Kakao.Link.sendScrap({
        requestUrl: "'http://localhost:8080/boards/' + board.id" //주소 변경해줘야 함
      })
    }
  }
}

</script>

<style scoped>
.share {
    color : gray;
    width: 20px;
     background-image: url("https://blogfiles.pstatic.net/MjAxODA3MDNfMjQy/MDAxNTMwNjIzMDg1NTIx.I6yBBRZe4C_AHUGHnY7lGuIevbhSsHePLtmIq5XmE6cg.YySvVav0B9Uevaayu57NXPtLP0Nb22HupGCVy7JvZh4g.PNG.rkdud410/intro_recommend.png")
}

.share_card {
    margin-top: 35px;
    background-image: url("https://postfiles.pstatic.net/MjAxODA3MDNfMjM0/MDAxNTMwNjIwMDgzOTQ3.d0YJ9sEaKGLloFD_vxpdvgGHvfKcCwfh5lB5jgZ8fTsg.YfaC4TWXy0HmdNMIW8emHpRnJGdAm2zgIzKzmfjQURkg.PNG.rkdud410/recommend_icon_box.png?type=w966")
}
#kakao {
    background-image: url("https://postfiles.pstatic.net/MjAxODA3MDNfMTQ3/MDAxNTMwNjIxMTE2MzEw.B7GnFeOH23r_O5pnVZgZ8ktfCfZ8PTrSIR-KUyDg5Xwg.rutC00XuvgY8N3ULRm9yQWVbBv0ZIYqFSkOYQ3Y_Cjgg.PNG.rkdud410/kakao_icon.png?type=w966");
    width: 38px;
    height: 38px;
    margin-top: 12px;
    margin-right: 30px;
}
.share_btn {
    background-image: url("https://postfiles.pstatic.net/MjAxODA3MDNfNTMg/MDAxNTMwNjIxMTE2MzE3.rsRx_OexLF2i4tISJgaRxFDo5kEjCw-KrklSJcXunT4g.b8B1_K_PeRFeQZy8kKeT7qXb7ku61CIL0JjWDbH3MWYg.PNG.rkdud410/link_icon.png?type=w966");
    width: 38px;
    height: 38px;
    margin-top: 12px;
}

</style>
