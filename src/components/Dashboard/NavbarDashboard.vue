<template>
  <div>
    <div class="container h-100 mt-5 transition">
      <div class="menu-icon pl-3 d-flex d-lg-none" @click="menuIcon"><i class="mr-3 fa fa-bars text-primary" aria-hidden="true"></i></div>
      <div class="row" :class="{'d-none':!menu}">
        <ul class="list-unstyled">
          <li class="py-3 font-weight-bold link-size text-white" v-for="(link, index) in links" :key="index">
            <router-link :to="link.path" class="text-white"><i :class="`mr-3 ${link.icon}`"></i> {{ link.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarDashboard',
  components: {},
  data () {
    return {
      menu: true,
      links: [
        { name: 'Dashboard', path: '/homepage/dashboard', icon: 'fa fa-tachometer-alt' },
        { name: 'Profile', path: '/homepage/profile', icon: 'far fa-user' },
        { name: 'Riders', path: '/', icon: 'far fa-user' },
        { name: 'Deposit', path: '/', icon: 'fas fa-university' },
        { name: 'Logout', path: '/', icon: 'fas fa-sign-out-alt' }
      ]
    }
  },
  methods: {
    menuIcon () {
      this.menu = !this.menu
    }
  }
}
</script>

<style scoped>
.link-size {
  font-size: 20px;
}
div.menu-icon{
  /* background: black; */
  width: 30%;
  position: absolute;
  color: red;
  /* padding: 30px; */
}
</style>
