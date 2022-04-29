<template>
  <div id="HeaderApp">
    <div class="row justify-content-center p-2 mb-4 me-0">
      <div class="col-2">
        <img class="w-50" src="../assets/img/dark-logo.png" alt="" />
      </div>
      <div class="col-6 justify-content-end d-flex">
        <span class="px-2 c_p" v-for="elemento in navBar" :key="elemento"
          >{{ elemento }} <font-awesome-icon icon="fa-solid fa-angle-down"
        /></span>
      </div>
      <div class="col-2 justify-content-start d-flex">
        <span>
          <font-awesome-icon icon="fa-solid fa-cart-shopping" />
        </span>
        <span class="px-2">
          <font-awesome-icon icon="fa-solid fa-user" />
        </span>
        <div>
          <input
            class="border-0 w-50 bg-white"
            type="text"
            placeholder="Search..."
          />
          <button class="border-0 bg-white">
            <font-awesome-icon
              class="text-success"
              icon="fa-solid fa-magnifying-glass"
            />
          </button>
        </div>
      </div>
    </div>
    <div class="row justify-content-center p-2 text-center me-0">
      <div class="col-4 p-5 text-start">
        <h1 class="px-3">Complete Your Dreams in JavaS Programming</h1>
        <p class="px-3">
          Learn any coding program in distance and for a reasonable fee. You
          don't have to struggle alone, you've got our assistance and help.
        </p>
        <button class="download mx-3 text-light border-0 p-3 rounded-3">
          <font-awesome-icon icon="fa-solid fa-download" /> Download free E-book
        </button>
      </div>
      <div class="col-6">
        <img src="../assets/img/home-5-hero-image.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderApp",
  props: {
    navBar: Array,
  },
};
</script>

<style  lang="scss" >
#HeaderApp {
  background-color: #dedbd9;
  background-image: url(../assets/img/jumbo-overlay.svg);
}
.c_p {
  cursor: pointer;
}
.download {
  background-color: green;
  &:hover {
    background-color: #513e5e;
  }
}
</style>
