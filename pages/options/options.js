import Navbar from '~/components/Navbar/Navbar.vue'
import Footer from '~/components/Footer/Footer.vue'
import Withdrawals from '~/components/Withdrawals/Withdrawals.vue'
import Deposits from '~/components/Deposits/Deposits.vue'

export default {
  name: 'Options',
  components: {
    Navbar,
    Footer,
    Withdrawals,
    Deposits
  },
  data () {
    return {
      deposit: true,
      withdrawal: false
    }
  },
  methods: {
    changeDepositStyle () {
      this.deposit = true
      this.withdrawal = false
    },
    changeWithdrawalStyle () {
      this.withdrawal = true
      this.deposit = false
    }
  }
}
