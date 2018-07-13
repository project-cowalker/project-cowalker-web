<template>
  <v-dialog class="dialog_style" v-model="MypageDialog" max-width="950">
    <button class="mypage-btn" slot="activator">
      <v-text class="mypage-text">수정하기</v-text>
    </button>

    <form @submit.prevent="onUploadMypage">
      <v-card>
        <v-container class="v-container">
          <v-container class="content_title">
            <v-flex  justify-center offset-sm1 offset-md2>
            <v-layout justify-center>
              <v-flex x12>
              <form class="imgsize">
                <div class="dropbox" v-if="!image">
                  <input class="back-image" type="file" :multiple="false" @change="onFileChange" accept="image/*"/>
                  <!--이미지만 선택가능-->
                </div>
                <img :src="image" v-if="image" alt="" class="newimg">
              </form>
              </v-flex>
              <v-flex x12>
              <form class="imgsize">
                <div class="dropbox" v-if="!image2">
                  <input class="input-image" type="file" :multiple="false" @change="onFileChange2" accept="image/*"/>
                  <!--이미지만 선택가능-->
                </div>
                <img :src="image2" v-if="image2" alt="" class="newimg_pro"><!--이미지가 있으면 뜨도록-->
              </form>
              </v-flex>
            </v-layout>
            </v-flex>
          </v-container>

          <v-layout>
            <v-flex x12 sm12 md12 lg12 offset-md3>
            <span class="text_area" style="color:#707070;">프로젝트 이미지</span>
            </v-flex>
            <v-flex x12 sm12 md12 lg12 offset-md1>
            <span class="text_area" style="color:#707070;">프로필 이미지</span>
            </v-flex>
          </v-layout>

          <v-layout row wrap>
            <v-flex x12 sm10 md8 lg10 offset-sm1 offset-md2 class="resume">
              <span>이력서</span>
            </v-flex>
            <v-flex x12 sm10 md8 lg12 offset-md2 class="resume">
              <input class="input_p" type="text" v-model="portfolio_url"/>
            </v-flex>
          </v-layout>

          <v-layout row wrap>
            <v-flex x12 sm10 md8 lg10 offset-sm1 offset-md2>
              <p class="p_title">한줄 소개</p>
            </v-flex>
            <v-flex x12 sm10 md8 lg12 offset-md3>
              <textarea class="textarea" cols="70" rows="5" v-model="introduce"></textarea>
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex x12 sm10 md8 lg1 offset-sm1 offset-md2>
              <v-text class="p_title">역할</v-text>
            </v-flex>
            <v-flex x12 sm10 md8 lg7>
              <v-combobox v-model="position" :items="positions" class="combo"></v-combobox>

              <template class="combo" slot="selection" slot-scope="data">
                <v-chip :selected="data.selected" :disabled="data.disabled" :key="JSON.stringify(data.job)"
                        class="v-chip--select-multi " @input="data.parent.selectItem(data.job)">
                  <v-avatar class="accent white--text">
                    {{ data.job.slice(0, 1).toUpperCase() }}
                  </v-avatar>
                  {{ data.job}}
                </v-chip>
              </template>
            </v-flex>

          </v-layout>
          <v-layout>
            <v-flex x12 sm10 md8 lg1 offset-sm1 offset-md2>
              <p class="p_title">목적</p>
            </v-flex>
            <v-flex x12 sm10 md8 lg7>
              <v-combobox v-model="aim" :items="purposes" class="combo"></v-combobox>
              <template class="combo" slot="selection" slot-scope="data">
                <v-chip :selected="data.selected" :disabled="data.disabled" :key="JSON.stringify(data.purpose)"
                        class="v-chip--select-multi " @input="data.parent.selectItem(data.purpose)">
                  <v-avatar class="accent white--text">
                    {{ data.purpose.slice(0, 1).toUpperCase() }}
                  </v-avatar>
                  {{ data.purpose }}
                </v-chip>
              </template>
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex x12 sm10 md8 lg1 offset-sm1 offset-md2>
              <p class="p_title">분야</p>
            </v-flex>
            <v-flex x12 sm10 md8 lg7>
              <v-combobox v-model="department" :items="departments" class="combo"></v-combobox>
              <template class="combo" slot="selection" slot-scope="data">
                <v-chip :selected="data.selected" :disabled="data.disabled" :key="JSON.stringify(data.field)"
                        class="v-chip--select-multi " @input="data.parent.selectItem(data.field)">
                  <v-avatar class="accent white--text">
                    {{ data.field.slice(0, 1).toUpperCase() }}
                  </v-avatar>
                  {{ data.field }}
                </v-chip>
              </template>
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex x12 sm10 md8 lg1 offset-sm1 offset-md2>
              <p class="p_title">지역</p>
            </v-flex>
            <v-flex x12 sm10 md8 lg7>
              <v-combobox v-model="area" :items="locations" class="combo"></v-combobox>
              <template class="combo" slot="selection" slot-scope="data">
                <v-chip :selected="data.selected" :disabled="data.disabled" :key="JSON.stringify(data.location)"
                        class="v-chip--select-multi " @input="data.parent.selectItem(data.location)">
                  <v-avatar class="accent white--text">
                    {{ data.location.slice(0, 1).toUpperCase() }}
                  </v-avatar>
                  {{ data.location }}
                </v-chip>
              </template>
            </v-flex>
          </v-layout>

          <v-container text-xs-center>
            <v-layout justify-center>
              <!--<v-layout justify-center>-->
                <!--<button type="submit" class="btn-done">수정완료</button>-->
              <!--</v-layout>-->
              <!--<form >-->
              <input class="btn-done" value="수정완료" type="submit"  />
              <!--</form>-->
            </v-layout>
          </v-container>
        </v-container>
      </v-card>
    </form>
  </v-dialog>
