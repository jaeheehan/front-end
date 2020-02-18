<template>
  <div></div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PageHeader',
  computed: {
    ...mapGetters([
      'user', 'hasBoards', 'personalBoards', 'teamBoards'
    ])
  },
  created () {
    this.$store.dispatch('getMyData')
  }
}
</script>

<style scoped>

</style>
