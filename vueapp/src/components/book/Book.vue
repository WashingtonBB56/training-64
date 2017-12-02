<template>
  <div>
    <common-header bg="#08BECE">
      <span slot="title">Book</span>
    </common-header>
    <!--轮播图用vue-swipe插件-->
    <swipe class="swipe clearfix main-inner">
      <swipe-item class="slide1 slide"></swipe-item>
      <swipe-item class="slide2 slide"></swipe-item>
      <swipe-item class="slide3 slide"></swipe-item>
    </swipe>
    <common-footer bg="#08BECE"></common-footer>
  </div>
</template>

<script>
  import CommonHeader from '../common/Header'
  import CommonFooter from '../common/Footer'
  import "vue-swipe/dist/vue-swipe.css";
  import { Swipe, SwipeItem } from "vue-swipe";

  export default {
    components: {
      CommonHeader,
      CommonFooter,
      swipe: Swipe,
      "swipe-item": SwipeItem
    }
  }
  //  import/require功能相同，前者是es6语法，后者是nodejs语法
</script>
<style scoped>
  .swipe {
    height: 3.5rem;
  }
  .slide{
    background: no-repeat center;
    background-size: cover;
    /*contain以长边为准*/
    /*cover以短边为准，全覆盖*/
  }
  .slide1 {
    background: yellow;
    /*background: url("../../../static/img/book/chinese_music.jpg");*/
  }
  .slide2 {
    background: deepskyblue;
    /*background: url("../../../static/img/book/chinese_music.jpg");*/
  }
  .slide3 {
    background: lightseagreen;
    /*background: url("../../../static/img/book/
    /*background: url("../../../static/img/book/chinese_music.jpg");*/
  }
</style>
