<template>
<div class="MainApp">
  <section class="sezione1 mb-4">
    <div class="row text-center mt-4 me-0">
      <span class="text-secondary mb-3">START LEARNING CODING LANGUAGES</span>
      <h2>Build Your Dream <span class="text-success ">TODAY</span></h2>
    </div>
    <div class="row justify-content-center mt-4 me-0">
      <div class="col-2 d-flex flex-column center">
        <img class="w-50 m-auto" src="../assets/img/home-5-image-box-01.png" alt="">
        <span class="fs-6 mb-2 fw-bold">Idea Discussion</span>
        <span class="text-secondary mb-2">Get teamed up with the specialists who work and teach coding for years at famous universities</span>
        <span class="text-secondary"> Start now  <font-awesome-icon icon="fa-solid fa-arrow-right" /></span>
      </div>
      <div class="col-2 d-flex flex-column center">
        <img class="w-50 m-auto" src="../assets/img/home-5-image-box-02.png" alt="">
        <span class="fs-6 mb-2 fw-bold" >Web Development</span>
        <span class="text-secondary mb-2">Get teamed up with the specialists who work and teach coding for years at famous universities</span>
        <span class="text-secondary"> Start now <font-awesome-icon icon="fa-solid fa-arrow-right" /></span>

      </div>
      <div class="col-2 d-flex flex-column center">
        <img class="w-50 m-auto" src="../assets/img/home-5-image-box-03.png" alt="">
        <span class="fs-6 mb-2 fw-bold">System Administration</span>
        <span class="text-secondary mb-2">Get teamed up with the specialists who work and teach coding for years at famous universities</span>
        <span class="text-secondary"> Start now <font-awesome-icon icon="fa-solid fa-arrow-right" /></span>

      </div>
      <div class="col-2 d-flex flex-column center">
        <img class="w-50 m-auto" src="../assets/img/home-5-image-box-04.png" alt="">
        <span class="fs-6 mb-2 fw-bold">Graphic Design</span>
        <span class="text-secondary mb-2">Get teamed up with the specialists who work and teach coding for years at famous universities</span>
        <span class="text-secondary"> Start now   <font-awesome-icon icon="fa-solid fa-arrow-right" /></span>
      </div>
    </div>
  </section>
  <section class="sezione2 pt-4">
    <div class="row justify-content-center mt-4 me-0 mb-4 team-bg">
      <div class="col-5">
        <img class="bg-avatar-lilla " src="../assets/img/about-us-03-image-01.png" alt="">
      </div>
      <div class="col-5">
        <span class="text-secondary fs-6"> DREAM WITH MAXCOACH</span>
        <h1 class="p-3 mt-4">Construct A <span class="text-success">Stunning</span> Career Perspective</h1>
        <div class=" py-3 bg-success text-light rounded-2 "> Multiple Platforms Supported for Teaching & Studying
          <font-awesome-icon class="ps-4" icon="fa-solid fa-circle-minus" />
        </div>
          <p class=" bg-white p-3 text-secondary rounded-2">MaxCoach supports the act of teaching and learning on mutiple platforms like online or offline via material downloads. We know things aren't supposed to be devoured in a short time, you can always access our knowledge base from any device</p>
          <p class="bg-white p-3 rounded-2">
            Multiple Course Participation at the Same Time  <font-awesome-icon class="ps-4" icon="fa-solid fa-circle-plus" />
          </p>
          <p class="bg-white p-3 rounded-2">
            Multiple Course Participation at the Same Time  <font-awesome-icon class="ps-4" icon="fa-solid fa-circle-plus" />
          </p>
      </div>

    </div>
    <div class="row me-0 justify-content-center mt-4 p-4 rating-bg">
      <div class="col-2 p-2">
        <h1 class="text-success">1.926</h1>
        <span>FINISHED SESSION</span>
      </div>
      <div class="col-2 p-2">
        <h1 class="text-success">3.092+</h1>
        <span>ENROLLED LEARNERS</span>
      </div>
      <div class="col-2 p-2">
        <h1 class="text-success">200</h1>
        <span>ONLINE INSTRUCTORS</span>
      </div>
      <div class="col-2 p-2">
        <h1 class="text-success">100%</h1>
        <span>SATISFACTION RATE</span>
      </div>
    </div>
  </section>
  <section class="sezione3">
    <div class="row justify-content-center mt-4 me-0 mb-4">
      <span class="text-secondary fs-6"> DREAM WITH MAXCOACH</span>
    </div>



  </section>
</div>
</template>

<script>
export default {
  name: 'MainApp',
  props: {

  }
}
</script>

<style  lang="scss">
.bg-avatar-lilla{
  background-image: url(../assets/img/underlay-shape-lilla.svg);
  background-repeat: no-repeat;
  background-position-y: center;

};

.rating-bg{
  background-color: #faf8f6;
};
</style>