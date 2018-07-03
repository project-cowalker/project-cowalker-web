<template>
  <v-form>
    <v-container grid-list-md text-xs>
    <v-layout>
      <v-flex class="title">
        <p>모집하기</p>
      </v-flex>
    </v-layout>

    <v-layout d-line-flex>
      <v-flex lg1>
        <p class="p_title">모집 역할</p>
      </v-flex>
      <v-flex x12 sm10 md8 lg12>
        <v-combobox
          v-model="select"
          :items="fields"
          class="combo"
        ></v-combobox>

        <template class="combo" slot="selection" slot-scope="data">
          <v-chip
            :selected="data.selected"
            :disabled="data.disabled"
            :key="JSON.stringify(data.field)"
            class="v-chip--select-multi "
            @input="data.parent.selectItem(data.field)"
          >
            <v-avatar class="accent white--text">
              {{ data.field.slice(0, 1).toUpperCase() }}
            </v-avatar>
            {{ data.field }}
          </v-chip>
        </template>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex lg1>
        <p class="p_title">모집 기간</p>
      </v-flex>
      <v-flex x12 sm10 md8 lg10>
        <form>
          <input type="text" class="regular">
        </form>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex lg1>
        <p class="p_title">모집 인원</p>
      </v-flex>
      <v-flex x12 sm10 md8 lg10>
        <form>
          <input type="text" class="regular">
        </form>
      </v-flex>
    </v-layout>

    <v-layout d-line-flex>
      <v-flex lg1>
        <p class="p_title">활동</p>
      </v-flex>
      <v-flex x12 sm10 md8 lg10>
        <v-combobox
          v-model="select"
          :items="fields"
          class="combo"
        ></v-combobox>

        <template class="combo" slot="selection" slot-scope="data">
          <v-chip
            :selected="data.selected"
            :disabled="data.disabled"
            :key="JSON.stringify(data.field)"
            class="v-chip--select-multi "
            @input="data.parent.selectItem(data.field)"
          >
            <v-avatar class="accent white--text">
              {{ data.field.slice(0, 1).toUpperCase() }}
            </v-avatar>
            {{ data.field }}
          </v-chip>
        </template>
      </v-flex>
    </v-layout>

    <v-layout>
        <p class="p_title">필요역량 및 기술</p>
      <v-flex x12 sm10 md8 lg10>
        <form>
          <input type="text" class="regular_long" autofocus style="margin-left: -3%">
        </form>
      </v-flex>
    </v-layout>

    <v-layout>
    <v-flex>
      <p class="p_title">요구경력 및 경험</p>
    </v-flex>
    <v-flex x12 sm10 md8 lg12>
      <form>
        <input type="text" class="regular_long" style="margin-left: -4%">
      </form>
    </v-flex>
  </v-layout>

    <v-layout>
      <v-flex lg1>
        <p class="p_title">우대사항</p>
      </v-flex>
      <v-flex x12 sm10 md8 lg10>
        <form>
          <input type="text" class="regular_long" style="margin-left: 8%">
        </form>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex lg1>
        <p class="p_title">활동기간 및 시간</p>
      </v-flex>
      <v-flex x12 sm10 md8 lg10>
        <form>
          <input type="text" class="regular">
        </form>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex lg1>
        <p class="p_title">혜택 및 보상</p>
      </v-flex>
      <v-flex x12 sm10 md8 lg10>
        <form>
          <input type="text" class="regular_long" style="margin-left: 8%">
        </form>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex lg1>
        <p class="p_title">위치</p>
      </v-flex>
      <v-flex x12 sm10 md8 lg10>
        <form>
          <input type="text" class="regular">
        </form>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex lg1>
        <p class="p_title" >코멘트</p>
      </v-flex>
      <v-flex x12 sm10 md8 lg10>
        <form>
          <input type="text" class="regular_long" style="margin-left: 8%">
        </form>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex lg1>
        <p class="p_title">질문</p>
      </v-flex>
      <v-flex x12 sm10 md8 lg10>
        <form>
          <input type="text" class="regular_long" style="margin-left: 8%">
        </form>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex lg1>
        <p class="p_title">  </p>
      </v-flex>
      <v-flex x12 sm10 md8 lg10>
        <form>
          <input type="text" class="regular_long" style="margin-left: 8%">
        </form>
      </v-flex>
    </v-layout>

    <v-layout justify-center style="margin: 10%">
        <button type="submit" class="btn-done">
          완료
        </button>
    </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'Recruit',
  data () {
    return {
      select: '',
      fields: [
        '전체',
        '서울',
        '경기도',
        '강원도',
        '충청도',
        '경상도',
        '전라도',
        '제주도'
      ]
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
  .p_title{
    font-size: 18px;
    width: 200px;
  }
  .combo{
    width: 30%;
    margin-left: 8%;
  }
  .regular{
    width: 30%;
    margin-left: 8%;
    height: 40px;
    border-bottom: 1px solid #999;
  }
  .regular_long{
    width: 60%;
    height: 40px;
    border: none;
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
</style>
