<template lang="pug">
  .text-input
    p 以下のテキストボックスに入力した内容が接続先へリアルタイムに反映されます。
    el-row
      el-col(
        :xs="24"
        :sm="{ span: 22, offset: 1 }"
        :md="{ span: 20, offset: 2 }"
        :lg="{ span: 18, offset: 3 }"
        :xl="{ span: 16, offset: 4 }"
      )
        textarea(
          :value="text"
          @input="updateText"
          autocapitalize="none"
          autocomplete="off"
        )
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    connection: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      text: ''
    }
  },
  created () {
    this.connection
      .on('data', data => {
        this.text = data
      })
  },
  methods: {
    updateText (e) {
      this.text = e.target.value
      this.connection.send(this.text)
    }
  }
}
</script>

<style scoped>
textarea {
  width: 100%;
  height: 300px;
  resize: none;
}
</style>
