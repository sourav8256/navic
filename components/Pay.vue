<script>
export default {
  props: ['order_details', 'customer_details'],
  data () {
    return {
      script: 'https://checkout.razorpay.com/v1/checkout.js'
    }
  },
  methods: {
    async loadRazorPay () {
      return new Promise(resolve => {
        const script = document.createElement('script')
        script.src = this.script
        script.onload = () => {
          resolve(true)
        }
        script.onerror = () => {
          resolve(false)
        }
        document.body.appendChild(script)
      })
    }
  },
  async created () {
    const result = await this.loadRazorPay()
    if (!result) {
      alert('Failed to load razorpay script')
      return
    }
    const options = {
      key: process.env.VUE_APP_RAZORPAY_ID,
      amount: 100,
      currency: 'INR',
      name: 'The name you want to be displayed on the razorpay payment screen',
      description: 'Description of the payment',
      // order_id: order.id,
      handler: function () {
        // It is function executed on success
      }
    //   prefill: {
    //     name: 'Your customer name',
    //     email: 'Your customer email',
    //     contact: 'Your customer contact'
    //   }
    }
    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
  }
}
</script>
