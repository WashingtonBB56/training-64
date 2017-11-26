<template>
  <ul :style="{'background-color':bg}">
    <li><router-link to="/movie">电影</router-link></li>
    <li><router-link to="/music">音乐</router-link></li>
    <li><router-link to="/book">图书</router-link></li>
    <li><router-link to="/picture">图片</router-link></li>
  </ul>
  <!--router-link不是标签-->
</template>

<script>
  export default {
    props: ['bg']
  }
</script>

<style scoped>
  ul{
    position:fixed;
    bottom:0;
    width:100%;
    background-color:#08BECE;
    height: 1rem;
    line-height:1rem;
    display: flex;
  }
  li{
    flex: 1;
    text-align: center;
  }
  li a{
    color:#ccc;
    font-size: 0.3rem;
  }
  li a.router-link-active{
    color:#fff;
  }
</style>
