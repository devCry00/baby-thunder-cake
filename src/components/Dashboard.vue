<template>
  <main id="app" class="wrapper" role="main">
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
            <a class="nav-link khaki-text link h6 mb-0 mr-4" @click="toRoute('snapshots')">View snapshots</a>
          </li>
          <li class="nav-item">
            <a class="nav-link khaki-text link h6 mb-0 mr-4" >Dashboard</a>
          </li>
        </ul>
      </div>
      <div class="d-flex align-items-center">
        <button class="btn btn-primary m-1" onclick="onComplete">
          <i class="fas fa-wallet pr-2"></i>
          {{ wallet }}
        </button>
        <a class="text-secondary m-2 mr-3 t" target="_blank" href="https://t.me/BabyThunderCake">
          <i class="khaki-text link fab fa-telegram-plane fa-2x"></i>
        </a>
        <a class="text-secondary  m-2" target="_blank" href="https://twitter.com/Babythundercake">
          <i class="khaki-text link fab fa-twitter fa-2x"></i>
        </a>
      </div>
    </nav>
    <div class="container dashboard-section mt-5 pt-5" style="">
      <marquee>
        <h5 class="khaki-text">- - THIS PAGE IS UNDER DEVELOPMENT - -</h5>
      </marquee>
      <div class="rewards">
        <div>
          <div class="token-details text-center text-white">
            <h6 style="text-align: initial !important; ">
              <small>
                Selected Network:
              </small>
              <small id="network-name"> Not Connected</small>
            </h6>
            <h6 style="text-align: initial !important;">
              <small>
                Connected Account:
              </small>
              <small id="selected-account"> Not Connected</small>
            </h6>
            <br>

            <h4 style="">
              Unclaimed Rewards:
              <span id="unclaimed-rewards"> N/A </span> $BTC
            </h4>
            <h4 style="">
              <span>Claimed Rewards: </span>
              <span id="claimed-rewards"> N/A </span> $BTC
            </h4>
            <h4 style="">
              <span>Total Rewards Distributed: </span>
              <span id="total-rewards"> N/A </span> $BTC
            </h4>
        </div>
        </div>
      </div>
      <div>
        <button id="check-btn" class="btn btn-lg mb-2 btn-glow btn-gradient-blue">
          <h5 style="margin: 0">Check Rewards</h5>
        </button>
        <button id="claim-btn" class="btn btn-lg mb-2 btn-glow btn-gradient-blue">
          <h5 style="margin: 0">Claim Rewards</h5>
        </button>
      </div>

    <div id="demo">
        <vue-metamask 
            userMessage="msg" 
            @onComplete="onComplete"
        >
        </vue-metamask>
    </div>
    </div>
  </main>
</template>
<script>
import VueMetamask from 'vue-metamask';
  export default {
    components: {
        VueMetamask,
    },
    data: () => ({
      msg: "This is demo net work",
      wallet: ''
    }),
    methods:{
      toRoute(x) {
        this.$router.push({ name: x })
      },
      onComplete(data){
          console.log('data:', data);
          this.wallet = data.metaMaskAddress
      }
    }
  }
</script>
