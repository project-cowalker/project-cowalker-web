<template>

  <v-container>
  <v-carousel class="carousel" hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>

  <v-flex>
    <v-card flat class="intro" width="100%" height="200px">
      <h3>소개</h3>
      <h4>{{allDetailView.explain}}</h4>
    </v-card>
  </v-flex>

  </v-container>

</template>
<script>
import {mapGetters} from 'vuex'

export default {
  props: ['project_idx'], // project_idx 값 넘기기
  data () {
    return {
      items: [
        {
          src: 'https://ppss.kr/wp-content/uploads/2015/10/%ED%98%91%EC%97%85_%EA%B7%B8%EB%9E%98%ED%94%84.jpg'
        },
        {
          src: 'https://blog.hmgjournal.com/upload/common/activeSquare/binary/201509021753813_V7DTEJRG.jpg'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      boards: 'allBoards',
      allDetailView: 'allDetailView'
    })
  },
  created () {
    this.$store.dispatch('getDetailView', this.project_idx) // 서버로부터 게시글 다 받아오기
  }
}
</script>

<style scoped>
.carousel {
    height: 320px;
    margin: 0;
}
.intro {
  margin-top: 40px;
  border:rgb(218, 217, 217) 1px solid;
  border-radius: 10px;
  margin-bottom: 5%;
}
h3 {
  margin-left: 5%;
  margin-top: 20px;
  border-bottom: 2.5px solid #81D4FA;
  width: 35px;
}
h4 {
  margin-left: 10%;
  margin-top: 3%;
  margin-right: 5%;
}
</style>
