<template>
  <div>
    <div class="row mt-5 ml-4">
      <div class="col-sm-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="card">
          <div class="card-body">
            <div class="row d-flex justify-content-center">
              <div
                class="col-md-3 col-3 border border-success rounded-circle radius mr-md-1" style="height:30%; width:30%"
              >
                <p class="text-name font-weight-bold h2 my-4">{{ initials }}</p>
              </div>
              <div class="col-md-6">
                <h5>welcome back,</h5>
                <h4>{{ user.firstname }} {{user.lastname}}</h4>
              </div>
            </div>
            <div class="row mr-4">
              <p class="font-weight-bold col-md-9 px-0 col-xs-6 text-md-right">
                Balance
              </p>
              <p
                class="font-weight-bold col-md-2 px-0 col-xs-6 text-center text-md-left ml-2"
              >
                $0.00
              </p>
            </div>
            <div class="row">
              <div class="col-8 offset-md-4">
                <button class="btn btn-primary"> <router-link to="/homepage/payment" style="color:white; text-decoration:none"> Deposit Funds </router-link></button>
              </div>
            </div>
              <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Connect Rider </h5>
                    <!-- <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button> -->
                  </div>
                  <div class="modal-body">
                    <RequestRiderModal/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <button class="btn btn-danger rounded-pill" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo"><h5 class="text-white"> Request Rider</h5></button>
      </div>
    </div>
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-md-6" style="height: 300">
        <GChart
          type="ColumnChart"
          :data="chartData"
          :options="chartOptions"
          :height="400"
        />
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import { GChart } from 'vue-google-charts'
import RequestRiderModal from '../RequestRiderModal'
export default {
  components: {
    GChart,
    RequestRiderModal
  },
  name: 'dashboard',
  data () {
    return {
      user: {},
      chartData: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017'
        },
        height: '400'
      }
    }
  },
  computed: {
    initials () {
      if (!this.user.firstname && !this.user.lastname) return ''
      return `${this.user.lastname.charAt(0)}${this.user.firstname.charAt(0)}`
    }
  },
  created () {
    const currentUser = firebase.auth().currentUser
    console.log(currentUser, 'usser')
    var db = firebase.firestore()
    db.collection('users').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(doc.data(), 'in fb')
        if (currentUser && doc.data().email === currentUser.email) {
          this.user = doc.data()
          console.log(this.user.firstname, 'user')
        }

        // console.log(currentUser.email, 'user email')
        // this.users.push(doc.data())
        // console.log(doc)
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, ' => ', doc.data())
      })
    })
  }
}
</script>

<style scoped>
.radius {
  margin-left: 10px;
}
</style>
