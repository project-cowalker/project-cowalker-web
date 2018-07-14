<template>
  <v-form class="form">
    <v-container>
      <v-layout>
        <v-flex class="title">
          <p>참여신청</p>
        </v-flex>
      </v-layout>
    <form @submit.prevent="onApply">
      <v-layout d-line-flex>
        <v-flex xs6 sm10 md8 lg1 offset-sm1 offset-md2>
          <p class="p_title">소개</p>
        </v-flex>
        <v-flex sm10 md8 lg10>
          <textarea class="textarea" cols="70" rows="7" placeholder="  자기소개" v-model="introduce"></textarea>
        </v-flex>
      </v-layout>

      <v-layout d-line-flex>
        <v-flex  sm10 md8 lg2 offset-sm1 offset-md1>
          <p class="p_title">&emsp;&emsp;&emsp;모집역할</p>
        </v-flex>
        <v-flex xs12 sm10 md8 lg10>
          <form>
            <input type="text" class="regular" v-model="position">
          </form>
        </v-flex>
      </v-layout>

      <v-layout d-line-flex>
        <v-flex  sm10 md8 lg2 offset-sm1 offset-md1>
          <p class="p_title">&emsp;&emsp;&emsp;&emsp;연락처</p>
        </v-flex>
        <v-flex xs12 sm10 md8 lg10>
          <form>
            <input type="text" class="regular" v-model="phone" placeholder="[-없이 작성]">
          </form>
        </v-flex>
      </v-layout>

      <v-layout d-line-flex>
          <v-flex sm10 md8 lg2 offset-sm1 offset-md1>
            <p class="p_title">&emsp;&emsp;&emsp; &nbsp;이력서</p>
          </v-flex>
          <v-flex xs12 sm10 md8 lg10>
            <form style="width: 50%">
              <v-flex xs12 sm10 md8 lg10>
                <input class="input_p" type="text" v-model="portfolio_url" placeholder="이메일 또는 웹사이트" />
              </v-flex>
              <v-flex>
                <button type="button"></button>
                <input type="file" class="fileBtn" multiple>
              </v-flex>
            </form>
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
              <input type="text" class="plus" v-model="qeustion1">
          </v-flex>
          <v-flex x12 sm10 md8 lg11 offset-md3 >
              <p>질문2. &ensp; {{questions[1]}}</p>
              <input type="text" class="plus" v-model="qeustion2">
          </v-flex>
        </li>
      </ul>

      <v-container text-xs-center>
        <v-layout justify-center>
          <v-flex xs10>
          <button type="submit" class="btn-done">
            참여 신청완료
          </button>
          </v-flex>
        </v-layout>
      </v-container>

      </form>
    </v-container>
  </v-form>
</template>

<script>
import {mapGetters} from 'vuex'
import Router from '@/router/index'
export default {
  name: 'Apply',
  props: ['project_idx', 'recruit_idx'],
  data () {
    return {
      introduce: '',
      portfolio_url: '',
      phone: '',
      position: '',
      qeustion1: '',
      qeustion2: ''
    }
  },
  computed: {
    ...mapGetters({
      questions: 'allQuestion'
    })

  },
  created () {
    this.$store.dispatch('getQuestion', this.recruit_idx)
  },
  methods: {
    onApply () {
      const object = {
        introduce: this.introduce,
        portfolio_url: this.portfolio_url,
        phone: this.phone,
        recruit_idx: this.recruit_idx,
        project_idx: this.project_idx,
        position: this.position,
        answers: [this.question1, this.question2]
      }
      this.$store.dispatch('writeApply', object)
      alert('지원서 작성 완료')
      Router.push('/boards' + '/' + this.project_idx)
    }
  }
}
</script>

<style scoped>
  .title{
    margin-top: 30px;
    margin-bottom: 5%;
    display: flex;
    justify-content: center;
    font-weight: bold;
  }
  .p_title{
    font-size: 14px;
    margin-top: 3%;
    margin-bottom: 12%;
    margin-left: 16%;
    width: 100px;
  }
  .textarea{
    margin-bottom: 15%;
    resize: none;
    margin-left: -3%;
    width: 73%;
    border-radius: 10px;
    background-color: #fcfcfc;
    border: 1px solid #dbdbdb;
  }
  .input_p {
    height: 40px;
    margin-left: 12%;
    border-radius: 8px;
    background-color: #fcfcfc;
    border: 1px solid #dbdbdb;
  }

  .regular{
    margin-bottom: 12%;
    width: 33%;
    height: 40px;
    margin-left: 8%;
    border-bottom: 1px solid #999;
  }
  .btn-done{
    font-size: 13px;
    width: 30%;
    height: 65px;
    border-radius: 19px;
    background-color: #F3FCFE;
    border: 1px solid #64DFFF;
    margin: 5%;
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
  .form {
    background-color: white;
  }
</style>
