import Vue from 'vue'
import io from 'socket.io-client'

const VueSocketIOExt = require('vue-socket.io-extended').default
const socket = io('')

export default () => {
  Vue.use(VueSocketIOExt, socket)
}
