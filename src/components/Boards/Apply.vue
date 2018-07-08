<template>
  <v-form>
    <v-container>
      <v-layout>
        <v-flex class="title">
          <p>참여신청</p>
        </v-flex>
      </v-layout>
      <form @submit.prevent="onUploadApply">
      <v-layout d-line-flex>
        <v-flex x12 sm10 md8 lg1 offset-sm1 offset-md2>
          <p class="p_title">소개</p>
        </v-flex>
        <v-flex x12 sm10 md8 lg10>
          <textarea class="textarea" cols="70" rows="7" placeholder="  자기소개" v-model="introduce"></textarea>
        </v-flex>
      </v-layout>

      <v-layout d-line-flex>
        <v-flex x12 sm10 md8 lg2 offset-sm1 offset-md1>
          <p class="p_title">&emsp;&emsp;&emsp;&emsp;&ensp;연락처</p>
        </v-flex>
        <v-flex x12 sm10 md8 lg10>
          <form>
            <input type="text" class="regular" v-model="phone" placeholder="[-없이 작성]">
          </form>
        </v-flex>
      </v-layout>

      <v-layout d-line-flex>
          <v-flex x12 sm10 md8 lg2 offset-sm1 offset-md1>
            <p class="p_title">&emsp;&emsp;&emsp;&emsp;&ensp;이력서</p>
          </v-flex>
            <form style="width: 50%">
              <v-flex>
                <input v-model="portfolio_url" class="input_p" type="text" placeholder="이메일 또는 웹사이트" />
              </v-flex>
            </form>
      </v-layout>

      <v-layout>
        <v-flex x12 sm10 md8 lg1 offset-sm1 offset-md2>
          <p class="p_title1">질문</p>
        </v-flex>
      </v-layout>

      <ul class="list-group">
        <li class="list-group-item" v-for="(answer,index) in answers" :key="index">
          <v-flex x12 sm10 md8 lg11 offset-md3 >
            <form>
              <p>{{answer}}</p>
              <input type="text" class="plus">
            </form>
          </v-flex>
        </li>
      </ul>

      <v-container text-xs-center>
        <v-layout justify-center>
          <button type="submit" class="btn-done">
            참여 신청완료
          </button>
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
  props: ['project_idx'],
  data () {
    return {
      answers: [
        '질문1.'
      ],
      introduce: '',
      phone: '',
      portfolio_url:''
    }
  }
  // computed: {
  //   ...mapGetters({
  //     boards: 'allBoards',
  //     user: 'user'
  //   }),
  //
  //   board () { // 해당 id를 가진 게시글을 보여줌
  //     return this.$store.getters.loadedBoard(this.id)
  //   }
  // }
  ,
  methods: {
    onUploadApply () {
      const data = new FormData()
      data.append('introduce',this.introduce)

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
    font-size: 17px;
    margin-top: 3%;
    margin-bottom: 12%;
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
</style>
