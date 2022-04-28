<template>
  <section class="sezione3">
    <div class="row px-0 justify-content-center pt-4 me-0 mb-4 flex-wrap">
      <span class="text-secondary fs-6"> CHOOSE WHERE YOU'D LIKE TO BEGIN</span>
      <h1 class="p-2 mt-2">
        Latest Featured<span class="text-success"> Courses</span>
      </h1>
      <div
        class="col-3 m-2 position-relative bg_hover"
        v-for="(element, i) in Lessons"
        :key="i"
      >
        <img
          class="w-100 rounded-3"
          :src="require(`../assets/img/${element.Image_lessons}`)"
        />
        <label
          class="
            bg-success
            text-white
            p-2
            rounded-2
            position-absolute
            top-0
            end-0
            m_12
          "
          >{{ element.Label }}</label
        >
        <div class="d-flex p-3 align-items-center">
          <img
            class="rounded-circle me-2"
            :src="require(`../assets/img/${element.Avatar_image}`)"
          />
          <span>{{ element.Name_teacher }}</span>
        </div>
        <p class="fw-bold">{{ element.Paragraph }}</p>
        <span class="text-secondary"
          ><font-awesome-icon icon="fa-solid fa-file-lines" />
          {{ element.Number_lessons }}
        </span>
        <span class="text-secondary"
          ><font-awesome-icon icon="fa-solid fa-user" />
          {{ element.Number_student }}</span
        >
      </div>
    </div>
    <div class="row justify-content-center me-0">
      <button class="col-3 bg-success text-white p-3 rounded-3 border-0 my-4">
        View all courses <font-awesome-icon icon="fa-solid fa-arrow-right" />
      </button>
    </div>
  </section>
</template>

<script>
import Lessons from "@/assets/data/Lessons.json";
export default {
  name: "SezioneMain3",
  data() {
    return {
      Lessons,
    };
  },
};
</script>

<style>
.m_12 {
  margin-right: 12px;
}
.bg_hover:hover {
  background-color: white;
}
</style>