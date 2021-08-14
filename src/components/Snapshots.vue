<template>
  <main class="wrapper" role="main">
    <navbar/>
    <div class="container preview-section" style="">
      <div class="row" style="">
        <div class="col-12 col-md-3">
          <img class="mr-2 preview-image" src="@/assets/images/preview/img1.jpg" alt="">
        </div>
        <div class="col-12 col-md-3">
          <img class="mr-2 preview-image" src="@/assets/images/preview/img2.jpg" alt="">
        </div>
        <div class="col-12 col-md-3">
          <img class="mr-2 preview-image" src="@/assets/images/preview/img3.jpg" alt="">
        </div>
        <div class="col-12 col-md-3">
          <img class="mr-2 preview-image" src="@/assets/images/preview/img4.jpg" alt="">
        </div>
        <div class="col-12 col-md-3">
          <img class="mr-2 preview-image" src="@/assets/images/preview/img5.jpg" alt="">
        </div>
        <div class="col-12 col-md-3">
          <img class="mr-2 preview-image" src="@/assets/images/preview/img6.jpg" alt="">
        </div>
        <div class="col-12 col-md-3">
          <img class="mr-2 preview-image" src="@/assets/images/preview/img7.jpg" alt="">
        </div>
        <div class="col-12 col-md-3">
          <img class="mr-2 preview-image" src="@/assets/images/preview/img9.jpg" alt="">
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import Navbar from '@/shared/Navbar.vue'
  export default {
    components: {Navbar},
    data: () => ({

    }),
    methods: {
      toRoute(x) {
        this.$router.push({ name: x })
      }
    }
  }
</script>