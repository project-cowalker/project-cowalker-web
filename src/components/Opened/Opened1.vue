<template>
  <v-form>
    <v-container>
      <v-layout>
        <v-flex class="title">
          <p>프로젝트 개설</p>
        </v-flex>
      </v-layout>

    <form @submit.prevent="onUploadOpened">
      <v-layout row wrap >
        <v-flex x12 sm10 md8 lg10 offset-sm1 offset-md2>
          <p class="p_title">프로젝트 제목</p>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex x12 sm10 md8 lg12 offset-sm1 offset-md2>
          <input class="input_p" type="text" v-model="title"/>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex x12 sm10 md8 lg10 offset-sm1 offset-md2>
          <p class="p_title">요약 소개</p>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex x12 sm10 md8 lg10 offset-sm1 offset-md3>
          <textarea class="textarea" cols="30" rows="5" v-model="summary"></textarea>
        </v-flex>
      </v-layout>

      <v-layout d-line-flex>
        <v-flex x12 sm10 md8 lg1 offset-sm1 offset-md2>
          <p class="p_title1">지역</p>
        </v-flex>
        <v-flex x12 sm10 md8 lg7>
          <v-combobox v-model="area" :items="locations" class="combo"></v-combobox>
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

      <v-layout d-line-flex>
        <v-flex x12 sm10 md8 lg1 offset-sm1 offset-md2>
          <p class="p_title">목적</p>
        </v-flex>
        <v-flex x12 sm10 md8 lg7>
          <v-combobox v-model="aim" :items="purposes" class="combo"></v-combobox>
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

      <v-layout d-line-flex>
        <v-flex x12 sm10 md8 lg1 offset-sm1 offset-md2>
          <p class="p_title">분야</p>
        </v-flex>
        <v-flex x12 sm10 md8 lg7>
          <v-combobox v-model="department" :items="departments" class="combo"></v-combobox>
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

      <v-flex class="title1">
        <p>프로젝트 소개</p>
      </v-flex>

      <v-flex x12 sm10 md8 lg10 offset-sm1 offset-md2>
        <form class="imgsize">
          <div class="dropbox" v-if="!image">
            <input class="input-image" type="file" :multiple="false" @change="onFileChange" accept="image/*" /> <!--이미지만 선택가능-->
          </div>

          <img :src="image" v-if="image" alt="" class="newimg"><!--이미지가 있으면 뜨도록-->
        </form>
      </v-flex>

      <v-flex x12 sm10 md8 lg10 offset-sm1 offset-md2>
        <form class="imgsize">
          <div class="dropbox" v-if="!image2">
            <input class="input-image" type="file" :multiple="false" @change="onFileChange2" accept="image/*" /> <!--이미지만 선택가능-->
          </div>

          <img :src="image2" v-if="image2" alt="" class="newimg"><!--이미지가 있으면 뜨도록-->
        </form>
      </v-flex>
      <v-flex x12 sm10 md8 lg10 offset-sm1 offset-md3>
        <textarea class="textarea" cols="70" rows="7" placeholder="  프로젝트에 대해 소개해주세요."
        v-model="explain"></textarea>
      </v-flex>

      <v-container text-xs-center>
        <v-layout justify-center>
          <button type="submit" class="btn-done">개설하기</button>
        </v-layout>
      </v-container>
      </form>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'Opened1',
  data () {
    return {
      title: '',
      summary: '',
      explain: '',
      area: '',
      aim: '',
      department: '',
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
      image: null, // 처음엔 null
      image2: null
    }
  },
  methods: {
    onUploadOpened () {
      const data = new FormData()
      data.append('title', this.title)
      data.append('summary', this.summary)
      data.append('area', this.area)
      data.append('department', this.department)
      data.append('aim', this.aim)
      data.append('explain', this.explain)
      data.append('img', this.file)

      this.$store.dispatch('uploadOpened', data)
    },
    getImage (file) {
      const fileReader = new FileReader()
      fileReader.onload = () => { // 파일리더가 뭔가를 로드해왔을 때 함수블록을 실행된다
        this.image = fileReader.result
        // this.image1 = fileReader.result
      }
      fileReader.readAsDataURL(file) // 데이터에서 url을 끌고 오는 것
    },
    onFileChange (file) {
      // if ((event.target.files[0]['type']).split('/')[0] === 'image') {
      this.file = file.target.files[0]
      this.getImage(this.file)
      // }
    },
    getImage2 (file) {
      const fileReader = new FileReader()
      fileReader.onload = () => { // 파일리더가 뭔가를 로드해왔을 때 함수블록을 실행된다
        this.image2 = fileReader.result
        // this.image1 = fileReader.result
      }
      fileReader.readAsDataURL(file) // 데이터에서 url을 끌고 오는 것
    },
    onFileChange2 (file) {
      // if ((event.target.files[0]['type']).split('/')[0] === 'image') {

      this.file = file.target.files[0]
      this.getImage2(this.file)
      // }
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
  .title1{
    margin-top: 3%;
    margin-bottom: 2%;
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 17px;
  }
  .p_title{
    font-size: 17px;
  }
  .p_title1{
    margin-top: 5%;
    font-size: 17px;
  }
  .combo{
    width: 35%;
    margin-left: -3%;
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
    margin-bottom: 5%;
    color: transparent;
    width: 70%;
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
    margin-left: 8%;
    max-width: 100%;
    margin-bottom: 5%;
    width: 630px;
    height: 350px;
    border-radius: 15px;
    border: 1px solid #707070;
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

  </style>
