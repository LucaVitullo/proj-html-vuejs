<template>
<section class="Sezione1 mb-4">
    <div class="row text-center mt-4 me-0">
      <span class="text-secondary mb-3">START LEARNING CODING LANGUAGES</span>
      <h2>Build Your Dream <span class="text-success ">TODAY</span></h2>
    </div>
    <div class="row justify-content-center mt-4 me-0">
      <div class="col-2 d-flex flex-column center" v-for="element,i in courses" :key="i">
        <img class="w-50 m-auto" :src="require(`../assets/img/${element.Image_courses}`)"/>
        <span class="fs-6 mb-2 fw-bold">{{element.Title}}</span>
        <span class="text-secondary mb-2">{{element.Paragraph}}</span>
        <span class=" hover">{{ element.Label }} <font-awesome-icon icon="fa-solid fa-arrow-right" /></span>
      </div>
    </div>
  </section>
  
</template>

<script>
export default {
  name: 'SezioneMain1',
  data(){
    return {
      courses:[
        {Image_courses: "home-5-image-box-01.png",
          Title:"Idea Discussion",
          Paragraph:"Get teamed up with the specialists who work and teach coding for years at famous universities",
          Label:"Start now",
        },
        {Image_courses: "home-5-image-box-02.png",
          Title:"Web Development",
          Paragraph:"Learn to start building a webpage from scratch. You decide your own pace, course and speed",
          Label:"Start now",
        },
        {Image_courses: "home-5-image-box-03.png",
          Title:"System Administration",
          Paragraph:"Learners are encouraged to study the mechanism and structure of system administration",
          Label:"Start now",
        },
        {Image_courses: "home-5-image-box-04.png",
          Title:"Graphic Design",
          Paragraph:"Have a passion for graphics and arts? Show your talents with confidence and self-assertiveness",
          Label:"Start now",
        },
      ],
    }
  },
 
}
</script>

<style lang ='scss'>
.hover{
  color: grey;
  cursor: pointer;
&:hover{
  color:green;
  background-color: opacify($color: #f8f8f8, $amount: 0);
  }
}
</style>