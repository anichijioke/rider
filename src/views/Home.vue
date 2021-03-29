<template>
  <div>
    <div class="container-fluid">
      <div class="row d-flex">
        <div class="transition" style="background:#7FAAD9">
          <Navbar />
        </div>
        <div class=" bg-white routerView">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Dashboard/NavbarDashboard'
export default {
  components: { Navbar },
  name: 'Home',
  data () {
    return {
      // user: {}
    }
  }
  // created () {
  //   const currentUser = firebase.auth().currentUser
  //   console.log(currentUser)
  //   var db = firebase.firestore()
  //   db.collection('users').get().then((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       if (doc.data().email === currentUser.email) {
  //         this.user = doc.data()
  //       }
  // this.users.push(doc.data())
  // console.log(doc)
  // doc.data() is never undefined for query doc snapshots
  // console.log(doc.id, ' => ', doc.data())
  //     })
  //   })
  // }
}
</script>
<style scoped>
  .transition{
     transition: width 2s, transform 2s, height 2s;
     width: 200px;
  }
  .transition:hover{
  width: 200px;
  transform: none;
  /* height: 400px; */
}
.routerView{
  width: calc(100% - 200px);
}
@media screen and (max-width: 768px) {
 .transition{
   width: 0px;
   overflow: hidden;
 }
 .transition:hover{
    transform: none;
  }
 .routerView{
   width: 100%;
 }
}
</style>
