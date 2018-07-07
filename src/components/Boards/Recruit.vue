<template>
  <v-form>
    <v-container grid-list-md text-xs>
    <v-layout>
      <v-flex class="title">
        <p>모집하기</p>
      </v-flex>
    </v-layout>

    <form @submit.prevent="onRecruit">
    <v-layout d-line-flex>
      <v-flex x12 sm10 md8 lg2 offset-sm1 offset-md1>
        <v-text class="p_title">&emsp;&emsp;&emsp;모집 역할 </v-text>
      </v-flex>
      <v-flex x12 sm10 md8 lg12>
        <v-combobox v-model="position" :items="departments" class="combo"></v-combobox>

        <template class="combo" slot="selection" slot-scope="data">
          <v-chip
            :selected="data.selected"
            :disabled="data.disabled"
            :key="JSON.stringify(data.department)"
            class="v-chip--select-multi "
            @input="data.parent.selectItem(data.department)"
          >
            <v-avatar class="accent white--text">
              {{ data.department.slice(0, 1).toUpperCase() }}
            </v-avatar>
            {{ data.department }}
          </v-chip>
        </template>
      </v-flex>

    </v-layout>

    <v-layout>
      <v-flex x12 sm10 md8 lg2 offset-sm1 offset-md1>
        <p class="p_title">&emsp;&emsp;&emsp;모집 기간</p>
      </v-flex>

      <v-layout d-line-flex>
      <!--시작날짜-->
        <v-flex x12 sm10 md8 lg3>
            <v-menu
              ref="menu1"
              :close-on-content-click="false"
              v-model="menu1"
              :nudge-right="40"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              max-width="290"
              min-width="290"
            >
              <v-text-field
                class="data_field"
                slot="activator"
                v-model="dateFormatted_start"
                persistent-hint
                label="시작날짜"
                prepend-icon=""
                @blur="start_date = parseDate(dateFormatted_start)"
              ></v-text-field>
              <v-date-picker v-model="start_date" no-title @input_start="menu1 = false"></v-date-picker>
            </v-menu>
        </v-flex>

        <!--종료날짜-->
        <v-flex x12 sm10 md8 lg3 offset-md1>
          <v-menu
            ref="menu1"
            :close-on-content-click="false"
            v-model="menu1"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            max-width="290px"
            min-width="290px"
          >
            <v-text-field
              class="data_field"
              slot="activator"
              v-model="dateFormatted_end"
              persistent-hint
              label="종료날짜"
              prepend-icon=""
              @blur="end_date = parseDate(dateFormatted)"
            ></v-text-field>
            <v-date-picker v-model="end_date" no-title @input_end="menu1 = false"></v-date-picker>
          </v-menu>
        </v-flex>

      </v-layout>
    </v-layout>
    <v-layout>
      <v-flex x12 sm10 md8 lg2 offset-sm1 offset-md1>
        <p class="p_title">&emsp;&emsp;&emsp;모집 인원</p>
      </v-flex>
      <v-flex x12 sm10 md8 lg12>
        <form>
          <input type="text" class="regular" v-model="number">
        </form>
      </v-flex>
    </v-layout>

    <v-layout d-line-flex>
      <v-flex x12 sm10 md8 lg2 offset-sm1 offset-md1>
        <p class="p_title">&emsp;&emsp;&emsp;&emsp;&emsp;활동</p>
      </v-flex>
      <v-flex x12 sm10 md8 lg12 >
        <input class="input_p" type="text" v-model="task"/>
      </v-flex>
    </v-layout>

      <v-layout>
        <v-flex x12 sm10 md8 lg2 offset-sm1 offset-md1>
          <p class="p_title">활동기간 및 시간</p>
        </v-flex>
        <v-flex x12 sm10 md8 lg12>
          <form>
            <input type="text" class="regular" v-model="activitiy">
          </form>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex x12 sm10 md8 lg2 offset-sm1 offset-md1>
          <p class="p_title">&emsp;&emsp;&emsp;활동 위치</p>
        </v-flex>
        <v-flex x12 sm10 md8 lg12 >
          <input class="input_p" type="text" v-model="area"/>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex x12 sm10 md8 lg2 offset-sm1 offset-md1>
          <p class="p_title">&emsp;&ensp;혜택 및 보상</p>
        </v-flex>
        <v-flex x12 sm10 md8 lg12>
          <v-flex x12 sm10 md8 lg12>
            <input class="input_p" type="text" v-model="reward"/>
          </v-flex>
        </v-flex>
      </v-layout>

      <v-layout>
      <v-flex x12 sm10 md8 lg2 offset-sm1 offset-md1>
        <p class="p_title">필요역량 및 기술</p>
      </v-flex>

      <v-flex x12 sm10 md8 lg12 >
        <input class="input_p" type="text" v-model="ability"/>
      </v-flex>
    </v-layout>

    <v-layout>
    <v-flex x12 sm10 md8 lg2 offset-sm1 offset-md1>
      <p class="p_title">&emsp;&ensp;경력 및 경험</p>
    </v-flex>
    <v-flex x12 sm10 md8 lg12>
        <v-flex x12 sm10 md8 lg12>
          <input class="input_p" type="text" v-model="career"/>
        </v-flex>
    </v-flex>
  </v-layout>

    <v-layout>
      <v-flex x12 sm10 md8 lg2 offset-sm1 offset-md1>
        <p class="p_title">&emsp;&emsp;&emsp;우대사항</p>
      </v-flex>
      <v-flex x12 sm10 md8 lg12>
          <v-flex x12 sm10 md8 lg12>
            <input class="input_p" type="text" v-model="preference"/>
          </v-flex>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex x12 sm10 md8 lg2 offset-sm1 offset-md1>
        <p class="p_title" >&ensp;&emsp;&emsp;&emsp;코멘트</p>
      </v-flex>
      <v-flex x12 sm10 md8 lg12>
        <v-flex x12 sm10 md8 lg10>
          <textarea class="textarea" cols="70" rows="10" v-model="comment"></textarea>
        </v-flex>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex x12 sm10 md8 lg2 offset-sm1 offset-md1>
        <p class="p_title">&emsp;&emsp;&emsp;&emsp;&emsp;질문</p>
      </v-flex>
    </v-layout>

      <ul class="list-group">
        <li class="list-group-item" v-for="(question,index) in questions" :key="index">
          <v-flex x12 sm10 md8 lg11 offset-md2 >
            <form>
              <input type="text" class="plus" v-model="adx[index]"/>
            </form>
          </v-flex>
        </li>
      </ul>

      <v-container text-xs-center>
        <v-layout justify-center>
          <button type="button" v-on:click="createBtn(adx,$event)">
              <img class="btn-img" src="https://blogfiles.pstatic.net/MjAxODA3MDRfMjY1/MDAxNTMwNzA2NjA1OTE3.6xxAPzQvc2DSHi4ws1LyT2eZPRLfaaHD3Jt16Pur5gEg.zwroeNnrRBffwvBFDNZNZgAI8IiSqbCmCt_VoDo4Fawg.PNG.peach404/plus_btn.png">
          </button>
        </v-layout>
      </v-container>

    <v-container text-xs-center>
        <v-layout justify-center>
          <button type="submit" class="btn-done">완료</button>
        </v-layout>
      </v-container>

    </form>
    </v-container>

  </v-form>
