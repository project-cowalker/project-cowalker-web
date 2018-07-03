<template>
    <p>소개부분입니다.</p>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  props: ['id'], // board id
  data: () => ({
  }),
  computed: {
    ...mapGetters({
      boards: 'allBoards',
      user: 'user'
    })

  }
}
</script>
