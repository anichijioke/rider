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
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" id="log" href=""><span><i class="far fa-sign-in"></i></span> <router-link to="/login"> Log In </router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" id="log" href=""> <i class="far fa-envelope"></i><router-link to="/register"> Sign Up </router-link></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
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
</style>
