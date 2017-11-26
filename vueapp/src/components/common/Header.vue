<template>
  <div class="header" :style="{'background-color':bg}">
    <button class="index">首页</button>
    <h1 class="title">
      <slot name="title">Default</slot>
    </h1>
  </div>
</template>

<script>
export default {
  props: ['bg']
  }
</script>

<style scoped>
  .header{
    position:fixed;
    top:0;
    width:100%;
    /*rem单位前不能有空格*/
    height: 1rem;
    line-height:1rem;
  }
  .index{
    color:#fff;
    border: none;
    background-color:transparent;
    margin-left: 10px;
    font-size:0.3rem;
  }
  .title{
    color:#fff;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
</style>
