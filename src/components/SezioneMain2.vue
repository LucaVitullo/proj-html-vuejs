<template>
  <section class="sezione2 pt-4">
    <div class="row justify-content-center mt-4 me-0 mb-4 team-bg">
      <div class="col-5">
        <img
          class="bg-avatar-lilla"
          src="../assets/img/about-us-03-image-01.png"
          alt=""
        />
      </div>
      <div class="col-5">
        <span class="text-secondary fs-6"> DREAM WITH MAXCOACH</span>
        <h1 class="p-3 mt-4">
          Construct A <span class="text-success">Stunning</span> Career
          Perspective
        </h1>
        <div class="py-3 bg-success text-light rounded-2">
          Multiple Platforms Supported for Teaching & Studying
          <font-awesome-icon class="ps-4" icon="fa-solid fa-circle-minus" />
        </div>
        <p class="bg-white p-3 text-secondary rounded-2">
          MaxCoach supports the act of teaching and learning on mutiple
          platforms like online or offline via material downloads. We know
          things aren't supposed to be devoured in a short time, you can always
          access our knowledge base from any device
        </p>
        <p class="bg-white p-3 rounded-2">
          Multiple Course Participation at the Same Time
          <font-awesome-icon class="ps-4" icon="fa-solid fa-circle-plus" />
        </p>
        <p class="bg-white p-3 rounded-2">
          Multiple Course Participation at the Same Time
          <font-awesome-icon class="ps-4" icon="fa-solid fa-circle-plus" />
        </p>
      </div>
    </div>
    <div class="row me-0 justify-content-center mt-4 p-4 bg_lv">
      <div class="col-2 p-2" v-for="(element, i) in Statistic" :key="i">
        <h1 class="text-success">{{ element.number_statistic }}</h1>
        <span>{{ element.data_statistic }}</span>
      </div>
    </div>
  </section>
</template>

<script>
import Statistic from "@/assets/data/Statistic.json";
export default {
  name: "SezioneMain2",
  data() {
    return {
      Statistic,
    };
  },
};
</script>

<style  lang="scss">
.sezione2 {
  background-color: whitesmoke;
}
.bg_lv {
  background-color: #faf8f6;
}
</style>