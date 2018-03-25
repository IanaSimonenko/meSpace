<template lang="pug">
  form.form-horizontal(@submit="submitForm")
    .form-group
      .col-3
        label.form-label Body
      .col-9
        textarea.form-input(v-model="body" rows=8 placeholder="Type your message...")
    .form-group
      .col-3
      .col-9
        button.btn.btn-primary(type="submit") Create
</template>

<script>
export default {
  name: 'create-message',
  data () {
    return {
      'title': '',
      'body': ''
    }
  },
  methods: {
    submitForm (event) {
      this.createMessage()

      this.title = ''
      this.body = ''

      event.preventDefault()
    },
    createMessage () {
      this.$store.dispatch('createMessage', { title: this.title, body: this.body })
    }
  }
}
</script>
