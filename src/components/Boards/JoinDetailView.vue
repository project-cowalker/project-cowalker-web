<template>
  <v-card>
    <v-container class="v-container" text-xs-center>
      <v-layout row wrap justify-center>
        <v-card flat class="logo"><img src="@/assets/project_detail_logo.png"></v-card>
      </v-layout>
    </v-container>
    <v-container  d-inline-flex class="v-container">
      <v-layout class="content_title" row wrap>
        <v-flex xs12>
          <table>
            <tr>
              <td><h4 class="title">역할<hr class="underline1" color="#81D4FA" noshade/></h4></td>
              <td><h4 class="content">{{allDetailrecruitView.position}}</h4></td>
            </tr>
            <tr>
              <td><h4 class="title">모집기간<hr class="underline2" color="#81D4FA" noshade/></h4></td>
              <td><h4 class="content">2018. 07. 01 ~ 2018. 08 .04</h4></td>
            </tr>
            <tr>
              <td><h4 class="title">모집인원<hr class="underline2" color="#81D4FA" noshade/></h4></td>
              <td><h4 class="content">{{allDetailrecruitView.number}}명</h4></td>
            </tr>
            <tr>
              <td><h4 class="title">활동<hr class="underline1" color="#81D4FA" noshade/></h4></td>
              <td><h4 class="content">{{allDetailrecruitView.task}}</h4></td>
            </tr>
            <tr>
              <td><h4 class="title">활동기간 및 시간<hr class="underline3" color="#81D4FA" noshade/></h4></td>
              <td><h4 class="content">2018. 07. 01 ~ 2018. 09 .09 (주 3회 정기모임)</h4></td>
            </tr>
            <tr>
              <td><h4 class="title">혜택 및 보상<hr class="underline4" color="#81D4FA" noshade/></h4></td>
              <td><h4 class="content">{{allDetailrecruitView.reward}}</h4></td>
            </tr>
            <tr>
              <td><h4 class="title">활동 위치<hr class="underline5" color="#81D4FA" noshade/></h4></td>
              <td><h4 class="content">{{allDetailrecruitView.area}}</h4></td>
            </tr>
            <tr>
              <td><h4 class="title">필요역량 및 기술<hr class="underline6" color="#81D4FA" noshade/></h4></td>
              <td><h4 class="content">{{allDetailrecruitView.ability}}</h4></td>
            </tr>
            <tr>
              <td><h4 class="title">경력 및 경험<hr class="underline7" color="#81D4FA" noshade/></h4></td>
              <td><h4 class="content">{{allDetailrecruitView.career}}</h4></td>
            </tr>
            <tr>
              <td><h4 class="title">우대사항<hr class="underline2" color="#81D4FA" noshade/></h4></td>
              <td><h4 class="content">{{allDetailrecruitView.preference}}</h4></td>
            </tr>
            <tr>
              <td><h4 class="title">코멘트<hr class="underline8" color="#81D4FA" noshade/></h4></td>
              <td><h4 class="content">{{allDetailrecruitView.comment}}</h4></td>
            </tr>
          </table>

        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex  class="recommend_share">
          <div class="wrapper">
            <div class="half">
              <div class="tab blue">
                <input id="tab-four" type="radio" name="tabs">
                <label for="tab-four">지원 멤버</label>
                <div class="tab-content">
                  <v-container  class="member">
                    <v-layout v-for="recruit in allApplyMember" :key="recruit.apply_idx">
                      <v-flex x12 sm10 md8 lg7>     <!--v-for="" recruit로 해줄 것-->
                        <v-card flat class="left_card" width="130%">
                          <v-card-title primary-title>
                            <div><img :src="recruit.profile_url" width="33px" height="33px" class="user_img"></div>
                            <v-card flat class="position" width="120px"><h3 class="recruit_user_name">{{recruit.user_name}}</h3></v-card>
                            <router-link :to="'/boards/' + project_idx + '/subrecruit/' + recruit_idx + '/'+ recruit.apply_idx + '/' + recruit.applicant_idx"><img src="@/assets/dropbox_application_btn.png" width="33px" height="33px" class="appllcaiton">
                            </router-link>
                          </v-card-title>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </div>
              </div>
              <div class="tab blue">
                <input id="tab-five" type="radio" name="tabs">
                <label for="tab-five">참여 멤버</label>
                <div class="tab-content">
                  <v-container  class="member">
                    <v-layout v-for="recruit in allApplyMember" :key="recruit.apply_idx">
                      <v-flex x12 sm10 md8 lg7>     <!--v-for="" recruit로 해줄 것-->
                        <v-card flat class="left_card" width="130%">

                          <v-card-title primary-title>
                            <div><img :src="recruit.profile_url" width="33px" height="33px" class="user_img"></div>
                            <v-card flat class="position" width="120px"><h3 class="recruit_user_name">{{recruit.user_name}}</h3></v-card>
                            <div class="number"><h3 class="number_h3">{{recruit.positon}}</h3></div>
                            <div><img src="@/assets/dropbox_application_btn.png" width="33px" height="33px" class="appllcaiton"></div>
                          </v-card-title>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </div>
              </div>
              <div class="share_and_recommend">
                <app-board-recommend-dialog></app-board-recommend-dialog> <!--추천하기-->
                <app-board-share-dialog></app-board-share-dialog>   <!--공유하기-->
              </div>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="v-container" text-xs-center>
      <v-layout  row wrap justify-center>
        <v-flex xs12>
          <v-btn flat class="apply" type="submit"
                 :to="'/boards/' + this.project_idx +'/' + this.recruit_idx + '/apply'" >
            참여하기</v-btn>
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
      allrecruitview: 'allrecruitView',
      allDetailrecruitView: 'allDetailrecruitView',
      allApplyMember: 'allApplyMember',
      allJoinMember: 'allJoinMember'
    })
  },
  created () {
    this.$store.dispatch('getapplyMember', this.project_idx)
    this.$store.dispatch('getjoinMember', this.recruit_idx)
    this.$store.dispatch('recruitingDetailView', {
      project_idx: this.project_idx,
      recruit_idx: this.recruit_idx
    })
  }
}
</script>

