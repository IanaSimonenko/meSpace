<template lang="pug">
  #app
    .card(v-for="message in messages")
      .card-header
        button.btn.btn-clear.float-right(@click="deleteMessage(message)")
        .card-title
        .card-subtitle
      .card-body
</template>


<script>
import { mapGetters } from 'vuex'

export default {
  name: 'message-list',
  computed: mapGetters(['messages']),
  methods: {
    deleteMessage (messages) {
      this.$store.dispatch('deleteMessage', messages)
    }
  },
  beforeMount () {
    this.$store.dispatch('getMessage')
  }
}
</script>

<style>
  header {
    margin-top: 50px;
  }
</style>
