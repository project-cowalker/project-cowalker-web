<template>

  <v-container class="v-container">
    <v-container >
      <v-layout justify-center>
        <v-flex class="search_space"  x12 sm10 md8 lg10 offset-sm1>
            <input class="search-wrapper" type="text" v-model="search" placeholder="검색" />
            <button type="submit" class="btncss">검색</button>
          <form @submit.prevent="onSendfilter">
          <v-container d-inline-flex class="filter"  fluid grid-list-xl>
            <v-layout justify-center>
              <v-flex xs12 sm6 d-flex>
                <v-select :items="items" label="목적" v-model="aim"></v-select>
              </v-flex>
              <v-flex xs12 sm6 d-flex>
                <v-select :items="fields" label="분야" v-model="department"></v-select>
              </v-flex>
              <v-flex xs12 sm6 d-flex>
                <v-select :items="rules" label="역할" v-model="position"></v-select>
              </v-flex>
              <v-flex xs12 sm6 d-flex>
                <v-select :items="areas" label="지역" v-model="area"></v-select>
              </v-flex>
            </v-layout>
          </v-container>
          </form>
        </v-flex>
        <v-flex >
        </v-flex>
      </v-layout>
    </v-container>

    <v-layout d-inline-flex v-for="board in filteredList" :key="board.id">
      <v-flex x12 sm10 md8 lg10 offset-sm1 offset-md2>
        <v-card flat :to="'/boards/' + board.project_idx" class="v-card" width="260px">
          <v-container fluid>
            <v-card-media  class="card_image" v-if="board.img_url" height="160px" width="260px" :src="board.img_url"></v-card-media>
            <v-card-title primary-title>
              <v-flex class="v-card-content">
                <h4>{{board.title}}</h4> <!--class="headline mb-0"-->
                <h6 class="date">{{board.area}} · {{board.department}} · {{board.aim}}</h6>
              </v-flex>
            </v-card-title>
            <v-divider></v-divider> <!--선긋기-->
            <v-card-actions>
              <v-spacer></v-spacer> <!--아이콘들 오른쪽 정렬-->
            </v-card-actions>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      show: false,
      search: '',
      items: ['전체', '창업', '공모전 참여', '스터디', '사이드 프로젝트', '창작', '기타'],
      fields: ['전체', '블록체인', 'IOT'],
      rules: ['전체', 'PM', '기획자', '디자이너'],
      areas: ['전체', '서울', '경기도', '인천'],
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
    onPopoverOpen () {
      console.log('popover open')
    },
    onSendfilter () {
      const data = new FormData()

      if (this.aim != null) {
        data.append('aim', this.aim)
      }
      if (this.area != null) {
        data.append('area', this.area)
      }
      if (this.position != null) {
        data.append('position', this.position)
      }
      if (this.department != null) {
        data.append('department', this.department)
      }
      this.$store.dispatch('sendFilter', data)
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
  }
  header{
    margin-top: 5vh;
  }
  .v-container{
    margin:auto;
  }
  .v-card {
    margin: auto;
    width: 300px;
    margin: 5px;
    border:thistle 0.8px solid;
    border-radius: 8px;
  }
  .card_iamge {
    border-radius: 8px;
  }
  h4 {
    text-align: center;
    border: 1px solid #64DFFF;
    width: 75%;
    margin: auto;
    margin-top: 20px;
  }
  .btncss {
    width: 80px;
    height: 30px;
    border: 1px solid #707070;
    text-align: center;
    border-radius: 6px;
    font-size: 15px;
    background-color: #fcfcfc;
    margin-left: 8px;
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
    padding: 10px;
    height: 40px ;
    margin-top: 10px;
    margin-bottom: 90px;
    width: 70%;
    margin-left: 12%;
    border-radius: 4px;
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
</style>
