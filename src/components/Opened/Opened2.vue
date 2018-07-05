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
          <p class="p_title">프로젝트 소개</p>
        </v-flex>
      </v-layout>
      <v-layout d-line-flex >
      <!--:navigate-to="someLocalProperty"-->
        <v-flex x12 sm10 md8 lg12>
          <form class="imgsize">
            <div class="dropbox" v-if="!image">
              <input class="input-image" type="file" :multiple="false" @change="onFileChange" accept="image/*" /> <!--이미지만 선택가능-->
            </div>
            <img :src="image" v-if="image" alt="" class="newimg"><!--이미지가 있으면 뜨도록-->
          </form>
          <carousel :per-page="10" :mouse-drag="true" >
            <slide>
              <form class="imgsize">
                <div class="dropbox" v-if="!image">
                  <input type="file" class="input-image" :multiple="true" @change="onFileChange" accept=".jpg, .jpeg, .png" /> <!--이미지만 선택가능-->
                </div>
                <img :src="image" v-if="image" alt="" class="newimg"><!--이미지가 있으면 뜨도록-->
              </form>
            </slide>
            <slide>
              <form class="imgsize">
                <div class="dropbox" v-if="!image">
                  <input type="file" class="input-image" :multiple="true" @change="onFileChange" accept=".jpg, .jpeg, .png" /> <!--이미지만 선택가능-->
                </div>
                <img :src="image" v-if="image" alt="" class="newimg"><!--이미지가 있으면 뜨도록-->
              </form>
            </slide>
            <slide>
              <form class="imgsize">
                <div class="dropbox" v-if="!image">
                  <input type="file" class="input-image" :multiple="true" @change="onFileChange" accept=".jpg, .jpeg, .png" /> <!--이미지만 선택가능-->
                </div>
                <img :src="image" v-if="image" alt="" class="newimg"><!--이미지가 있으면 뜨도록-->
              </form>
            </slide>
          </carousel>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex x12 sm10 md8 lg12 offset-sm1 offset-md2>
          <input class="input_p" type="text" placeholder="  제목"/>
        </v-flex>
      </v-layout>

      <v-flex x12 sm10 md8 lg10 offset-sm1 offset-md2>
        <textarea class="textarea" cols="70" rows="25"></textarea>
      </v-flex>

      <v-container text-xs-center>
        <v-layout justify-center>
          <button type="button">
            <router-link to="./opened1">
              <img class="btn-img" src="https://blogfiles.pstatic.net/MjAxODA3MDJfMjA4/MDAxNTMwNDYxNTM3MjA1.LCGAzK0uuXPuqGIfWWBBdzKJWV1gqAZiZzIr5XBwWfkg.IXpE65vngRxnfL2NUzjcqsbaJlfr4U2VR4pymJXyQnog.PNG.peach404/left_btn.png"/>
            </router-link>
          </button>

          <button type="submit" class="btn-done">
            개설하기
          </button>
        </v-layout>
      </v-container>
    </v-container>
  </v-form>
</template>

<script>
export default {
  methods: {
    handleSlideClick (dataset) {
      console.log(dataset.index, dataset.name)
    },
    getImage (file) {
      const fileReader = new FileReader()
      fileReader.onload = () => { // 파일리더가 뭔가를 로드해왔을 때 함수블록을 실행된다
        this.image = fileReader.result
      };
      fileReader.readAsDataURL(file) // 데이터에서 url을 끌고 오는 것
    },
    onFileChange (event) {
      // if ((event.target.files[0]['type']).split('/')[0] === 'image') {
      //for (let i = 0, numFiles = this.file.length; i < numFiles; i++) {
        this.file = event.target.files[0]
        this.getImage(this.file)
      }
      // }
    }
}
</script>
<style scoped>
  .title{
    margin-top: 35px;
    margin-bottom: 60px;
    display: flex;
    justify-content: center;
    font-weight: bold;
  }
  .p_title{
    font-size: 17px;
    margin-bottom: 50px;
  }
  .input_p {
    border-radius: 10px;
    width: 80%;
    height: 50px;
    background-color: #fcfcfc;
    border: 1px solid #dbdbdb;
  }
  .textarea{
    resize: none;
    width: 80%;
    border-radius: 10px;
    margin-bottom: 50px;
    background-color: #fcfcfc;
    border: 1px solid #dbdbdb;
  }
  .btn-img{
    margin-bottom: 60px;
    width: 60px;
    height: 60px;
    margin-top: 10px;
    margin-right: 30px;
  }
  .btn-done{
    font-size: 16px;
    width: 30%;
    height: 65px;
    border-radius: 19px;
    background-color: #F3FCFE;
    border: 1px solid #64DFFF;
  }
  .imgsize{
    margin-right: 15px;
  }
  .input-image  {
    display: flex;
    max-width: 100%;
    margin-bottom: 70px;
    color: transparent;
    width: 250px;
    height: 250px;
    border-radius: 5px;
    //background-color: #E2E2E2;
  }
  .newimg{
    display: flex;
    max-width: 100%;
    margin-bottom: 70px;
    width: 250px;
    height: 250px;
    border-radius: 5px;
  }
</style>
