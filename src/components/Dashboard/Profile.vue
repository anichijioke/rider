<template>
  <div class="container rounded bg-white mt-5">
    <div class="row">
      <div class="col-md-4 border-right">
        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
          <img
            class="rounded-circle mt-5"
            src="https://i.imgur.com/0eg0aG0.jpg"
            width="90"
          /><span class="font-weight-bold"
            >{{ user.firstname }} {{ user.lastname }}</span
          ><span class="text-black-50">{{ user.email }}</span
          ><span></span>
        </div>
      </div>
      <div class="col-md-8">
        <div class="p-3 py-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <div class="d-flex flex-row align-items-center back">
              <i class="fa fa-long-arrow-left mr-1 mb-1"></i>
              <h6>Back to home</h6>
            </div>
            <!-- <h6 class="text-right">Edit Profile</h6> -->
          </div>
          <div class="row mt-2">
            <div class="col-md-12">
              <input
                type="text"
                class="form-control"
                placeholder="first name"
                v-model="user.firstname"
                value=""
              />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <input
                type="text"
                class="form-control"
                placeholder="Last name"
                v-model="user.lastname"
                value=""
              />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <input
                type="text"
                class="form-control"
                placeholder="Email"
                v-model="user.email"
                disabled
                value=""
              />
            </div>
          </div>
          <div class="mt-5 text-right">
            <button class="btn btn-primary profile-button" type="button">
              <router-link to="/homepage/update-profile" class="text-white"
                >Edit Profile</router-link
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Profile',
  components: {},
  data() {
    return {
      user: '',
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      currentUser: firebase.auth().currentUser,
    }
  },
  computed: {
    initials () {
      if (!this.user.firstname && !this.user.lastname) return ''
      return `${this.user.firstname}`
    },
    loggedUser () {
      const currentUser = this.currentUser
      console.log(currentUser, 'in computed')
      return currentUser
    },
  },
  methods: {
    getUser () {
      const currentUser = firebase.auth().currentUser
      return currentUser
    },
  },
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // this.user = user
        console.log(user, 'main user')
        var db = firebase.firestore()
        db.collection('users')
          .get()
          .then((querySnapshot) => {
            console.log(querySnapshot, 'query')
            querySnapshot.forEach((doc) => {
              // console.log(doc.data(), 'in fb')
              if (user && doc.data().email === user.email) {
                this.user = doc.data()
                console.log(this.user.lastname, 'user')
              }
            })
          })
        console.log(user, 'user logged')
      } else {
        console.log('logged out')
      }
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main-div {
  background: rgb(99, 95, 95);
  width: 60%;
  margin: 4rem auto;
  padding-bottom: 4rem;
  border-radius: 15px;
}
.sign-up {
  color: black;
}

.get-started {
  padding-top: 4rem;
}
.submit1 {
  text-align: center;
  /* margin: 5rem 0; */
}
.form-control {
  padding: 1.8rem 0.75rem !important;
}
body {
  font-size: 5px !important;
}
.mt-4 {
  margin-top: 4rem !important;
}
.form-group.check-form {
  margin-top: 4rem;
}
.bottom-btn {
  margin-top: 5rem !important;
}
.image {
  height: 150px;
  width: 150px;
  border-radius: 100%;
  margin: 2rem auto;
  background: white;
  text-align: center;
  padding-top: 3.5rem;
  /* margin-top: 2rem; */
}
</style>