<style scoped>

  h4 {
    margin-top: 30px;
  }

  .logo {
    margin-top: 50px;
    margin-bottom: 30px;
  }
  .button_content {
    margin-bottom: 50px;
  }
  .apply {
    font-size: 16px;
    width: 30%;
    height: 65px;
    border-radius: 19px;
    background-color: #F3FCFE;
    border: 1px solid #64DFFF;
    margin: 5%;
  }
  .v-container {
    margin-left: 12%;
  }
  .title {
    text-align:right;
  }
  .content {
    margin-left: 40%;
    width: 110%;
  }
  table {
    width: 500px;
  }
  td {
    width: 300px;
  }
  .underline1 {
    margin-left: 100%;
  }
  .underline1 {
    margin-left: 80%;
    margin-top: 5px;
  }
  .underline2 {
    margin-left: 66%;
    margin-top: 5px;
  }
  .underline3 {
    margin-left: 35%;
    margin-top: 5px;
  }
  .underline4 {
    margin-left: 53%;
    margin-top: 5px;
  }
  .underline5 {
    margin-left: 66%;
    margin-top: 5px;
  }
  .underline6 {
    margin-left: 38%;
    margin-top: 5px;
  }
  .underline7 {
    margin-left: 53%;
    margin-top: 5px;
  }
  .underline8 {
    margin-left: 75%;
    margin-top: 5px;
  }

  body {
    color: #2c3e50;
    background: #ecf0f1;
  }
  h1 {
    text-align: center;
  }
  .half {
    float: left;
    width: 10%;
    padding: 0 1em;
  }
  /* Acordeon styles */
  .tab {
    position: relative;
    margin-bottom: 1px;
    width: 80%;
    color: black;
    overflow: hidden;
  }
  input {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }
  label {
    position: relative;
    display: block;
    padding: 0 0 0 1em;
    font-weight: bold;
    line-height: 3;
    cursor: pointer;
  }
  .blue label {
    background: white;
    border: 1px solid #64DFFF;
  }
  .tab-content {
    max-height: 0;
    overflow: hidden;
    background: white;
    -webkit-transition: max-height .35s;
    -o-transition: max-height .35s;
    transition: max-height .35s;
  }
  .blue .tab-content {
    background: white;
  }
  .tab-content p {
    margin: 1em;
  }
  /* :checked */
  input:checked ~ .tab-content {
    max-height: 100%;
  }
  /* Icon */
  label::after {
    position: absolute;
    right: 0;
    top: 0;
    display: block;
    width: 3em;
    height: 3em;
    line-height: 3;
    text-align: center;
    -webkit-transition: all .35s;
    -o-transition: all .35s;
    transition: all .35s;
  }
  input[type=checkbox] + label::after {
    content: "+";
  }
  input[type=radio] + label::after {
    content: "\25BC";
  }
  input[type=checkbox]:checked + label::after {
    transform: rotate(315deg);
  }
  input[type=radio]:checked + label::after {
    transform: rotateX(180deg);
  }

  .half {
    width: 480px;
    margin-top: 5%;
    margin-left: 12%;
  }
  .left_card {
    height: 60px;
    border-bottom: 1px solid rgb(204, 204, 204);
    margin-left: 15%;
    margin-bottom: 3%;
  }
  .member {
    border:#81D4FA 1px solid;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  .share_and_recommend {
    margin-top: 8%;
    margin-left: 13%;
  }
  .user_img {
    border-radius: 80px;
  }
  .recruit_user_name {
    margin-left: 13%;
  }
  .appllcaiton {
    margin-left: 100%;
  }
</style>
