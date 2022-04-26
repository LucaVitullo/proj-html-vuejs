<template>
  <div class="HeaderApp">
<div class="row justify-content-center p-2 mb-4 me-0 ">
  <div class="col-2">
    <img class="w-50  " src="../assets/img/dark-logo.png" alt="">
  </div>
  <div class="col-6 justify-content-end d-flex">
    <span class="px-2" v-for="(elemento) in navBar" :key="elemento.nome">{{elemento.nome}} <font-awesome-icon icon="fa-solid fa-angle-down" /></span>
  </div>
  <div class="col-2 justify-content-start d-flex ">
    <span>
      <font-awesome-icon icon="fa-solid fa-cart-shopping" />
    </span>
    <span class="px-2">
      <font-awesome-icon icon="fa-solid fa-user" />
    </span>
    <input class="w-50 border-0 ms-2 rounded-2 p-1 me-0" type="text" placeholder="Search">
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
  props: {

  },
  data(){
    return {
      navBar: [
       {nome:'Home'} ,
       {nome:'Pages'} ,
       {nome:'Courses'} ,
       {nome:'Features'} ,
       {nome:'Blog'} ,
       {nome:'shop'} 
      ],
    }
  }
}
</script>

<style  lang="scss" >
.HeaderApp{
  background-color: #dedbd9;
}
</style>
