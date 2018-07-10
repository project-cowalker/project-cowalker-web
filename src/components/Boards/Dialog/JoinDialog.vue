<template>
        <v-card>
            <v-container class="v-container" text-xs-center>
                <v-layout row wrap justify-center>
                    <v-card flat class="logo"></v-card>
                </v-layout>
            </v-container>
            <v-container d-inline-flex class="v-container">
                <v-layout class="content_title" row wrap>
                     <v-flex xs12>
                        <v-text><p>모집역할</p></v-text> <v-text><p class="content_p"></p>{{allDetailrecruitView.position}}</v-text><br>
                        <v-text><p>모집기간</p></v-text><v-text><p class="content_p">{{allDetailrecruitView.start_date}}~{{allDetailrecruitView.start_date}}</p></v-text><br>
                        <v-text><p>모집인원</p></v-text><v-text><p class="content_p">이더리움 기반 암호화폐 개발 역량</p></v-text><br>
                        <v-text><p>활동</p></v-text><v-text><p class="content_p">&emsp;&emsp;이더리움 기반 암호화폐 개발 역량</p></v-text><br>
                        <v-text><p>필요역량 및 기술</p></v-text><v-text><p class="content_p" id="left_space">이더리움 기반 암호화폐 개발 역량</p></v-text><br>
                        <v-text><p>요구경력 및 경험</p></v-text><v-text><p class="content_p" id="left_space">이더리움 기반 암호화폐 개발 역량</p></v-text><br>
                        <v-text><p>우대사항</p></v-text><v-text><p class="content_p">이더리움 기반 암호화폐 개발 역량</p></v-text><br>
                        <v-text><p>활동기간 및 시간</p></v-text><v-text><p class="content_p" id="left_space">이더리움 기반 암호화폐 개발 역량</p></v-text><br>
                        <v-text><p>혜택 및 보상</p></v-text><v-text><p class="content_p" id="left">이더리움 기반 암호화폐 개발 역량</p></v-text><br>
                        <v-text><p>위치</p></v-text><v-text><p class="content_p">&emsp;&emsp;이더리움 기반 암호화폐 개발 역량</p></v-text><br>
                        <v-text><p>코멘트</p></v-text><v-text><p class="content_p">&ensp;&ensp;이더리움 기반 암호화폐 개발 역량</p></v-text><br>
                    </v-flex>
                </v-layout>

                 <v-layout row wrap>
                    <v-flex  class="recommend_share" >
                        <app-board-recommend-dialog></app-board-recommend-dialog> <!--추천하기-->
                        <app-board-share-dialog></app-board-share-dialog>   <!--공유하기-->
                    </v-flex>
                </v-layout>
            </v-container>

            <v-container class="v-container" text-xs-center>
             <v-layout  row wrap justify-center>
                <v-flex xs12>
                    <v-btn class="signup" type="submit"
                    :to="'/boards/' +  '/apply'" >참여하기</v-btn>
                </v-flex>
                <v-flex xs12>
                </v-flex>
            </v-layout>
            </v-container>

        </v-card>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  props: ['project_idx', 'recruit_idx'],
  data: () => ({
  }),
  computed: {
    ...mapGetters({
      boards: 'allBoards',
<<<<<<< HEAD
      user: 'user'
    }),
    board () { // 해당 id를 가진 게시글을 보여줌
      return this.$store.getters.loadedBoard(this.id)
    }
=======
      allrecruitview: 'allrecruitView',
      allDetailrecruitView: 'allDetailrecruitView'
    })

  },
  created () {
    this.$store.dispatch('recruitingDetailView', this.project_idx, this.recruit_idx)
>>>>>>> develop
  }
}
</script>

<style scoped>

.dialog_style{
    border-radius: 25px;
}
.register-text {
    color: black;
    width: 120px;
}
.content_title {
    margin-left: 50px;
    margin-left: 25%;
}
.content {
    margin-left: 15px;
    margin-right: 60px;
}

h4 {
    margin-top: 30px;
}
p {
    display: inline-block;
    margin-left: 10px;
    margin-top: 25px;
    border-bottom: 2.5px solid #81D4FA;
}
.recommend_share {
    margin-left: 30%;
}
.logo {
    margin-top: 50px;
    margin-bottom: 30px;
    background-image: url("https://blogfiles.pstatic.net/MjAxODA3MDZfOTkg/MDAxNTMwODY2MzYxOTI4.o0wNSRT-qbulatHTt-TXwaYifTg3GaG_6sjavnVr4n0g.ikAyO_xrYEgaTVbFr5ZyzzDZZtS6yBS_evxV82cddHcg.PNG.rkdud410/project_detail_logo.png");
    width: 300px;
    margin-left: 40px;
    height: 40px;
}
.button_content {
    margin-bottom: 50px;
}
.content_p {
    border-bottom: none;
    margin-top: 30px;
    margin-left: 20%;
}
#left_space {
    margin-left: 47px;
}
#left {
    margin-left: 76px;
}
.signup {
  width: 250px;
  height: 60px;
  margin-top: 30px;
  border-radius: 18px;
  border:#81D4FA 2px solid;
  margin-bottom: 60px;
}

</style>
