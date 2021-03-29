<template>
    <div id="main-div">
        <h4 class="get-started">Sign up as a Rider</h4>
        <h5>Looking to work? <a href="#" class="sign-up"> <a href="">Sign up as a business now</a></a></h5>
        <form class="needs-validation ml-4 mr-4 mt-4" novalidate >
            <div class="form-row">
                <div class="col-md-6 mb-3">
                <!-- <label for="validationTooltipUsername">First Name</label> -->
                <div class="input-group">
                    <div class="input-group-prepend">
                    <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                    </div>
                    <input type="text" class="form-control" v-model="firstname" id="validationTooltipUsername" placeholder="First Name" aria-describedby="validationTooltipUsernamePrepend" required>
                    <div class="invalid-tooltip">
                    Please choose a unique and valid username.
                    </div>
                </div>
                </div>
                <div class="col-md-6 mb-3">
                <!-- <label for="validationTooltipUsername">Username</label> -->
                <div class="input-group">
                    <div class="input-group-prepend">
                    <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                    </div>
                    <input type="text" class="form-control" v-model="lastname" id="validationTooltipUsername" placeholder="Last Name" aria-describedby="validationTooltipUsernamePrepend" required>
                    <div class="invalid-tooltip">
                    Please choose a unique and valid username.
                    </div>
                </div>
                </div>
            </div>
            <div class="form-row">
              <div class="col-md-12 mb-3">
                <!-- <label for="validationTooltip03">City</label> -->
                <input type="text" class="form-control" v-model="email" id="validationTooltip03" placeholder="Email" required>
                <div class="invalid-tooltip">
                  Please provide a valid city.
                </div>
              </div>
            </div>
            <div class="form-row">
                <div class="col-md-6 mb-3">
                <!-- <label for="validationTooltipUsername">Username</label> -->
                <div class="input-group">
                    <div class="input-group-prepend">
                    <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                    </div>
                    <input type="text" class="form-control" v-model="username" id="validationTooltipUsername" placeholder="Username" aria-describedby="validationTooltipUsernamePrepend" required>
                    <div class="invalid-tooltip">
                    Please choose a unique and valid username.
                    </div>
                </div>
                </div>
                <div class="col-md-6 mb-3">
                <!-- <label for="validationTooltipUsername">Username</label> -->
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
            <div class="form-group check-form">
              <div class="form-check">
                <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required>
                <label class="form-check-label" for="invalidCheck3">
                  Agree to terms and conditions
                </label>
                <div class="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <button class="btn btn-primary submit1" type="submit" @click="registerBusiness">Get Started</button>
         </form>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'RegisterBusiness',
  components: {
  },
  data () {
    return {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      role: 'riders'
    }
  },
  methods: {
    registerBusiness (e) {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          console.log(user)
          alert(`Account created for ${user.user.email}`)
          var db = firebase.firestore()
          db.collection('users').add({
            firstname: this.firstname,
            lastname: this.lastname,
            username: this.username,
            email: this.email,
            role: this.role
          })
            .then((docRef) => {
              this.$router.push('/login')
              console.log(docRef.first)
              console.log('Document written with ID: ', docRef.id)
            })
            .catch((error) => {
              console.error('Error adding document: ', error)
            })
        },
        err => {
          alert(err.message)
        })
      e.preventDefault()
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main-div{
   background: #fff;
   width: 50%;
   margin:8rem auto;
   padding-bottom: 4rem;
}
.sign-up{
    color: black;
}

.get-started{
  padding-top: 4rem;
}
.submit1{
  text-align:center;
  /* margin: 5rem 0; */
}
.form-control {
      padding: 1.8rem .75rem !important;
}
body{
  font-size: 5px !important;
}
.mt-4{
  margin-top: 4rem!important;
}
.form-group.check-form{
  margin-top: 4rem;
}
.bottom-btn{
  margin-top: 5rem !important;
}

</style>
