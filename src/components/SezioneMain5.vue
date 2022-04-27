<template>
  <section class="sezione5 my-4">
    <div class="row justify-content-center me-0 pt-4 text-center">
      <span class="text-secondary fs-6"> GET IN CONTACT NOW</span>
      <h1 class="p-2 mt-2">Upcoming<span class="text-success"> Events</span></h1>
    </div>
    <div class="row justify-content-center me-0 pt-4">
      <div class="col-5 rating-bg m-2" v-for="element,i in Events" :key="i">
        <div class="row justify-content-center border_hover">
          <div class="col-8 p-2 text-start">
            <span class="text-secondary">{{element.Position}}</span>
            <p class="fw-bold">{{element.Name_event}}</p>
          </div>
          <div class="col-3 p-2 d-flex flex-column">
            <span class="text-success fs-2">{{element.Day}}</span>
            <span class=" fs-5"> {{element.Month}}</span>
            <button class=" border-0 rounded-2 text-white">{{element.Get_ticket}}</button>
          </div>
        </div>
      </div>
    </div>
    <h4 class="text-secondary my-4">Excited about our event?<span class="text-success">View all events <font-awesome-icon icon="fa-solid fa-arrow-right" /></span></h4>
  </section>
</template>

<script>
export default {
  name: 'SezioneMain5',
  data(){
    return{
      Events:[
        {Position:"Texas, US",
        Name_event:"Storytelling Workshop",
        Day:"22",
        Month:"NOV",
        Get_ticket:"Get ticket",
        },
        {Position:"New York, US",
        Name_event:"Painting Art Contest 2020",
        Day:"10",
        Month:"OCT",
        Get_ticket:"Get ticket",
        },
        {Position:"Hamburg, Germany",
        Name_event:"International Art Fair 2020",
        Day:"23",
        Month:"NOV",
        Get_ticket:"Get ticket",
        },
        {Position:"Illinois, US",
        Name_event:"Street Performance: Call for Artist",
        Day:"15",
        Month:"DEC",
        Get_ticket:"Get ticket",
        },
        {Position:"Illinois, US",
        Name_event:"Consumer Food Safety Education Conference",
        Day:"22",
        Month:"JUL",
        Get_ticket:"Get ticket",
        },
        {Position:"Texas, US",
        Name_event:"How meditation improve your mental health?",
        Day:"12",
        Month:"AUG",
        Get_ticket:"Get ticket",
        },
      ]
    }
  }

}
</script>

<style lang ='scss'>
.rating-bg{
  background-color: #faf8f6;
&:hover{
  background-color: #ffff;
  border-left: 2px solid green

};
};
.rating-bg button{
  background-color: green;
&:hover{
  background-color: #513e5e;
};
};

</style>