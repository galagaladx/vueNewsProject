<template>
  <div id="home">
    <div class="content">
      <BannerView></BannerView>
      <div class="newsList">
        <ul>
          <li v-for="(item,index) in arrList">
            <!--<a>
              <h2>{{index}}.{{item.title}}</h2>
              <p>{{item.detail}}</p>
            </a>-->
            <router-link :to="'/article/' + item.id">
              <h2>{{index}}.{{item.title}}</h2>
              <p>{{item.detail}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import BannerView from './BannerView.vue'
  export default {
    components: {
      BannerView
    },
    data() {
      return {
        arrList: []
      }
    },
    mounted() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.$http.get('./src/data/index.data').then((res) => {
          // console.log(res);
          this.arrList = res.data;
        }).catch((err) => {
          console.log(err)
        })
      }
    }
  }
</script>


<style>

</style>

