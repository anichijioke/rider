<template>
  <div>
        <!-- <NavBar/> -->
        <div id="banner-main">
           <div id="banner-text">
              <h1 class="find">Find Rider, Get Hired</h1>
              <h3 class="relaxe">Relaxe and let our team of experts do the job</h3>
              <h4 class="relaxe">Customers satisfaction is our concern</h4>
              <div id="button">
                <button class="button button2">Hire</button>
                <button class="button button1">Work</button>
              </div>
          </div>
        </div>
          <!-- .........How it works........... -->
          <div id="work-flow">
              <h2 class="how-it-works">How it works</h2>
              <div class="hover-line"></div>
              <p class="title">Hire freelancers for hourly or fixed-bid jobs, Manage your projects and Payout safely.</p>
                <!--............... Our services......... -->
            <div class="container-3">
                <div class="services">
                    <div class="icon-1">
                        <img src="../assets/search-account.png" alt="" height="35%" width="35%">
                    </div>
                    <h2 class="text-services">Find</h2>
                    <p class="body-text">Post a job and find quality logistic riders. You will find a range of top-level experts, from designers to developers, writers, and more.</p>                     <a href="#">learn more</a>
                </div>
                <div class="services">
                    <div class="icon-1">
                        <img src="../assets/hire.jpg" alt="" height="30%" width="30%">
                    </div>
                    <h2 class="text-services">Hire</h2>
                    <p class="body-text">Browse freelancer profiles and invite your favorite candidates to submit bids. You can review and hire your favorite.</p>
                    <a href="#">learn more</a>
                </div>
                <div class="services">
                    <div class="icon-1">
                        <img src="../assets/work.png" alt="" height="40%" width="40%">
                    </div>
                     <h2 class="text-services">Work</h2>
                    <p class="body-text">Manage riders effectively. You can chat and share information through safe Message Room, create milestones and more.</p>
                    <a href="#">learn more</a>
                </div>
                <div class="services">
                    <div class="icon-1">
                       <img src="../assets/pay.png" alt="" height="35%" width="35%">
                    </div>
                    <h2 class="text-services">Pay</h2>
                    <p class="body-text">Pay your freelancer by the hour, or a fixed price for the contract when you are 100% satisfied with deliverables.</p>
                    <a href="#">learn more</a>
                </div>
          </div>
          <!-- .................................... -->
       </div>
  </div>

</template>

<script>
// import NavBar from './NavBar'
export default {
  name: 'HelloWorld',
  components: {
    // NavBar
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #banner-main {
  display: flex;
}
.find{
  color:#fff;
  font-family: 'Frank Ruhl Libre', serif;
  font-size: 5rem;
  text-align: center;
  font-weight: bolder;
}
.relaxe{
  color: #fff;
  padding: 15px 0;
}
#banner-text{
  display: flex;
  justify-content: center;
  margin:auto;
  margin-top: 14rem;
  /* background: rgb(72, 83, 72); */
  width: 45%;
  flex-direction: column;
}

.button{
    border: none;
    color:#000;
    padding-top: 22px;
    padding-bottom: 22px;
    padding-left: 70px;
    padding-right: 60px;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    margin: 8px 9px;
    transition-duration: 0.4s;
    cursor: pointer;
    border-radius: 0.3rem;
}
.button1:hover {
  background-color: #4caf50;
  color: white;
}

.button2:hover {
  background-color:  white;
  color: black;
}

.button2 {
  background-color:#008cba;
  color: white;
  font-weight: bolder;
}
#work-flow{
  background : white;
  width: 100%;
  height:auto;
  margin-top: 9rem;
  position:relative;
  -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
   box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
}
#work-flow:before, #work-flow:after{
  content:"";
    position:absolute;
    z-index:-1;
    -webkit-box-shadow:0 0 20px rgba(0,0,0,0.8);
    -moz-box-shadow:0 0 20px rgba(0,0,0,0.8);
    box-shadow:0 0 20px rgba(0,0,0,0.8);
    top:0;
    bottom:0;
    left:10px;
    right:10px;
    -moz-border-radius:100px / 10px;
    border-radius:100px / 10px;

}

.how-it-works {
    font-family: 'Frank Ruhl Libre', serif;
    font-size: 40px;
    font-weight:bold;
    padding: 80px 0px 20px;
    color: #000;
    }
    .title{
      font-family: 'Frank Ruhl Libre', serif;
      font-size: 25px;
      padding: 15px 0;
    }
    .hover-line {
      border-top: 3px solid #2d3b81;
      height: 1px;
      width: 24px;
      margin: auto;
    }

 /* ..................container-3.......................... */
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

.text-services {
  color: #000;
  text-align: center;
  padding-top: 2rem;
}

.body-text {
  padding-left: 5rem;
  padding-right: 3rem;
  text-align: center;
  color: #8c8a8a;
  font-family: 'Frank Ruhl Libre', serif;
}
.icon-1 {
  margin-top: 3rem;
}

</style>
