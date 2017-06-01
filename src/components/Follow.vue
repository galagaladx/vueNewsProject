<template>
	<div id="home">
		<div class="content mt30">
			<div class="newsList">
				<ul>
					<li v-for="(item, index) in arrList">
						<a>
							<h2>{{item.titel}}</h2>
							<p>{{item.detail}}</p>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
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

<style scoped>
.mt30 {
	margin-top: 30px;
}
</style>
