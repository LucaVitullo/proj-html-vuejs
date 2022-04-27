<template>
  <div class="HeaderApp">
<div class="row justify-content-center p-2 mb-4 me-0 ">
  <div class="col-2">
    <img class="w-50  " src="../assets/img/dark-logo.png" alt="">
  </div>
  <div class="col-6 justify-content-end d-flex">
    <span class="px-2" v-for="elemento in navBar" :key="elemento">{{elemento}} <font-awesome-icon icon="fa-solid fa-angle-down" /></span>
  </div>
  <div class="col-2 justify-content-start d-flex ">
    <span>
      <font-awesome-icon icon="fa-solid fa-cart-shopping" />
    </span>
    <span class="px-2">
      <font-awesome-icon icon="fa-solid fa-user" />
    </span>
    <div class="bg-white rounded-2">
      <input class=" border-0 w-50 rounded-2" type="text" placeholder="Search..." > 
      <button class="border-0 bg-white ms-3"><font-awesome-icon class="text-success" icon="fa-solid fa-magnifying-glass" /></button>
    </div>
  </div>
</div>
<div class="row justify-content-center p-2 text-center me-0">
  <div class="col-4 p-5 text-start">
    <h1 class="px-3">
      Complete Your Dreams in JavaS Programming
    </h1>
    <p class="px-3" >Learn any coding program in distance and for a reasonable fee. You don't have to struggle alone, you've got our assistance and help.</p>
    <button class=" mx-3 bg-success text-light border-0 p-2 rounded-3"> Download free E-book</button>
  </div>
  <div class="col-6">
    <img src="../assets/img/home-5-hero-image.png" alt="">
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'HeaderApp',
  data(){
    return {
      navBar: ['Home','Pages','Courses','Features','Blog','shop'],
    }
  }
}
</script>

<style  lang="scss" >
.HeaderApp{
  background-color: #dedbd9;
}
</style>
