import Navbar from '~/components/Navbar/Navbar.vue'
import Footer from '~/components/Footer/Footer.vue'
import Header from '~/components/Header/Header.vue'
import Ribbon from '~/components/Ribbon/Ribbon.vue'

export default {
  name: 'legal',
  components: {
    Navbar,
    Footer,
    Header,
    Ribbon
  },
  data () {
    return {
      titleName: 'Conoce a fondo sobre los vuelcos',
      imgRoute: require('../../assets/img/Legal/legal.png'),
      buttonName: 'QUIERO FORMAR PARTE'
    }
  }
}
