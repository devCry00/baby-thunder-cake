<template>
	<nav id="mainNav" class="navbar navbar-expand-lg  position-relative">
    <a class="navbar-brand" href="#">
    	<img width="70" class="d-block mr-3" src="@/assets/images/babythundercake.png" alt="Babythundercake">
    </a>
    <button class="navbar-toggler" @click="toggleNav()">
      <font-awesome-icon icon="bars" class="mr-3" style="color: #24170e;"/>
    </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" v-if="['home'].includes($route.name)">
            <a class="nav-link khaki-text link h6 mr-4" href="#why">Why Babythundercake</a>
          </li>
          <li class="nav-item" v-if="['home'].includes($route.name)">
            <a class="nav-link khaki-text link h6 mb-0 mr-4" href="#features">Features</a>
          </li>
          <li class="nav-item" v-if="['home'].includes($route.name)">
            <a class="nav-link khaki-text link h6 mb-0 mr-4" href="#roadmap">Roadmap</a>
          </li>
          <li class="nav-item" v-if="!['home'].includes($route.name)">
            <a class="nav-link khaki-text link h6 mb-0 mr-4" @click="toRoute('home')">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link khaki-text link h6 mb-0 mr-4" @click="toRoute('snapshots')">Snapshots</a>
          </li>
          <li class="nav-item">
            <a class="nav-link khaki-text link h6 mb-0 mr-4" @click="toRoute('comic')">Comics</a>
          </li>
          <li class="nav-item">
            <a class="nav-link khaki-text link h6 mb-0 mr-4" @click="toRoute('dashboard')">Dashboard</a>
          </li>
        </ul>
     </div>
     <div class="d-flex align-items-center">
	     	<button class="btn btn-primary m-1" @click="walletButton">
          <font-awesome-icon icon="wallet" class="mr-3"/>
          {{ userAddress ? shorten(userAddress) : 'Connect wallet'}}
        </button>
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
import Moralis from 'moralis'
import { mapGetters, mapMutations } from 'vuex'
export default {
	props: ['wallet'],
  data: () => ({
  	btcContract: '0xf1496dc3054b99bfe48b6738320d45eef8513610',
  }),
  /*watch: {
    $route: function(x) {
      console.log(x)
      // this.toggleLabel(window.location.pathname)
    },
  },*/
  methods: {
  	...mapMutations('wallet', ['SET_ADDRESS', 'SET_BALANCE', 'LOGOUT', 'SET_REWARDS']),
    toRoute(x) {
      this.$router.push({ name: x })
    },
    shorten(x) {
      return `${x.slice(0, 6)}…`
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
    },
    async walletButton() {
      if( !Moralis.User.current() ) {
        await Moralis.Web3.authenticate().then(user => {
          this.SET_ADDRESS(user.get('ethAddress'))
          this.loadWallet()
        })
        .catch(response => {
          if(response == 'Error: Non ethereum enabled browser') {
            this.$dialog
              .confirm('Metamask is required for this operation, clicking continue will redirect to the download page.')
              .then(data => {
                window.open('https://metamask.io/', '_blank').focus()
              })
              .catch(data => {
                // on cancel
              })
          }
        })
      }
      else {
        this.$dialog
          .confirm('Disconnect wallet?')
          .then(data => {
            this.logout()
          })
          .catch(data => {
            // on cancel
          })
      }
    },
    logout() {
      Moralis.User.logOut()
      this.LOGOUT()
    },
    /*getBalance(balances) {
      var btcBalance = balances.filter(row => row.tokenAddress === this.btcContract)[0]
      console.log(btcBalance)
      return btcBalance
    },*/
    async loadWallet() {
      var options = { chain: 'bsc', address: this.userAddress }
      // const balances = await Moralis.Web3.getAllERC20(options);  
      const babyTcbalance = await Moralis.Web3.getERC20({chain: 'bsc', tokenAddress: '0xf1496dc3054b99bfe48b6738320d45eef8513610', address: this.userAddress});
      const cakeDividends = await Moralis.Web3.getERC20({chain: 'bsc', tokenAddress: '0x48305853f705b1f5989abbae78769128292ae484', address: this.userAddress});
      const thunderCakeDividends = await Moralis.Web3.getERC20({chain: 'bsc', tokenAddress: '0x7e849e0bd99be4421ecbd777ec3cea90aedd6276', address: this.userAddress});
      // console.log(balances)
      // var babythundercake = balances.filter(row => row.tokenAddress === this.btcContract)[0]
      this.SET_BALANCE( babyTcbalance.balance.slice(0, -babyTcbalance.decimals) )
      const filterTC = thunderCakeDividends.balance.slice(0, -thunderCakeDividends.decimals)
      const filterC = cakeDividends.balance.slice(0, -cakeDividends.decimals)

      this.thunderCakeRewards = filterTC / this.btcBalance
      this.cakeRewards = filterTC / this.btcBalance

      this.SET_REWARDS({
        unclaimed: {
          thundercake: this.thunderCakeRewards,
          cake: this.cakeRewards,
        }
      })
      /*console.log('btc',this.btcBalance)
      console.log('cake',this.thunderCakeRewards)
      console.log('tc',this.cakeRewards)*/
    },
    handleScroll (event) {
      const element = document.getElementById("mainNav");
      var scrollingUp

      if (event.wheelDelta) {
        scrollingUp = event.wheelDelta > 0
      }
      scrollingUp = event.deltaY < 0

      if (scrollingUp) {
         element.classList.add("nav-up");
         element.classList.remove("nav-down");
       } else {
         element.classList.add("nav-down");
         element.classList.remove("nav-up");
       }
    }
  },
  computed: {
  	...mapGetters('wallet', ['userAddress', 'btcBalance']),
  },
  created() {
    window.addEventListener('wheel', this.handleScroll)
    if(Moralis.User.current()){
      this.SET_ADDRESS( Moralis.User.current().attributes.accounts[0] ) // checks if there is logged user
      this.loadWallet()
    }
  },
  destroyed () {
    window.removeEventListener('wheel', this.handleScroll);
  },
}
</script>