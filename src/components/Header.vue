
<template>
  <div class="nav">
    <ul>
      <!--<li>
        <a href="javascript:;">首页</a>
      </li>
      <li>
        <a href="javascript:;">关注</a>
      </li>
      <li>
        <a href="javascript:;">栏目</a>
      </li>-->
      <router-link tag="li" to="/content" active-class="active">
        <a href="javascript:;">首页</a>
      </router-link>
      <router-link tag="li" to="/follow" active-class="active">
        <a href="javascript:;">关注</a>
      </router-link>
      <router-link tag="li" to="/column" active-class="active">
        <a href="javascript:;">栏目</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style>

</style>

