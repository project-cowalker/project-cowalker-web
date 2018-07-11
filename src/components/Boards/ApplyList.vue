<template>
  <v-form>
    <v-container>
      <v-layout>
        <v-flex class="title">
          <p>지원서 조회</p>
        </v-flex>
      </v-layout>
    <form @submit.prevent="onApply">
      <v-layout d-line-flex>
        <v-flex x12 sm10 md8 lg1 offset-sm1 offset-md2>
          <p class="p_title">소개</p>
        </v-flex>
        <v-flex x12 sm10 md8 lg10>
          <div class="textarea">
              <h5>{{ allApplyDetailView.introduce }}</h5></div>
        </v-flex>
      </v-layout>

      <v-layout d-line-flex>
        <v-flex x12 sm10 md8 lg2 offset-sm1 offset-md1>
          <p class="p_title">&emsp;&emsp;&emsp;&emsp;&ensp;연락처</p>
        </v-flex>
        <v-flex x12 sm10 md8 lg10>
          <div class="regular">
            <h5>{{ allApplyDetailView.phone }}</h5>
          </div>
        </v-flex>
      </v-layout>

      <v-layout d-line-flex>
          <v-flex x12 sm10 md8 lg2 offset-sm1 offset-md1>
            <p class="p_title">&emsp;&emsp;&emsp;&emsp;&ensp;이력서</p>
          </v-flex>
              <v-flex x12 sm10 md8 lg10>
          <div class="textarea2">
              <h5>{{ allApplyDetailView.portfolio_url }}</h5></div>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex x12 sm10 md8 lg1 offset-sm1 offset-md2>
          <p class="p_title1">질문</p>
        </v-flex>
      </v-layout>
       <ul class="list-group">
        <li class="list-group-item">
          <v-flex x12 sm10 md8 lg11 offset-md3 >
              <p>질문1. &ensp; {{questions[0]}}</p>
              <v-flex x12 sm10 md8 lg10>
                 <div class="questions">
                 <h5>{{ allApplyDetailView.answers[0] }}</h5>
                 </div>
              </v-flex>
          </v-flex>
          <v-flex x12 sm10 md8 lg11 offset-md3 >
              <p>질문2. &ensp; {{questions[1]}}</p>
               <v-flex x12 sm10 md8 lg10>
                 <div class="questions">
                 <h5>{{ allApplyDetailView.answers[1] }}</h5>
                 </div>
              </v-flex>
          </v-flex>
        </li>
      </ul>

      <v-container text-xs-center>
        <v-layout justify-center>

          <form @submit.prevent="permit" class="btn-done">
                <button type="submit">수락</button>
         </form>
         <form @submit.prevent="reject" class="btn-done2">
                <button type="submit">거절</button>
         </form>
        </v-layout>
      </v-container>

      </form>
    </v-container>
  </v-form>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Apply',
  props: ['project_idx', 'recruit_idx', 'apply_idx', 'applicant_idx'],
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      questions: 'allQuestion',
      allApplyDetailView: 'allApplyDetailView'
    })

  },
  methods: {
    permit () {
      this.$store.dispatch('applyPermit', {
        apply_idx: this.apply_idx,
        applicant_idx: this.applicant_idx,
        join: 1
      })
    },
    reject () {
      this.$store.dispatch('applyReject', {
        apply_idx: this.apply_idx,
        applicant_idx: this.applicant_idx,
        join: 2
      })
    }
  },
  created () {
    this.$store.dispatch('getApplyView', {
      apply_idx: this.apply_idx,
      applicant_idx: this.applicant_idx
    })
  }
}
</script>

<style scoped>
  .title{
    margin-top: 30px;
    margin-bottom: 5%;
    display: flex;
    font-weight: bold;
    margin-left: 5%;
  }
  .p_title{
    font-size: 17px;
    margin-top: 3%;
    margin-bottom: 12%;
  }
  .textarea{
    margin-bottom: 15%;
    resize: none;
    width: 73%;
    border-radius: 10px;
    background-color: #fcfcfc;
    border: 1px solid #dbdbdb;
    height: 50%;
  }
  .input_p {
    height: 40px;
    border-radius: 8px;
    background-color: #fcfcfc;
    border: 1px solid #dbdbdb;
  }

  .regular{
    margin-bottom: 12%;
    width: 33%;
    height: 40px;
    border-bottom: 1px solid #999;
  }
  .btn-done{
    font-size: 16px;
    width: 17%;
    height: 65px;
    border-radius: 19px;
    background-color: #F3FCFE;
    border: 1px solid #64DFFF;
    margin: 2%;
  }
  .btn-done2{
    font-size: 16px;
    width: 17%;
    height: 65px;
    border-radius: 19px;
    background-color: rgb(243, 243, 243);
    border: 1px solid #64DFFF;
    margin: 2%;
  }
  .fileBtn{
    opacity: 0;
    margin-left: -5%;
    margin-bottom: 15%;
  }
  .plus{
    width: 74%;
    height: 40px;
    border: none;
    margin-bottom: 20px;
    border-bottom: 1px solid #999;
  }
  .p_title1{
    font-size: 17px;
    margin-top: 10%;
    margin-bottom: 12%;
  }

  ul{
    list-style:none;
  }
  h5 {
      margin-left: 3%;
      margin-top: 1%;
      font-size: 13.5px;
  }
  .application {
    margin-bottom: 15%;
    resize: none;
    width: 73%;
    border-radius: 10px;
    background-color: #fcfcfc;
    border: 1px solid #dbdbdb;
    height: 50%;
  }
  .textarea2 {
    margin-bottom: 15%;
    resize: none;
    width: 50%;
    border-radius: 10px;
    background-color: #fcfcfc;
    border: 1px solid #dbdbdb;
    height: 30%;
  }
  .questions {
      margin-left: 10%;
      margin-bottom: 12%;
      width: 80%;
      height: 40px;
      border-bottom: 1px solid #999;
  }
</style>
