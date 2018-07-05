<template>
    <v-dialog v-model="RecommendDialog" max-width="450">
        <v-btn flat class="share" accent slot="activator"><v-icon>share</v-icon>공유</v-btn> <!-- flat 버튼 뒷배경 삭제-->
        <v-card>
            <v-container class="v-container" text-xs-center>
                <v-layout row wrap justify-center>
                         <v-card-title><h4>SNS 공유하기</h4></v-card-title>
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

                        <button class="kakao" @click="sendLink()"></button>
                        <button class="share_btn"></button>
                    </v-card>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
<script src="https://connect.facebook.net/en_US/sdk.js"></script>
<script>
// import RegisterDialog from './components/Board/Registration/RegisterDialog.vue'
// main.js에 추가해줌

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
        requestUrl: "'http://localhost:8080/boards/' + board.id"
      })
    }
  }
}

</script>

<style scoped>
.share {
    color : gray;
}

.share_card {
    margin-top: 35px;
    background-image: url("https://postfiles.pstatic.net/MjAxODA3MDNfMjM0/MDAxNTMwNjIwMDgzOTQ3.d0YJ9sEaKGLloFD_vxpdvgGHvfKcCwfh5lB5jgZ8fTsg.YfaC4TWXy0HmdNMIW8emHpRnJGdAm2zgIzKzmfjQURkg.PNG.rkdud410/recommend_icon_box.png?type=w966")
}
.kakao {
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
