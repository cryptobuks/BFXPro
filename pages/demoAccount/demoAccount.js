import Navbar from '~/components/Navbar/Navbar.vue'
import Footer from '~/components/Footer/Footer.vue'
import Header from '~/components/Header/Header.vue'

export default {
  name: 'demoAccount',
  components: {
    Navbar,
    Footer,
    Header
  },
  data () {
    return {
      titleName: 'Prueba una Cuenta Demo antes de empezar',
      imgRoute: require('../../assets/img/DemoAccount/laptop-header.svg'),
      buttonName: 'QUIERO FORMAR PARTE'
    }
  }
}
