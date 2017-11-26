<template>
  <div>
    <common-header bg="#08BECE">
      <!--slot插槽，在common中定义<slot name="title">Default</slot>-->
      <span slot="title">Movie</span>
    </common-header>
    <router-view></router-view>
    <common-footer bg="#08BECE"></common-footer>
  </div>
</template>

<script>
  import CommonHeader from '../common/Header'
  import CommonFooter from '../common/Footer'

  export default {
    components: {
      CommonHeader,
      CommonFooter
    }
  }
</script>
