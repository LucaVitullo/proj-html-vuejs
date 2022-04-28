<template>
  <div class="FooterApp">
    <div class="row me-0 mt-4 justify-content-center">
      <div class="col-5 text-start">
        <span class="fw-bold py-2">Address</span>
        <div class="hover_underline" v-for="i in Address" :key="i">
          {{ i }}
        </div>
        <a href="https://www.facebook.com/profile"
          ><font-awesome-icon
            class="p-2 mt-2 text-secondary fs-2"
            icon="fa-brands fa-facebook-square"
        /></a>
        <a href="https://twitter.com/intent/tweet?text=Hello%20worl"
          ><font-awesome-icon
            class="p-2 text-secondary fs-2"
            icon="fa-brands fa-twitter"
        /></a>
        <a href="https://www.instagram.com/"
          ><font-awesome-icon
            class="p-2 text-secondary fs-2"
            icon="fa-brands fa-instagram"
        /></a>
        <a href="https://it.linkedin.com/"
          ><font-awesome-icon
            class="p-2 text-secondary fs-2"
            icon="fa-brands fa-linkedin"
        /></a>
      </div>
      <div class="col-2 text-start">
        <span class="fw-bold">Explore</span>
        <div class="hover_underline" v-for="i in Explore" :key="i">
          {{ i }}
        </div>
      </div>
      <div class="col-2 text-start">
        <span class="fw-bold">Information</span>
        <div class="hover_underline" v-for="i in Information" :key="i">
          {{ i }}
        </div>
      </div>
      <h6 class="my-4 text-secondary position-relative">
        <font-awesome-icon icon="fa-regular fa-copyright" />
        2020 Maxcoach. All Rights Reserved
        <a href="#HeaderApp"
          ><font-awesome-icon
            class="
              position-absolute
              bottom-0
              end-0
              p-4
              me-2
              bg-success
              text-light
              rounded-pill
            "
            icon="fa-solid fa-arrow-up"
        /></a>
      </h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterApp",
  data() {
    return {
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

<style  lang="scss">
.hover_underline:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>