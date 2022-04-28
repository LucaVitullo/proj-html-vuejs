<template>
  <section class="sezione5 my-4">
    <div class="row justify-content-center me-0 pt-4 text-center">
      <span class="text-secondary fs-6"> GET IN CONTACT NOW</span>
      <h1 class="p-2 mt-2">
        Upcoming<span class="text-success"> Events</span>
      </h1>
    </div>
    <div class="row justify-content-center me-0 pt-4">
      <div class="col-5 rating-bg m-2" v-for="(element, i) in Events" :key="i">
        <div class="row justify-content-center border_hover">
          <div class="col-8 p-2 text-start">
            <span class="text-secondary"
              ><font-awesome-icon icon="fa-solid fa-location-dot" />
              {{ element.Position }}</span
            >
            <p class="fw-bold">{{ element.Name_event }}</p>
          </div>
          <div class="col-3 p-2 d-flex flex-column">
            <span class="text-success fs-2">{{ element.Day }}</span>
            <span class="fs-5"> {{ element.Month }}</span>
            <button class="border-0 rounded-2 text-white">
              {{ element.Get_ticket }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <h4 class="text-secondary my-4">
      Excited about our event?<span class="text-success"
        >View all events <font-awesome-icon icon="fa-solid fa-arrow-right"
      /></span>
    </h4>
  </section>
</template>

<script>
import Events from "@/assets/data/Events.json";
export default {
  name: "SezioneMain5",
  data() {
    return {
      Events,
    };
  },
};
</script>

<style lang ='scss'>
.rating-bg {
  background-color: #faf8f6;
  &:hover {
    background-color: #ffff;
    border-left: 2px solid green;
  }
}
.rating-bg button {
  background-color: green;
  &:hover {
    background-color: #513e5e;
  }
}
</style>