import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'es',
    messages: {
      en: require('@/locales/en.json'),
      es: require('@/locales/es.json'),
      fr: require('@/locales/fr.json'),
      it: require('@/locales/it.json'),
      jp: require('@/locales/jp.json'),
      pt: require('@/locales/pt.json'),
      ru: require('@/locales/ru.json'),
      zh: require('@/locales/zh.json')
    }
  })
}
