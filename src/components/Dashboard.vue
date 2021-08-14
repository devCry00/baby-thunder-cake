<template>
  <main id="app" class="wrapper" role="main">
    <navbar/>
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
              <small id="selected-account"> {{ userAddress ? userAddress : 'Not Connected'}}</small>
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
        <button id="check-btn" class="btn btn-lg mb-2 btn-glow btn-gradient-blue" @click="checkRewards()">
          <h5 style="margin: 0">Check Rewards</h5>
        </button>
        <button id="claim-btn" class="btn btn-lg mb-2 btn-glow btn-gradient-blue">
          <h5 style="margin: 0">Claim Rewards</h5>
        </button>
      </div>

    </div>
  </main>
</template>
<script>
import Navbar from '@/shared/Navbar.vue'
import { mapGetters } from 'vuex'
import Moralis from 'moralis'
  export default {
    components: {Navbar},
    data: () => ({
      thunderCakeRewards: '',
      cakeRewards: '',
      wallet: '',
      balances: [],
    }),
    methods:{
      toRoute(x) {
        this.$router.push({ name: x })
      },
      checkRewards() {
        // const web3 = await Moralis.Web3.enable();
        const contract = new Moralis.eth.Contract(contractAbi, contractAddress);
        console.log(contract)
      },
    },
    computed: {
      ...mapGetters('wallet', ['userAddress', 'btcBalance']),
    },
    created() {
    },
  }
</script>
