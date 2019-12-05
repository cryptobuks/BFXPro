export default {
  name: 'LanguageSwitcher',
  data: () => ({
    languages: [],
    selectedLanguage: ''
  }),
  created () {
    this.languages = this.$i18n.availableLocales
    this.selectedLanguage = this.$i18n.fallbackLocale
    this.$store.commit('i18n/SET_LANG', this.selectedLanguage)
    console.log(this.languages)
  },
  methods: {
    changeLanguage (lang) {
      this.$i18n.locale = lang
      this.$store.commit('i18n/SET_LANG', this.$i18n.locale)
      console.log(lang)
    }
  }
}
