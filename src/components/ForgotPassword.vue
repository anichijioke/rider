<template>
    <div id="main-div">
        <h4 class="get-started">Forgot Password</h4>
        <p class="email-text">Please enter your username or email. You wil receive an email with a link to set a new password</p>
        <form class="needs-validation ml-4 mr-4 mt-4" novalidate>
            <div class="form-row">
                <div class="col-md-12 mb-3">
                <div class="input-group">
                    <div class="input-group-prepend">
                    <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                    </div>
                    <input type="text" class="form-control" v-model="email" id="validationTooltipUsername" placeholder="Email" aria-describedby="validationTooltipUsernamePrepend" required>
                    <div class="invalid-tooltip">
                    Please choose a unique and valid username.
                    </div>
                </div>
                </div>
            </div>
            <div id="main">
                <div class="back">Back to log in</div>
                <div class="reset col-md-4 mb-2" @click="resetPassword"><p>Reset Password</p></div>
            </div>
         </form>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'ForgotPassword',
  components: {
  },
  data () {
    return {
      email: ''
    }
  },
  methods: {
    resetPassword () {
      const auth = firebase.auth()
      console.log(auth)
      auth.sendPasswordResetEmail(this.email).then(() => {
      // Email sent
        alert(`Email sent to ${this.email}`)
        console.log('Email sent')
      }).catch(() => {
        console.log('Error in sending the mail')
      // An error happened.
      })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main-div{
   background: #fff;
   width: 30%;
   margin:8rem auto;
   padding-bottom: 4rem;
}
.form-control {
  padding: 1.4rem .75rem !important;
}
.get-started{
    padding: 3rem 0;
}
#main{
    display: flex;
    justify-content:space-between;
    /* width: 100%; */
}
div.reset{
    /* margin-left: auto; */
    display: flex;
    width: 27%;
    background:#2D3B81;
    color: #FFF;
    text-align: center;
    padding-top: 9px;
    /* justify-content: flex-end; */
    /* align-items: flex-end; */
}
div.back{
    /* margin-right: auto; */
     width: 25%;
     padding-top: 9px;
    /* display: flex; */
    /* justify-content: flex-start; */
}
.email-text{
    width: 90%;
    text-align:justify;
    padding-left: 3rem;
}
</style>
