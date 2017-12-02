<template>
  <div>
    <common-header bg="#08BECE">
      <span slot="title">Picture</span>
    </common-header>
    <router-view></router-view>
    <common-footer bg="#08BECE"></common-footer>
  </div>
</template>

<script>
  import CommonHeader from '../common/Header'
  import CommonFooter from '../common/Footer'
//  左右滑动支持插件vue-touch(不支持vue 2.0)，滑动事件判定需要大于30px
//  后续(目前测试)版本：vue-touch@next --save

  export default {
    components: {
      CommonHeader,
      CommonFooter
    }
  }
</script>
