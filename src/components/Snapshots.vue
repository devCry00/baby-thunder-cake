<template>
  <main class="wrapper" role="main">
    <nav id="mainNav" class="navbar navbar-expand-lg  position-relative">
      <a class="navbar-brand" href="#"><img width="70" class="d-block mr-3" src="@/assets/images/babythundercake.png"
          alt="Babythundercake"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <!-- <span class="navbar-toggler-icon"></span> -->
          <i class="fas fa-bars" style="color: #24170e;"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link khaki-text link h6 mb-0 mr-4" @click="toRoute('home')">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link khaki-text link h6 mb-0 mr-4">View snapshots</a>
          </li>
          <li class="nav-item">
            <a class="nav-link khaki-text link h6 mb-0 mr-4" @click="toRoute('dashboard')">Dashboard</a>
          </li>
        </ul>
      </div>
      <div class="d-flex align-items-center">
        <a class="text-secondary m-2 mr-3 t" target="_blank" href="https://t.me/BabyThunderCake">
          <i class="khaki-text link fab fa-telegram-plane fa-2x"></i>
        </a>
        <a class="text-secondary  m-2" target="_blank" href="https://twitter.com/Babythundercake">
          <i class="khaki-text link fab fa-twitter fa-2x"></i>
        </a>
      </div>
    </nav>
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
  export default {
    data: () => ({

    }),
    methods: {
      toRoute(x) {
        this.$router.push({ name: x })
      }
    }
  }
</script>