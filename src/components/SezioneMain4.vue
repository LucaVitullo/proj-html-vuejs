<template>
  <section class="sezione4">
    <div class="row justify-content-center me-0 mt-4">
      <div class="col-5 m-4 d-flex flex-column align-items-start p-4">
        <span class="text-secondary fw-bold">WHY HESITATE TO REGISTER?</span>
        <h1 class="">
          Learn At Your Own <span class="text-success"> Pace</span>
        </h1>
        <span
          ><font-awesome-icon
            class="text-success me-2"
            icon="fa-solid fa-angle-down"
          />
          Select & costomize courses to your preferences</span
        >
        <span
          ><font-awesome-icon
            class="text-success me-2"
            icon="fa-solid fa-angle-down"
          />
          Change the tutor and make arrangements</span
        >
        <span
          ><font-awesome-icon
            class="text-success me-2"
            icon="fa-solid fa-angle-down"
          />
          Participate in events to join others</span
        >
        <span
          ><font-awesome-icon
            class="text-success me-2"
            icon="fa-solid fa-angle-down"
          />
          Get the desired certificate delivered at house</span
        >
        <button class="bg-success text-white p-3 rounded-3 border-0 my-4">
          Get started for free
        </button>
      </div>
      <div
        class="
          col-5
          m-4
          d-flex
          flex-column
          align-items-start
          p-4
          position-relative
        "
      >
        <img
          class="bg-avatar-grey w_95"
          src="../assets/img/home-5-image-01.png"
          alt=""
        />
        <img
          class="w_25 position-absolute top-50 start-100 translate-middle"
          src="../assets/img/maxcoach-shape-05.png"
          alt=""
        />
      </div>
    </div>
    <div class="row justify-content-center me-0 my-4">
      <div class="col-5 position-relative">
        <img
          class="bg-avatar-grey"
          src="../assets/img/home-5-image-02.png"
          alt=""
        />
        <img
          class="position-absolute top-50 start-80 translate-middle cut_img"
          src="../assets/img/maxcoach-shape-07.png"
          alt=""
        />
        <img
          class="position-absolute top-50 start-0 translate-middle"
          src="../assets/img/maxcoach-shape-01.png"
          alt=""
        />
      </div>
      <div
        class="col-5 m-4 d-flex flex-column align-items-start text-start pt-4"
      >
        <span class="text-secondary fw-bold">WHAT ARE YOU LOOKING FOR?</span>
        <span class="fs-1"
          >Learn on your<span class="text-success"> mobile </span>
          anytime!</span
        >
        <p>
          Save lessons for later and revise or write notes at any time and on
          multiple deviced on your way. Never interfere with activities of
          enjoyment or other precious moments.
        </p>
        <button class="bg-success text-white p-3 rounded-3 border-0 my-3">
          Download Our App
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SezioneMain4",
};
</script>

<style lang ='scss'>
.w_25 {
  width: 25%;
}
.w_95 {
  width: 95%;
}
.cut_img {
  margin-left: 60px;
  width: 18%;
  height: 26%;
  object-fit: cover;
}
</style>