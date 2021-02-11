<template>
  <div id="app">
    <NavBar/>
    <!-- <HelloWorld/> -->
    <!-- <Register/> -->
    <!-- <NavBar/> -->
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}
body{
  background-size: cover;
  background-image: linear-gradient(rgb(97 89 128 / 50%), rgba(1, 1, 2, .1) ),
  url('./assets/back.jpg');
  background-repeat: no-repeat;
  font-family: "Source Sans Pro", sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
