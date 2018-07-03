<template>
    <p>모집부분입니다.</p>
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
