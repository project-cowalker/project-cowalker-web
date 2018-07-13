<template>
  <v-container class="v-container">
    <v-container>
      <form @submit.prevent="onSendfilter">
      <v-layout justify-center>
        <v-flex class="search_space" xs12 sm10 md8 lg11 offset-sm1>

            <v-flex xs10 lg12>
            <input class="search-wrapper" type="text" v-model="search" placeholder="검색" />
            <v-btn flat type="submit" class="btncss"><h5>검색</h5></v-btn>
            </v-flex>

          <v-container d-inline-flex class="filter" fluid grid-list-xl>
            <v-layout justify-center>
                    <v-flex xs10 sm6 d-flex>
                      <v-select class="v-select" :items="items" label="목적" v-model="aim"></v-select>
                    </v-flex>
                    <v-flex xs10 sm6 d-flex>
                      <v-select :items="fields" label="분야" v-model="department"></v-select>
                    </v-flex>
                    <v-flex xs10 sm6 d-flex>
                      <v-select :items="rules" label="역할" v-model="position"></v-select>
                    </v-flex>
                    <v-flex xs10 sm6 d-flex>
                      <v-select :items="areas" label="지역" v-model="area"></v-select>
                    </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
        <v-flex>
        </v-flex>
      </v-layout>
      </form>
    </v-container>
    <v-container class="v-container">
    <v-layout d-inline-flex v-for="board in boards" :key="board.id">
      <v-flex xs6 sm10 md8 lg8>
        <v-card  :to="'/boards/' + board.project_idx" class="v-card" width="265px">
            <v-card-media  class="card_image" v-if="board.img_url" height="220px" width="265px" :src="board.img_url"></v-card-media>
              <v-flex class="v-card-content">
                <h5 class="board_title">{{board.title}}</h5> <!--class="headline mb-0"-->
                <h6 class="date">{{board.area}} · {{board.department}} · {{board.aim}}</h6>
              </v-flex>
            <v-card-actions>
            </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      show: false,
      search: '',
      items: ['창업', '공모전 참여', '스터디', '사이드 프로젝트', '창작', '기타'],
      fields: ['블록체인', 'IOT', '인공지능', '디자인', '컨텐츠', '기타'],
      rules: ['PM', '기획', '디자이너', '개발자', '기타'],
      areas: ['서울', '경기도', '충청도', '강원도', '전라도', '경상도', '제주도'],
      aim: '',
      department: '',
      position: '',
      area: ''
    }
  },
  computed: { // state에 있는 값 가져오기
    ...mapGetters({
      boards: 'allBoards'
    }),
    filteredList () { // search filter
      return this.boards.filter(post => {
        return post.title.toLowerCase().includes(this.search.toLowerCase()) ||
            post.department.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
    onSendfilter () {
      const object = {
        aim: this.aim,
        area: this.area,
        position: this.position,
        department: this.department,
        keyword: this.search
      }
      console.log(object)
      this.$store.dispatch('sendFilter', object)
    }
  },
  created () {
    this.$store.dispatch('getAllboards') // 서버로부터 게시글 다 받아오기
  }
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }

  #home{
    text-align: center;
    background-color: white;
  }
  header{
    margin-top: 5vh;
  }
  .v-container{
    margin:auto;
    background-color: white;
  }
  .v-card {
    margin: auto;
    width: 300px;
    margin: 7px;
    margin-left: 35%;
    border:thistle 0.1px solid;
    border-radius: 8px;
  }
  .card_iamge {
    border-radius: 8px;
  }
  .board_title {
    text-align: center;
    border: 1px solid #64DFFF;
    width: 50%;
    margin: auto;
    margin-top: 20px;
  }
  .btncss {
    width: 80px;
    height: 35px;
    border: 1px solid #b6b6b6;
    text-align: center;
    border-radius: 6px;
    font-size: 15px;
    background-color: #ffffff;
    margin-left: 8px;
    color: rgb(114, 114, 114);
  }
  .date
  {
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: center;
  }
  #item_list{
    margin-top: 10vh;
  }
  .store{
    margin-right: .5vw;
  }
  .lookbtn{
    padding-left: 60px;
  }
  .v-card-content {
    margin: auto;
  }
  .search-wrapper {
    border: 1px solid #ccc;
    font-size: 12px;
    padding: 5px;
    height: 40px ;
    margin-top: 4%;
    margin-bottom: 4%;
    width: 50%;
    margin-left: 17%;
    border-radius: 4px;
    background-color: white;
    display: inline-block;
  }

  .search-btn {
    border-radius: 4px;
    border: 1px solid #ccc;
    height: 40px;
    margin-top: 10px;
    margin-bottom: 90px;
    width: 40px;
    margin-left: 25px;
    background: url("https://postfiles.pstatic.net/MjAxODA3MDJfMjUx/MDAxNTMwNTE3MTY0MDYx.zQfFuG95fQqQ32JryfopH5mhi437B5USyzhpiEO9zNAg.Cv0GnhnbvRZKQNzzlKAXAVVcl3oDvy8CXC4dRnEHfisg.PNG.rkdud410/filter_unclick_icon.png?type=w966");
    background-repeat: no-repeat;
    margin-right: 50px;
  }
  .fdfd {
    width: 30px;
  }
  .filter {
    width: 400px;
  }
  .v-select {
     border-bottom-color: blue;
  }
</style>
