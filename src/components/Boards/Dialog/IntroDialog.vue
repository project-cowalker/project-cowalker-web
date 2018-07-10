<template>
  <v-dialog class="dialog_style" v-model="IntroDialog" max-width="850">
    <button class="intro-btn" slot="activator">
      <v-text class="mypage-text">작성하기</v-text>
    </button>
      <v-card>
        <form @submit.prevent="onloadIntro">
        <v-container class="v-container">
          <v-layout>
            <v-flex class="title">
              <p>소개 이미지</p>
            </v-flex>
          </v-layout>

          <v-layout class="content_title" row wrap justify-center>
            <carousel :per-page="5" :mouse-drag="true" class="carousel">
              <slide>
              <form class="imgsize">
                <div class="dropbox" v-if="!image">
                  <input class="input-image" type="file" :multiple="false" @change="onFileChange" accept="image/*"/>
                  <!--이미지만 선택가능-->
                </div>
                <img :src="image" v-if="image" alt="" class="newimg">
              </form>
              </slide>
              <slide>
              <form class="imgsize">
                <div class="dropbox" v-if="!image2">
                  <input class="input-image" type="file" :multiple="false" @change="onFileChange2" accept="image/*"/>
                  <!--이미지만 선택가능-->
                </div>
                <img :src="image2" v-if="image2" alt="" class="newimg"><!--이미지가 있으면 뜨도록-->
              </form>
              </slide>
              <slide>
                <form class="imgsize">
                  <div class="dropbox" v-if="!image3">
                    <input class="input-image" type="file" :multiple="false" @change="onFileChange3" accept="image/*"/>
                    <!--이미지만 선택가능-->
                  </div>
                  <img :src="image3" v-if="image3" alt="" class="newimg"><!--이미지가 있으면 뜨도록-->
                </form>
              </slide>
            </carousel>
            </v-layout>

          <v-flex x12 sm10 md8 lg3 offset-sm1 offset-md1>
            <p class="p_title">프로젝트 상세소개</p>
          </v-flex>

          <v-flex x12 sm10 md8 lg10 offset-sm1 offset-md1>
            <textarea class="textarea" cols="70" rows="7" placeholder="프로젝트에 대해 소개해주세요." v-model="explain"></textarea>
          </v-flex>
          <v-container text-xs-center>
            <v-layout justify-center>
              <button type="submit" class="btn-done">개설하기</button>
            </v-layout>
          </v-container>
        </v-container>
        </form>
      </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'IntroDialog',
  data () {
    return {
      image: null,
      image2: null,
      image3: null,
      arrayimg: [],
      explain: '',
      file: null,
      file2: null,
      file3: null
    }
  },
  methods: {
    onloadIntro () {
      const data = new FormData()
      data.append('contents', this.explain)
      // for (let i = 0; i < this.arrayimg.length; i++) {
      //   data.append('img', this.arrayimg[i].arrayimg)
      // }
      data.append('img', this.file)
      data.append('img', this.file2)
      data.append('img', this.file3)
      this.$store.dispatch('onloadIntro', data)
    },
    getImage (file) {
      const fileReader = new FileReader()
      fileReader.onload = () => { // 파일리더가 뭔가를 로드해왔을 때 함수블록을 실행된다
        this.image = fileReader.result
      }
      fileReader.readAsDataURL(file)// 데이터에서 url을 끌고 오는 것
      this.arrayimg.push({ arrayimg: this.file })
    },
    onFileChange (file) {
      this.file = file.target.files[0]
      this.getImage(this.file)
      console.log(file)
    },

    getImage2 (file2) {
      const fileReader = new FileReader()
      fileReader.onload = () => { // 파일리더가 뭔가를 로드해왔을 때 함수블록을 실행된다
        this.image2 = fileReader.result
      }
      fileReader.readAsDataURL(file2)// 데이터에서 url을 끌고 오는 것
      this.arrayimg.push({ arrayimg: this.file2 })
    },
    onFileChange2 (file2) {
      this.file2 = file2.target.files[0]
      this.getImage2(this.file2)
    },
    getImage3 (file3) {
      const fileReader = new FileReader()
      fileReader.onload = () => { // 파일리더가 뭔가를 로드해왔을 때 함수블록을 실행된다
        this.image3 = fileReader.result
      }
      fileReader.readAsDataURL(file3) // 데이터에서 url을 끌고 오는 것
      this.arrayimg.push({ arrayimg: this.file3 })
    },
    onFileChange3 (file3) {
      this.file3 = file3.target.files[0]
      this.getImage3(this.file3)
    }
  }
}
</script>

<style scoped>
  .intro-btn {
    width: 55px;
    border: 1px solid #707070;
    text-align: center;
    border-radius: 6px;
    font-size: 12.5px;
    background-color: #fcfcfc;
    margin-top: 30px;
    margin-left: 50px;
  }
  .p_title{
    margin-top: 20px;
    margin-left: 20px;
  }
  .carousel{
    background-color: #fcfcfc;
    width: 80%;
  }
  .textarea{
    resize: none;
    width: 92%;
    border-radius: 10px;
    background-color: #fcfcfc;
    border: 1px solid #dbdbdb;
    margin-left: 20px;
  }
  .input-image {
    max-width: 100%;
    color: transparent;
    width: 180px;
    height: 180px;
    opacity: 0.4%;
    background-color: lightgray;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: 20px;
  }
  .newimg {
    max-width: 100%;
    width: 180px;
    height: 180px;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: 30px;
  }
  .title{
    margin-top: 30px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    font-weight: bold;
  }
  .btn-done{
    font-size: 16px;
    width: 25%;
    height: 60px;
    border-radius: 19px;
    background-color: #F3FCFE;
    border: 1px solid #64DFFF;
    margin: 2%;
  }

</style>
