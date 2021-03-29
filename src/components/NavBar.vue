<template>
    <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="" id="log"><router-link to="/"> Ridon </router-link></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" id="menu-button"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-if="!isLoggedIn">
            <a class="nav-link js-scroll-trigger" id="log" href=""><span><i class="fa fa-sign-in" aria-hidden="true"></i></span> <router-link to="/login"> Log In </router-link></a>
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <a class="nav-link js-scroll-trigger" id="log" href=""> <i class="far fa-envelope"></i><router-link to="/register"> Sign Up </router-link></a>
          </li>
          <li v-if="isLoggedIn"><button @click="logout" class="btn black">Logout</button></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'NavBar',
  data () {
    return {
      // currentUser: false,
      hasToken: false
    }
  },
  methods: {
    logout () {
      firebase.auth().signOut().then(() => {
        localStorage.removeItem('token')
        this.$router.push('/login')
      })
    }
  },
  computed: {
    isLoggedIn () {
      // const holdToken = localStorage.getItem('token')
      return this.hasToken
    }
  },
  mounted () {
    setInterval(() => {
      const holdToken = localStorage.getItem('token')
      // console.log(holdToken)
      if (holdToken) {
        this.hasToken = true
      } else {
        this.hasToken = false
      }
    }, 2000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
/* eslint-disable eol-last */
<style scoped>
   #mainNav{
       background:#fff;
       line-height: 4rem;
   }
   #log{
       color:#000;
       margin-left: 4rem;
       font-size:1.2rem;
   }
   #menu-button{
    color: #000;
   }

   #mainNav{
    background : white;
    width: 100%;
    height:auto;
    -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
   }

  /* ............media queries................ */
@media screen and (max-width: 414px) {
   #mainNav{
    background: rgb(199, 169, 169);
  }
}
</style>
