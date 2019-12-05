import Navbar from '~/components/Navbar/Navbar.vue'
import Footer from '~/components/Footer/Footer.vue'
import Header from '~/components/Header/Header.vue'
import Ribbon from '~/components/Ribbon/Ribbon.vue'

export default {
  name: 'account',
  components: {
    Navbar,
    Footer,
    Header,
    Ribbon
  },
  data () {
    return {
      titleName: 'Comercie con su Smartphone o Tablet',
      imgRoute: require('../../assets/img/Account/cellphone.png'),
      buttonName: 'QUIERO FORMAR PARTE'
    }
  }
}