</template>

<script>
export default {
  name: 'MypageDialog',
  data () {
    return {
      email: '',
      background: null,
      name: '',
      point: 0,
      position: '',
      introduce: '',
      portfolio_url: '',
      aim: '',
      department: '',
      area: '',
      file: null,
      image: null,
      image2: null,
      locations: [
        '전체', '서울', '경기도', '강원도', '충청도', '경상도', '전라도', '제주도'],
      purposes: [
        '전체', '창업', '공모전 참여', '스터디', '사이드 프로젝트', '창작', '기타'],
      departments: [
        '전체', '블록체인', 'IoT', '인공지능', '디자인', '컨텐츠', '기타'],
      positions: [
        '전체', 'PM', '기획자', '디자이너', '개발자', '기타']
    }
  },
  methods: {
    onUploadMypage () {
      const data = new FormData()
      data.append('profile_img', this.background)
      data.append('background_img', this.file)
      data.append('point', this.point)
      data.append('introduce', this.introduce)
      data.append('portfolio_url', this.portfolio_url)
      data.append('aim', this.aim)
      data.append('department', this.department)
      data.append('area', this.area)

      this.$store.dispatch('onUploadMypage', data)
      window.location.reload(true)
    },
    getImage (file) {
      const fileReader = new FileReader()
      fileReader.onload = () => { // 파일리더가 뭔가를 로드해왔을 때 함수블록을 실행된다
        this.image = fileReader.result
      }
      fileReader.readAsDataURL(file) // 데이터에서 url을 끌고 오는 것
    },
    onFileChange (file) {
      this.file = file.target.files[0]
      this.getImage(this.file)
    },
    getImage2 (background) {
      const fileReader = new FileReader()
      fileReader.onload = () => { // 파일리더가 뭔가를 로드해왔을 때 함수블록을 실행된다
        this.image2 = fileReader.result
      }
      fileReader.readAsDataURL(background) // 데이터에서 url을 끌고 오는 것
    },
    onFileChange2 (background) {
      this.background = background.target.files[0]
      this.getImage2(this.background)
    }
  }
}
</script>

<style scoped>

  .resume{
    margin-top: 4%;
  }
  .dialog_style {
    border-radius: 25px;
  }

  .mypage-btn {
    width: 55px;
    border: 1px solid #707070;
    text-align: center;
    border-radius: 6px;
    font-size: 12.5px;
    background-color: #fcfcfc;
  }

  .textarea {
    max-width: 100%;
    margin-bottom: 5%;
    resize: none;
    margin-left: -3%;
    width: 610px;
    height: 80px;
    border-radius: 10px;
    background-color: #fcfcfc;
    border: 1px solid #dbdbdb;
  }

  .p_title {
    margin-top: 15px;
  }

  .input-image {
    max-width: 100%;
    display: flex;
    color: transparent;
    width: 60%;
    height: 180px;
    opacity: 0.4%;
    background-color: lightgray;
    margin-top: 23%;
<<<<<<< HEAD
=======

>>>>>>> develop
  }

  .back-image {
    margin-right: 60px;
    max-width: 100%;
    display: flex;
    color: transparent;
    width: 70%;
    height: 250px;
    opacity: 0.4%;
    background-color: lightgray;
    margin-top: 4%;
  }

  .newimg {

    margin-top: 4%;
    max-width: 100%;
    margin-bottom: 5%;
    width: 70%;
    height: 250px;
  }

  .newimg_pro {
    margin-top: 20%;
    max-width: 100%;
    margin-bottom: 5%;
    width: 60%;
    height: 180px;

  }

  .regular {
    text-align: center;
    width: 100px;
    height: 40px;
    margin-bottom: 5%;
    margin-left: 20px;
    border-bottom: 1px solid #999;
  }

  .combo {
    width: 35%;
    margin-left: -3%;
  }

  .input_p1 {
    margin-top: -20px;
    margin-left: 8%;
    max-width: 100%;
    height: 40px;
    width: 20%;
    border-radius: 8px;
    background-color: #fcfcfc;
    border: 1px solid #dbdbdb;
  }

  .input_p {
    margin-left: 8%;
    max-width: 100%;
    height: 40px;
    width: 80%;
    border-radius: 8px;
    background-color: #fcfcfc;
    border: 1px solid #dbdbdb;
  }

  .btn-done {
    font-size: 15px;
    width: 180px;
    height: 65px;
    border-radius: 20px;
    background-color: #F3FCFE;
    border: 2px solid rgb(106, 213, 240);
    margin: 5%;
  }
</style>
