<template lang="pug">
  #app
    h1 フリック入力ちゃん
    p スマホのフリック入力でPCに文字入力できるサービスです。
    ConnectionLink(v-if="shouldShowLink" :localId="localId")
    TextInput(v-else-if="shouldShowTextarea" :connection="dataConnection")

</template>

<script>
import Peer from 'skyway-js'
import key from './skyway-key'
import ConnectionLink from './components/ConnectionLink'
import TextInput from './components/TextInput'

export default {
  name: 'App',
  components: {
    ConnectionLink,
    TextInput
  },
  created () {
    this.parseQuery()
    this.setupPeer()
  },
  data () {
    return {
      loading: null,
      peer: null,
      dataConnection: null,
      localId: '',
      remoteId: ''
    }
  },
  computed: {
    shouldShowLink () {
      return this.localId && !this.remoteId && !(this.dataConnection && this.dataConnection.open)
    },
    shouldShowTextarea () {
      return this.dataConnection && this.dataConnection.open
    }
  },
  methods: {
    parseQuery () {
      // URLのクエリをパースして、remoteIdを取得
      const pairs = location.search.substring(1).split('&')
      for (const pair of pairs) {
        const kv = pair.split('=')
        if (kv[0] === 'q') {
          this.remoteId = kv[1]
        }
      }
    },
    setupPeer () {
      // Peerオブジェクトを生成
      this.peer = new Peer({
        key,
        debug: 3
      })
        .on('open', id => {
          this.localId = id
          if (this.remoteId) {
            // リモートIDが存在するなら接続を要求する
            const connection = this.peer.connect(this.remoteId, {
              label: 'textarea'
            })
            this.connect(connection)
          }
        })
        .on('connection', connection => {
          this.connect(connection)
        })
        .on('error', this.handleError)
    },
    connect (connection) {
      this.dataConnection = connection
      connection.on('open', () => {
        connection
          .on('close', () => this.warning(`${connection.remoteId}との接続が切断されました。`))
          .on('error', this.handleError)
      })
    },
    message (message, type = 'info') {
      this.$message({
        showClose: true,
        message,
        type
      })
    },
    warning (message) {
      this.message(message, 'warning')
    },
    handleError (error) {
      this.message(error.message, 'error')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #555;
  margin-top: 30px;
}
</style>
