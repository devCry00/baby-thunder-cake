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
        <button class="btn btn-primary m-1" @click="login">
          <i class="fas fa-wallet pr-2"></i>
          <font-awesome-icon icon="wallet" class="mr-3"/>
          {{ wallet ? shorten(wallet) : 'Connect wallet'}}
        </button>
        <button class="btn btn-primary m-1" @click="logout" v-if="wallet">
          <i class="fas fa-wallet pr-2"></i>
          logout
        </button>
        <button class="btn btn-primary m-1" @click="loadWallet">
          <i class="fas fa-wallet pr-2"></i>
          check console
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
              <small id="selected-account"> {{ wallet ? wallet : 'Not Connected'}}</small>
            </h6>
            <br>
            <h4>
              $Babythundercake Balance:
              <span id="unclaimed-rewards"> {{ btcBalance ? btcBalance : 'N/A' }} </span>
            </h4>
            <h4>
              Unclaimed Rewards:
              <span id="unclaimed-rewards"> N/A </span>
            </h4>
            <h4>
              <span>Claimed Rewards: </span>
              <span id="claimed-rewards"> N/A </span>
            </h4>
            <h4>
              <span>Total Rewards Distributed: </span>
              <span id="total-rewards"> N/A </span>
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
        >
            <!-- @onComplete="onComplete" -->
        </vue-metamask>
      </div>
    </div>
  </main>
</template>
<script>
import VueMetamask from 'vue-metamask';
// import web3 from 'web3'
import Moralis from 'moralis'
  export default {
    // mixins:[web3],
    components: {
        VueMetamask,
    },
    data: () => ({
      msg: "This is demo net work",
      btcContract: '0xf1496dc3054b99bfe48b6738320d45eef8513610',
      btcBalance: '',
      wallet: '',
      balances: [],
    }),
    methods:{
      toRoute(x) {
        this.$router.push({ name: x })
      },
      shorten(x) {
        return `${x.slice(0, 9)}…`
      },
      async login(){
        var ethAddress
        await Moralis.Web3.authenticate().then(function (user) {
          ethAddress = user.get('ethAddress')
        })
        this.wallet = ethAddress
        this.loadWallet()
      },
      async logout() {
        await Moralis.User.logOut()
        this.wallet = ''
      },
      /*getBalance(balances) {
        var btcBalance = balances.filter(row => row.tokenAddress === this.btcContract)[0]
        console.log(btcBalance)
        return btcBalance
      },*/
      async loadWallet() {
        var options = { chain: 'bsc', address: this.wallet }
        const balances = await Moralis.Web3.getAllERC20(options);         
        this.balances = balances

        var babythundercake = balances.filter(row => row.tokenAddress === this.btcContract)[0]
        this.btcBalance = babythundercake.balance.slice(0, -babythundercake.decimals)
      }
    },
    created() {
    },
  }
</script>