</template>

<script>
export default {
  data () {
    return {
      position: '', // 모집역할
      start_date: null,
      end_date: null,
      number: null,
      task: null,
      activitiy: null,
      reward: null,
      area: null,
      ability: null,
      career: null,
      preference: null,
      comment: null,
      menu1: false,
      departments: [
        '전체',
        'PM',
        '기획자',
        '디자이너',
        '개발자',
        '기타'
      ],
      questions: [
        ' ',
      ],
      adx: [

      ],
    }
  },
  computed: {
    computedDateFormatted_start () {
      return this.formatDate(this.start_date)
    },
    computedDateFormatted_end () {
      return this.formatDate(this.end_date)
    }
  },

  watch: {
    start_date (val) {
      this.dateFormatted_start = this.formatDate(this.start_date)
    },
    end_date (val) {
      this.dateFormatted_end = this.formatDate(this.end_date)
    }
  },
  methods: {
    formatDate (date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate (date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
    createBtn (adx, event) {
      if (event) {
        this.adx = adx
        this.questions.push({ questions: this.adx })
        this.event = null
      }
    },
    onRecruit () {
      const object = {
        project_idx: '5b3f3f28a989031a3ef84e3c', // project_idx를 props를 통해서 가져오기
        position: this.position,
        start_date: this.start_date,
        end_date: this.end_date,
        number: this.number,
        task: this.task,
        activitiy: this.activitiy,
        reward: this.reward,
        area: this.area,
        ability: this.ability,
        career: this.career,
        preference: this.preference,
        comment: this.comment,
        question_list: this.adx
      }

      console.log(object)
      this.$store.dispatch('recruiting', object)
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
  .textarea{
    resize: none;
    width: 90%;
    border-radius: 10px;
    margin-bottom: 50px;
    background-color: #fcfcfc;
    border: 1px solid #dbdbdb;
  }
  .input_p {
    width: 75%;
    height: 40px;
    margin-bottom: 5%;
    border-radius: 8px;
    background-color: #fcfcfc;
    border: 1px solid #dbdbdb;
  }
  .p_title{
    font-size: 17px;
    margin-top: 5%;
  }
  .combo{
    width: 30%;
    margin-bottom: 15px;
  }
  .regular{
    width: 33%;
    height: 40px;
    margin-bottom: 5%;
    border-bottom: 1px solid #999;
  }
  .btn-done{
    display: flex;
    justify-content: center;
    font-size: 16px;
    width: 30%;
    height: 65px;
    border-radius: 19px;
    background-color: #F3FCFE;
    border: 1px solid #64DFFF;
  }
  .data_field{
    margin-left: -15%;
  }
  .plus{
    width: 74%;
    height: 40px;
    border: none;
    margin-bottom: 20px;
    border-bottom: 1px solid #999;
    margin-left: 5%;
  }

  ul{
    list-style:none;
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
