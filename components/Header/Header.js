export default {
  name: 'Header',
  props: {
    title: String,
    img: String,
    button: String
  },
  data () {
    return {
      titleName: this.title,
      imgRoute: this.img,
      buttonName: this.button
    }
  },
  methods: {
  }
}
