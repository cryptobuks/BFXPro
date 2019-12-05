// import Vue from 'Vue'
/* eslint-disable */
export default {
  name: 'Counter',
  data: function () {
    return {
        countDownDate: 0,
        now: 0,
        distance: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        x: 0
    }
  },
  created () {
    setInterval(() => {
        this.counter()
   }, 1000);
  },
  methods: {
    counter () {
    this.countDownDate = new Date('Nov 9, 2019 00:00:00').getTime()
    this.now = new Date().getTime()
    this.distance = this.countDownDate - this.now
    this.days = Math.floor(this.distance / (1000 * 60 * 60 * 24))
    this.hours = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    this.minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60))
    this.seconds = Math.floor((this.distance % (1000 * 60)) / 1000)
    }
  }
}
