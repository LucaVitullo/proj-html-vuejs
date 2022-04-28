<template>
  <section class="Sezione1 mb-4">
    <div class="row text-center mt-4 me-0">
      <span class="text-secondary mb-3">START LEARNING CODING LANGUAGES</span>
      <h2>Build Your Dream <span class="text-success">TODAY</span></h2>
    </div>
    <div class="row justify-content-center mt-4 me-0">
      <div
        class="col-2 d-flex flex-column center"
        v-for="(element, i) in courses"
        :key="i"
      >
        <img
          class="w-50 m-auto"
          :src="require(`../assets/img/${element.Image_courses}`)"
        />
        <span class="fs-6 mb-2 fw-bold">{{ element.Title }}</span>
        <span class="text-secondary mb-2">{{ element.Paragraph }}</span>
        <span class="hover"
          >{{ element.Label }}
          <font-awesome-icon icon="fa-solid fa-arrow-right"
        /></span>
      </div>
    </div>
  </section>
</template>

<script>
import courses from "@/assets/data/courses.json";
export default {
  name: "SezioneMain1",
  data() {
    return {
      courses,
    };
  },
};
</script>

<style lang ='scss'>
.hover {
  color: grey;
  cursor: pointer;
  &:hover {
    color: green;
    background-color: opacify($color: #f8f8f8, $amount: 0);
  }
}
</style>