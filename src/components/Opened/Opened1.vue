<template>
  <v-form>
    <v-container>
      <v-layout>
        <v-flex class="title">
          <p>프로젝트 개설</p>
        </v-flex>
      </v-layout>

      <v-layout row wrap >
        <v-flex x12 sm10 md8 lg10 offset-sm1 offset-md2>
          <p class="p_title">프로젝트 제목</p>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex x12 sm10 md8 lg12 offset-sm1 offset-md2>
          <input class="input_p" type="text"/>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex x12 sm10 md8 lg10 offset-sm1 offset-md2>
          <p class="p_title">요약 소개</p>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex x12 sm10 md8 lg10 offset-sm1 offset-md3>
          <textarea class="textarea" cols="30" rows="10"></textarea>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex x12 sm10 md8 lg10 offset-sm1 offset-md2>
          <p class="p_title1">지역</p>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex x12 sm10 md8 lg10 offset-sm1 offset-md2>
          <v-combobox v-model="select" :items="locations" class="combo"></v-combobox>
          <template class="combo" slot="selection" slot-scope="data">
            <v-chip :selected="data.selected" :disabled="data.disabled" :key="JSON.stringify(data.location)" class="v-chip--select-multi " @input="data.parent.selectItem(data.location)">
              <v-avatar class="accent white--text">
                {{ data.location.slice(0, 1).toUpperCase() }}
              </v-avatar>
              {{ data.location }}
            </v-chip>
          </template>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex x12 sm10 md8 lg10 offset-sm1 offset-md2>
          <p class="p_title">목적</p>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex x12 sm10 md8 lg10 offset-sm1 offset-md2>
          <v-combobox v-model="select" :items="purposes" class="combo"></v-combobox>

          <template class="combo" slot="selection" slot-scope="data">
            <v-chip :selected="data.selected" :disabled="data.disabled" :key="JSON.stringify(data.purpose)" class="v-chip--select-multi " @input="data.parent.selectItem(data.purpose)">
              <v-avatar class="accent white--text">
                {{ data.purpose.slice(0, 1).toUpperCase() }}
              </v-avatar>
              {{ data.purpose }}
            </v-chip>
          </template>

        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex x12 sm10 md8 lg10 offset-sm1 offset-md2>
          <p class="p_title">분야</p>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex x12 sm10 md8 lg10 offset-sm1 offset-md2>
          <v-combobox v-model="select" :items="departments" class="combo"></v-combobox>

          <template class="combo" slot="selection" slot-scope="data">
            <v-chip :selected="data.selected" :disabled="data.disabled" :key="JSON.stringify(data.field)" class="v-chip--select-multi " @input="data.parent.selectItem(data.field)">
              <v-avatar class="accent white--text">
                {{ data.field.slice(0, 1).toUpperCase() }}
              </v-avatar>
              {{ data.field }}
            </v-chip>
          </template>

        </v-flex>
      </v-layout>

      <v-flex x12 sm10 md8 lg10 offset-sm1 offset-md2>
        <p class="p_title1">커버이미지</p>
        <form class="imgsize">
          <div class="dropbox" v-if="!image">
            <input class="input-image" type="file" :multiple="false" @change="onFileChange" accept="image/*" /> <!--이미지만 선택가능-->
          </div>
          <img :src="image" v-if="image" alt="" class="newimg"><!--이미지가 있으면 뜨도록-->
        </form>
      </v-flex>

      <v-container text-xs-center>
        <v-layout justify-center>
          <button type="button">
            <router-link to="./opened2">
              <img class="btn-img" src="https://blogfiles.pstatic.net/MjAxODA3MDJfMjY3/MDAxNTMwNDYxNjIwNjM3.WkNGeb5ttCHPKw3FElpLdfkIaceOpT0SWZc1hzK7fr4g.SHpbRPUVuGE8PiUgoZx1d7L2k98o9okf-8k0TREwxTYg.PNG.peach404/right_btn.png">
            </router-link>
          </button>
        </v-layout>
      </v-container>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'Opened1',
  data () {
    return {
      select: '',
      locations: [
        '전체',
        '서울',
        '경기도',
        '강원도',
        '충청도',
        '경상도',
        '전라도',
        '제주도'
      ],
      purposes: [
        '전체',
        '창업',
        '공모전 참여',
        '스터디',
        '사이드 프로젝트',
        '창작',
        '기타'
      ],
      departments: [
        '전체',
        '블록체인',
        'IoT',
        '인공지능',
        '디자인',
        '컨텐츠',
        '기타'
      ],
      file: null,
      image: null // 처음엔 null
    }
  },
  methods: {
    getImage (file) {
      const fileReader = new FileReader()
      fileReader.onload = () => { // 파일리더가 뭔가를 로드해왔을 때 함수블록을 실행된다
        this.image = fileReader.result
      }
      fileReader.readAsDataURL(file) // 데이터에서 url을 끌고 오는 것
    },
    onFileChange (event) {
      // if ((event.target.files[0]['type']).split('/')[0] === 'image') {
      this.file = event.target.files[0]
      this.getImage(this.file)
      // }
    }
  }
}
</script>

<style scoped>

  .title{
    margin-top: 30px;
    margin-bottom: 110px;
    display: flex;
    justify-content: center;
    font-weight: bold;
  }
  .p_title{
    font-size: 17px;
  }
  .p_title1{
    margin-top: 60px;
    font-size: 17px;
  }
  .combo{
    width: 35%;
    margin-left: 8%;
  }
  .dropbox{
    margin-left: 8%;
    margin-top:20px;
  }
  .input_p {
    margin-left: 8%;
    width: 65%;
    height: 40px;
    border-radius: 8px;
    background-color: #fcfcfc;
    border: 1px solid #dbdbdb;
  }
  .input-image  {
    display: flex;
    max-width: 100%;
    margin-bottom: 70px;
    color: transparent;
    width: 650px;
    height: 350px;
    opacity: 0.4;
    border-radius: 15px;
    border: 1px solid #707070;
    /*background-image: url('https://postfiles.pstatic.net/MjAxODA3MDJfNDMg/MDAxNTMwNDYwNzE2MzY5.aRhpCJFQlkEdPV2bOl_47fnU_DrgWBzeDb9UnDALMrIg.iu33-wVRHmnZcro8xT2W0GuYwfJi48fxDJXol5eWhA4g.PNG.peach404/aa.png?type=w773');*/
  }
  .textarea{
    resize: none;
    margin-left: -3%;
    width: 73%;
    border-radius: 10px;
    background-color: #fcfcfc;
    border: 1px solid #dbdbdb;
  }
  .newimg{
    display: flex;
    max-width: 100%;
    margin-bottom: 70px;
    width: 650px;
    height: 350px;
    border-radius: 15px;
  }
  .btn-img{
    margin-bottom: 60px;
    width: 60px;
    height: 60px;
  }

  </style>
