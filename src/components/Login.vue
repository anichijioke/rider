<template>
    <div id="main-div">
        <h4 class="get-started">Log in and get to work</h4>
        <form class="needs-validation ml-4 mr-4 mt-4" novalidate>
            <div class="form-row">
                <div class="col-md-12 mb-3">
                <!-- <label for="validationTooltipUsername">First Name</label> -->
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
            <div class="form-row">
                <div class="col-md-12 mb-3">
                <!-- <label for="validationTooltipUsername">First Name</label> -->
                <div class="input-group">
                    <div class="input-group-prepend">
                    <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                    </div>
                    <input type="text" class="form-control" v-model="password" id="validationTooltipUsername" placeholder="Password" aria-describedby="validationTooltipUsernamePrepend" required>
                    <div class="invalid-tooltip">
                    Please choose a unique and valid username.
                    </div>
                </div>
                </div>
            </div>
            <div class="container-chk">
                <div class="chk-box">
                    <div class="checker">
                      <input class="chk-input" type="checkbox">
                    </div>
                    <div class="rem">
                      <label for="remember"> Remember me</label><br>
                    </div>
                 </div>
                <div class="password"> <a href=""><router-link to="/forgot-password"> Forgot password? </router-link></a></div>
            </div>
         </form>
         <div class="col-md-10 mb-3 login">
          <p v-if="loginError" class="text-danger">Login Failed</p>
          <a href="#" id="login-1" @click="login">Log in <i class="fas fa-circle-notch fa-spin ml-3" v-if="loading"></i> </a></div>
         <p class="sign-up">Don't have an account? <a href="#" class="signUp"><router-link to="/register"> Sign Up </router-link></a></p>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Login',
  components: {
  },
  data () {
    return {
      email: '',
      password: '',
      loading: false,
      loginError: false
    }
  },
  methods: {
    login () {
      this.loading = true
      // console.log('jjjj')
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          const currentUser = firebase.auth().currentUser
          console.log(currentUser, 'current-user')
          const db = firebase.firestore()
          if (currentUser) {
            db.collection('users')
              .get()
              .then((querySnapshot) => {
                // console.log('query...', querySnapshot)
                querySnapshot.forEach((doc) => {
                  console.log(doc, 'in fb')
                  if (currentUser.email === doc.data().email) {
                    console.log(doc.data().role)
                    if (doc.data().role === 'business') {
                      this.$router.push('homepage/dashboard')
                    } else {
                      alert('welcome to riders dashboard')
                    }
                  }
                })
              })
          }
          this.loading = false
          // Signed in
          // var user = userCredential.user
          // this.$router.push('homepage/dashboard')
          console.log(userCredential)
          localStorage.setItem('token', userCredential.user.refreshToken) // to store the token
          // ...
        })
        .catch((error) => {
          this.loading = false
          this.loginError = true
          console.log(error)
          //   var errorCode = error.code
          //   var errorMessage = error.message
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
.container-chk{
    display: flex;
    margin-top:1.5rem;
}
.chk-box{
    /* background: red ; */
    display: flex;
    width: 60%;
    padding-right: 9rem;
    margin-right: 6px;
}
input.chk-input{
    height: 1.3rem;
    width: 1.3rem;
    padding-top: 5rem;
}
div.checker{
    display: flex;
}
div.rem{
    padding-left: 2px;
}
.password{
    padding-left:2.4rem;
}
.login{
    background:#2D3B81;
    margin: 1.5rem auto;
    padding: 12px;
    color:#fff;
}
.sign-up{
    text-align: center;
    padding-top: 2rem;
}
#login-1{
    color: #fff;
    text-decoration: none;
}
.login:hover {
    background-color: #000;
}
.signUp{
    text-decoration: none;
    color: #000;
}
.danger{
  color: red;
}
</style>
