<template lang="pug">
  .connection-link
    p スマホでQRコードをスキャンしてPCと接続します。
    QrcodeVue(:value="linkURL" size="200" level="H" className="qrcode")
    a.link-string(:href="linkURL" v-text="linkURL" target="_blank")
</template>

<script>
import QrcodeVue from 'qrcode.vue'

export default {
  name: 'ConnectionLink',
  components: {
    QrcodeVue
  },
  props: {
    localId: {
      type: String,
      default: ''
    }
  },
  computed: {
    linkURL () {
      return `${location.href}?q=${this.localId}`
    }
  }
}
</script>

<style scoped>
.qrcode {
  margin-bottom: 10px;
}
.link-string {
  font-size: .9em;
  color: #009688;
}
</style>
