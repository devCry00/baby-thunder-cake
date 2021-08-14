<template>
	<nav id="mainNav" class="navbar navbar-expand-lg  position-relative">
    <a class="navbar-brand" href="#">
    	<img width="70" class="d-block mr-3" src="@/assets/images/babythundercake.png" alt="Babythundercake">
    </a>
    <button
    	class="navbar-toggler"
    	type="button"
    	data-toggle="collapse"
    	data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false" aria-label="Toggle navigation"
      @click="toggleNav()"
     >
      <font-awesome-icon icon="bars" class="mr-3" style="color: #24170e;"/>
    </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item ">
            <a class="nav-link khaki-text link h6 mr-4" href="#why">Why Babythundercake</a>
          </li>
          <li class="nav-item">
            <a class="nav-link khaki-text link h6 mb-0 mr-4" href="#features">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link khaki-text link h6 mb-0 mr-4" href="#roadmap">Roadmap</a>
          </li>
          <li class="nav-item">
            <a class="nav-link khaki-text link h6 mb-0 mr-4" @click="toRoute('snapshots')">View snapshots</a>
          </li>
          <li class="nav-item">
            <a class="nav-link khaki-text link h6 mb-0 mr-4" @click="toRoute('dashboard')">Dashboard</a>
          </li>
        </ul>
     </div>
     <div class="d-flex align-items-center">
	     	<!-- <button class="btn btn-primary m-1" @click="login">
          <i class="fas fa-wallet pr-2"></i>
          <font-awesome-icon icon="wallet" class="mr-3"/>
          {{ wallet ? shorten(wallet) : 'Connect wallet'}}
        </button>
        <button class="btn btn-primary m-1" @click="logout" v-if="wallet">
          <i class="fas fa-wallet pr-2"></i>
          logout
        </button> -->
        <a class="text-secondary m-2 mr-3 t" target="_blank" href="https://t.me/BabyThunderCake">
	        <font-awesome-icon :icon="['fab', 'telegram-plane']" class="fa-2x mr-2 mb-2"/>
        </a>
        <a class="text-secondary  m-2" target="_blank" href="https://twitter.com/Babythundercake">
	        <font-awesome-icon :icon="['fab', 'twitter']" class="fa-2x mr-2 mb-2"/>
        </a>
     </div>
  </nav>
</template>
<script>
export default {
	props: ['wallet'],
  data: () => ({
    name: 'HelloWorld',
    props: {
      msg: String,
      toggled: false,
    }
  }),
  watch: {
    $route: function(x) {
      console.log(x)
      // this.toggleLabel(window.location.pathname)
    },
  },
  methods: {
    toRoute(x) {
      this.$router.push({ name: x })
    },
    toggleNav() {
      if ( this.toggled ) {
        document.getElementById('navbarSupportedContent').classList.add("collapse")
        document.getElementById('navbarSupportedContent').classList.remove("show")
      }
      else {
        document.getElementById('navbarSupportedContent').classList.add("show")
        document.getElementById('navbarSupportedContent').classList.remove("collapse")
      }
      this.toggled = !this.toggled
    }
  }
}
</script>