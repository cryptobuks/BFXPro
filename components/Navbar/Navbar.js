import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.vue'

export default {
  name: 'Navbar',
  components: {
    LanguageSwitcher
  },
  data () {
    return {
      hoverAboutPopup: true,
      hoverAccountsPopup: true,
      hoverProductsPopup: true,
      hoverEducationPopup: true
    }
  },
  methods: {
    hoverAbout () {
      this.hoverAboutPopup = !this.hoverAboutPopup
    },
    hoverAccounts () {
      this.hoverAccountsPopup = !this.hoverAccountsPopup
    },
    hoverProducts () {
      this.hoverProductsPopup = !this.hoverProductsPopup
    },
    hoverEducation () {
      this.hoverEducationPopup = !this.hoverEducationPopup
    },
    hoverAll () {
      this.hoverAccounts()
      this.hoverAbout()
      this.hoverProducts()
      this.hoverEducation()
    }
  }
}
