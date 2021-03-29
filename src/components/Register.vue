<template>
    <div id="main-div">
        <h4 class="get-started">Let’s get started!</h4>
        <h3>First, tell us what you’re looking for.</h3>
         <div class="container-3">
                <div class="services">
                    <div class="icon-1">
                        <img src="../assets/search-account.png" alt="" height="35%" width="35%">
                    </div>
                    <h3 class="text-services">I want to hire a rider.</h3>
                    <p class="body-text">Find, collaborate with</p>
                    <p class="body-text">and pay an expert.</p>
                    <button class="btn btn-primary reg-button"><router-link to="/register/business" class="business-hire">Hire</router-link></button>
                    <p></p>
                </div>
                <div class="services or">
                    <h2 class="icon-1 style-or">OR</h2>
                </div>
                  <div class="services">
                    <div class="icon-1">
                        <img src="../assets/search-account.png" alt="" height="35%" width="35%">
                    </div>
                    <h3 class="text-services">I’m looking for jobs.</h3>
                    <p class="body-text">Find a job, provide service</p>
                    <p class="body-text">and make money.</p>
                    <button class="btn btn-primary reg-button"> <router-link to="/register/rider" class="business-hire">Work</router-link></button>
                    <p id="null"></p>
                </div>
          </div>
    </div>
</template>

<script>
export default {
  name: 'Register',
  components: {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main-div{
   background: #fff;
   width: 90%;
   /* margin-top: 8rem; */
   margin:8rem auto;
}

.container-3 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.services {
  /* flex: 1; */
  width: 20%;
  min-width: 200px;
}

.or{
    margin-top: 9rem;
}

.style-or{
    font-size: 3rem;
    color: rgba(0, 0, 0, 0.439);
}

.text-services {
  color: rgba(0, 0, 0, 0.604);
  text-align: center;
  padding-top: 2rem;
}
.get-started, .icon-1{
    padding-top: 4rem;
}
.reg-button{
    padding: 5px;
    width: 7rem;
    font-size: 18px;
    margin-top: 2rem;
}
#null{
    padding-top: 3rem ;
}

.body-text {
    margin: 0em;
}

.business-hire{
  text-align: center;
  text-decoration: none;
  color: #fff;
}

/* ............media queries................ */
@media screen and (max-width: 414px) {
  .services.or {
    display: none !important;
  }
}

</style>
