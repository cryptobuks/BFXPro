import Navbar from '~/components/Navbar/Navbar.vue'
import Footer from '~/components/Footer/Footer.vue'
import Header from '~/components/Header/Header.vue'

export default {
  name: 'realAccount',
  components: {
    Navbar,
    Footer,
    Header
  },
  data () {
    return {
      titleName: 'Comienza abriendo una cuenta en vivo',
      imgRoute: require('../../assets/img/RealAccount/header-computer.svg'),
      buttonName: 'QUIERO FORMAR PARTE'
    }
  }
}
