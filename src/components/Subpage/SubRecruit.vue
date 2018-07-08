<template> <!--이 화면 자체에 다이얼로그 띄우기-->
   <v-container  class="v-container">
        <v-layout v-for="recruit in allrecruitview" :key="recruit.recruit_idx">
            <v-flex x12 sm10 md8 lg7 offset-sm1 offset-md2>
                <v-card flat class="left_card" width="90%"
                :to="'/boards/' + this.project_idx + '/subrecruit' + allrecruitview.recruit_idx"> <!--flat :to="'/boards/' + board.id" class="v-card"-->

                        <v-card-title primary-title>
                            <v-card flat class="position" width="120px"><h3 class="positon">{{recruit.position}}</h3></v-card>
                            <div class="number"><h3 class="number_h3">{{recruit.number}}명</h3></div>
                            <div class="task"><h3>{{recruit.task}}</h3></div>
                        </v-card-title>

                </v-card>
            </v-flex>

            <v-flex>
                <v-card flat class="dday_card" width="60px">
                   <h3 class="dday">D{{recruit.dday}}</h3>
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
      allrecruitview: 'allrecruitView',
      user: 'user'

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
h3 {
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
}
.position {
  margin-left: 10%;
}
.number_h3 {
  background: rgb(210, 246, 255);
  border-radius: 20px;
}
.task {
  margin-left: 40%;
}

</style>
