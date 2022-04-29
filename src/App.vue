<template>
  <div id="app">
    <HeaderApp :navBar="navBar" />
    <MainApp />
    <FooterApp
      :Address="Address"
      :Explore="Explore"
      :Information="Information"
    />
  </div>
</template>

<script>
import HeaderApp from "./components/HeaderApp.vue";
import MainApp from "./components/MainApp.vue";
import FooterApp from "./components/FooterApp.vue";

export default {
  name: "App",
  components: {
    HeaderApp,
    MainApp,
    FooterApp,
  },
  data() {
    return {
      navBar: ["Home", "Pages", "Courses", "Features", "Blog", "shop"],
      Address: [
        "382 NE 191st St # 87394 Miami, FL 33179-3899",
        "+1 (305) 547-9909 (9am - 5pm EST,Monday - Friday)",
        "support@maxcoach.com",
      ],
      Explore: [
        "Start here",
        "Blog",
        "About us",
        "Success story",
        "Courses",
        "Contact us",
      ],
      Information: [
        "Membership",
        "Purchase guide",
        "Privacy policy",
        "Terms of service",
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/style/style.scss";
</style>
