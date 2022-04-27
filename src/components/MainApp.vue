<template>
<div class="MainApp">
  <SezioneMain1/>
  <SezioneMain2/>
  <SezioneMain3/>
  <SezioneMain4/>
  <SezioneMain5/>
  <SezioneMain6/>
</div>
</template>

<script>
import SezioneMain1 from '@/components/SezioneMain1.vue'
import SezioneMain2 from '@/components/SezioneMain2.vue'
import SezioneMain3 from '@/components/SezioneMain3.vue'
import SezioneMain4 from '@/components/SezioneMain4.vue'
import SezioneMain5 from '@/components/SezioneMain5.vue'
import SezioneMain6 from '@/components/SezioneMain6.vue'

export default {
  name: 'MainApp',
  components:{
    SezioneMain1,
    SezioneMain2,
    SezioneMain3,
    SezioneMain4,
    SezioneMain5,
    SezioneMain6,
  }
}
</script>

<style  lang="scss">
.bg-avatar-lilla{
  background-image: url(../assets/img/underlay-shape-lilla.svg);
  background-repeat: no-repeat;
  background-position-y: center;

};
.bg-avatar-grey{
  background-image: url(../assets/img/underlay-shape-grey.svg);
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;

};

.sezione3, .sezione6{
  background-color: whitesmoke;
}

.rating-bg{
  background-color: #faf8f6;
};
.w_10{
  width: 10%;
}
.w_20{
  width: 20%;
}
</style>