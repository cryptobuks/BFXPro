import Navbar from '~/components/Navbar/Navbar.vue'
import Footer from '~/components/Footer/Footer.vue'
import Header from '~/components/Header/Header.vue'
import Ribbon from '~/components/Ribbon/Ribbon.vue'

export default {
  name: 'cookies',
  components: {
    Navbar,
    Footer,
    Header,
    Ribbon
  },
  data () {
    return {
      titleName: 'Cookies',
      imgRoute: require('assets/img/Legal/cookies.png'),
      buttonName: 'QUIERO FORMAR PARTE'
    }
  }
}
