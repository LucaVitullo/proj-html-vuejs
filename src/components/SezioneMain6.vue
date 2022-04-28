<template>
  <section class="sezione6">
    <div class="row justify-content-center me-0 pt-4 text-center me-0">
      <span class="text-secondary fs-6"> PEOPLE ARE PRAISING MAXCOACH</span>
      <h1 class="p-4 mt-2">
        What make they<span class="text-success"> love us?</span>
      </h1>
    </div>
    <carousel
      class="row justify-content-center align-center pt-4 me-0"
      :perPageCustom="[
        [768, 3],
        [1024, 3],
      ]"
    >
      <slide
        v-for="(element, index) in Employees"
        :key="index"
        class="col-4 bg-light position-relative p-4 rounded-2 my-4 ms2"
      >
        <img
          class="
            w_20
            mt-3  
            p-3
            rounded-pill
            position-absolute
            top-0
            start-50
            translate-middle
          "
          :src="require(`../assets/img/${Employees[index].path_image}`)"
        />
        <p class="my-4 p-3">{{ Employees[index].Paragraph }}</p>
        <span class="fw-bold d-block">{{ Employees[index].Name }}</span>
        <span>{{ Employees[index].Profession }}</span>
      </slide>
    </carousel>

    <div class="row py-4 me-0 justify-content-center">
      <div
        class="
          d-flex
          flex-column
          col-5
          position-relative
          justify-content-center
        "
      >
        <img
          class="w_10 position-absolute top-50 start-0 translate-middle"
          src="../assets/img/maxcoach-shape-01.png"
          alt=""
        />
        <h4 class="fs-5 p-3">
          Start today for getting
          <span class="text-success">Online Certification</span>
        </h4>
        <h4 class="p-3">You can be your own guiding star with our help!</h4>
        <img
          class="w_10 position-absolute bottom-0 end-0"
          src="../assets/img/maxcoach-shape-02.png"
          alt=""
        />
        <div class="button">
          <button class="bg-success border-0 rounded-2 text-white col-3 p-1">
            Get started now
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Employees from "@/assets/data/Employees.json";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "SezioneMain6",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      index: 0,
      Employees,
    };
  },
};
</script>

<style lang="scss">
</style>
