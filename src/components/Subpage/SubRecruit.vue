<template> <!--이 화면 자체에 다이얼로그 띄우기-->
   <v-container  class="v-container">
        <v-layout v-for="recruit in allrecruitview" :key="recruit.recruit_idx">
            <v-flex x12 sm10 md8 lg8 offset-sm1>     <!--v-for="" recruit로 해줄 것-->
                <v-card flat class="left_card" width="90%" :to="'/boards/' + project_idx + '/subrecruit/' + recruit.recruit_idx">

                        <v-card-title primary-title>
                            <v-card flat class="position" width="120px"><h4 class="positon">{{recruit.position}}</h4></v-card>
                            <div class="number_btn"><button class="title_btn" disabled depressed><h4 class="number">{{ recruit.number }}명</h4></button></div>
                            <div class="hidden-xs-only"><h4>{{recruit.task}}</h4></div>
                        </v-card-title>

                </v-card>
            </v-flex>

            <v-flex>
                <v-card flat class="dday_card" width="60px">
                   <h4 class="dday">D{{recruit.dday}}</h4>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>

</template>

<script>
import {mapGetters} from 'vuex'
export default {
  props: ['project_idx'],
  data: () => ({
  }),
  computed: {
    ...mapGetters({
      boards: 'allBoards',
      allrecruitview: 'allrecruitView'
    })
  },
  created () {
    this.$store.dispatch('recruitingView', this.project_idx) // 서버로부터 게시글 다 받아오기
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
.left_card {
    margin-top: 50px;
    margin-right: 80px;
    margin-left: 20px;
    height: 60px;
    width: 70%;
    border: 1px solid #64DFFF;
    border-radius: 10px;
}
.dday_card {
    margin-top: 50px;
    height: 60px;
    margin-right: 100px;
    border: 1px solid #64DFFF;
    border-radius: 10px;
}
h4 {
  margin-top: 20px;
}
#item_list{
    margin-top: 10vh;
}

.store{
    margin-right: .5vw;
}
.loadCompleted {
  font-size: 2rem;
  text-align: center;
}
.loadMore {
  text-align: center;
}
.post-button.btn-sm {
  width: inherit;
  padding: 1rem 2rem;
}

.dday {
  text-align: center;
  margin-bottom: 2%;
}
.position {
  margin-left: 10%;
  margin-bottom: 1%;
}
.hidden-xs-only {
  margin-left: 29%;
  margin-bottom: 1%;
}
.number {
  margin-top: 1%;
}
.v-container {
  margin-bottom: 5%;
}
.title_btn {
    width: 35px;
    height: 35px;
    background: #d1ecff;
    background-color: rgb(193, 243, 255);
    border-radius: 20px;
  }
.number_btn {
  margin-top: 10px;
  border-radius: 20px;
}
</style>
