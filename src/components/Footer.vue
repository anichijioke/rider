<template>
    <div id="main-div">
        <ul>
            <li> <a href="#">English</a></li>
            <li> <a href="#">Chinese</a></li>
            <li> <a href="#">Japan</a></li>
        </ul>
        <p>Copyright © 2021 Speedy Technology. All Rights Reserved.</p>
        <p>Address : Harju maakond, Tallinn, Lasnamäe linnaosa, Lasnamäe tn 4b-26, 11412, Nigeria</p>
        <p>Terms and Conditions  |  Privacy Policy</p>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  components: {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main-div{
    /* margin-top: 8rem; */
   background:#33393F;
   width: 100%;
}
p{
    color: #fff;
}
ul > li {
    display: inline-block;
    /* You can also add some margins here to make it look prettier */
    zoom:1;
    *display:inline;
    padding-top:3rem ;
    /* this fix is needed for IE7- */
}

li a{
    text-decoration: none;
    padding: 1rem;
    color:#fff;
}
</style>
