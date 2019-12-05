import Navbar from '~/components/Navbar/Navbar.vue'
import Footer from '~/components/Footer/Footer.vue'
import Header from '~/components/Header/Header.vue'
import Ribbon from '~/components/Ribbon/Ribbon.vue'

export default {
  name: 'privacy',
  components: {
    Navbar,
    Footer,
    Header,
    Ribbon
  },
  data () {
    return {
      titleName: 'Privacidad',
      imgRoute: require('../../assets/img/Legal/privacy.png'),
      buttonName: 'QUIERO FORMAR PARTE'
    }
  }
}
