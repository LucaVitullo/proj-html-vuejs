<template>
  <div id="app">
    <HeaderApp/>
    <MainApp/>
    <FooterApp/>
  </div>
</template>

<script>
import HeaderApp from './components/HeaderApp.vue'
import MainApp from './components/MainApp.vue'
import FooterApp from './components/FooterApp.vue'

export default {
  name: 'App',
  components: {
    HeaderApp,
    MainApp,
    FooterApp,
  }
}
</script>

<style lang="scss">
@import "@/assets/style/style.scss";
</style>
