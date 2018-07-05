<template>
  <v-form>
    <v-container>
      <v-layout>
        <v-flex class="title">
          <p>참여신청</p>
        </v-flex>
      </v-layout>

      <v-layout d-line-flex>
        <v-flex x12 sm10 md8 lg1 offset-sm1 offset-md2>
          <p class="p_title">소개</p>
        </v-flex>
        <v-flex x12 sm10 md8 lg10>
          <textarea class="textarea" cols="70" rows="7" placeholder="  자기소개" ></textarea>
        </v-flex>
      </v-layout>

      <v-layout d-line-flex>
        <v-flex x12 sm10 md8 lg2 offset-sm1 offset-md1>
          <p class="p_title">&emsp;&emsp;&emsp;&emsp;&ensp;연락처</p>
        </v-flex>
        <v-flex x12 sm10 md8 lg10>
          <form>
            <input type="text" class="regular" v-model="number" placeholder="[-없이 작성]">
          </form>
        </v-flex>
      </v-layout>

      <v-layout d-line-flex>
          <v-flex x12 sm10 md8 lg2 offset-sm1 offset-md1>
            <p class="p_title">&emsp;&emsp;&emsp;&emsp;&ensp;이력서</p>
          </v-flex>
            <form>
              <v-flex>
                <input class="input_p" type="text" v-model="preference" placeholder="이메일 또는 웹사이트" />
              </v-flex>
              <v-flex>
                <button type="button"><img src="https://blogfiles.pstatic.net/MjAxODA3MDVfNzAg/MDAxNTMwNzg2Mjk4MDQy.ww-axj12lCFQavSp_GtEAn3GQg_oD03bBVLQg7V9bvIg.LQEXNcznuEDgWU-0gmvx8Ju-oT-Bo0l4xmBBP8JMCXAg.PNG.peach404/dropbox_application_btn.png" alt=""></button>
                <input type="file" class="fileBtn" multiple>
              </v-flex>
            </form>
      </v-layout>

      <v-layout>
        <v-flex x12 sm10 md8 lg1 offset-sm1 offset-md2>
          <p class="p_title1">질문</p>
        </v-flex>
      </v-layout>

      <ul class="list-group">
        <li class="list-group-item" v-for="(question,index) in questions" :key="index">
          <v-flex x12 sm10 md8 lg11 offset-md3 >
            <form>
              <p>{{question}}</p>
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

      <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&layout=button&size=small&mobile_iframe=true&width=67&height=20&appId" width="67" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>

    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'Apply',
  data () {
    return {
      questions: [
        '질문1.'
      ]
    }
  },
  methods: {
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
    width: 50%;
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
