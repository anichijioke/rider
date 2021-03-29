<template>
  <div class="container mt-5">
    <h2>Proceed to payment...</h2>
    <hr />
    <form class="mt-5" @click.prevent="submit">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="form-group text-left"><label for="name">Name:</label>
          <input
            type="name"
            class="form-control"
            id="name"
            placeholder="Enter full name"
            name="text"
            v-model="name"
          />
        </div>
      </div>
      </div>
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="form-group text-left">
            <label for="email">Email:</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              v-model="email"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="form-group text-left">
            <label for="email">Amount:</label>
            <input
              type="number"
              class="form-control"
              id="amount"
              placeholder="Enter amount"
              name="amount"
              v-model="amount"
            />
          </div>
        </div>
      </div>
      <div class="container">
        <!-- <div class="row">
          <div class="col-md-6 offset-md-3 px-2 mb-4">
            <button type="submit" class="btn btn-primary w-100">Submit</button>
          </div>
        </div> -->
        <div class="row">
          <div class="col-md-12  px-6 mb-4">
            <paystack
              :amount="amount * 100"
              :email="email"
              :paystackkey="PUBLIC_KEY"
              :reference="reference"
              :callback="processPayment"
              :close="close"
            >
              <div class="btn btn-primary px-4">Make Payment</div>
          </paystack>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import paystack from 'vue-paystack'
export default {
  name: 'Paystack',
  components: {
    paystack
  },
  data () {
    return {
      name: '',
      email: '',
      amount: '',
      PUBLIC_KEY: 'pk_test_27da8cec96b27f6a56da940c842326352057284e'
    }
  },
  computed: {
    reference () {
      let text = ''
      const possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      for (let i = 0; i < 10; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
      }
      return text
    }
  },
  methods: {
    processPayment: () => {
      window.alert('Payment recieved')
    },
    close: () => {
      console.log('You closed checkout page')
    },
    submit () {
      console.log('You just submitted', this.name, this.amount)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
/* eslint-disable eol-last */
<style scoped>
</style>
