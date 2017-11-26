<template>
  <div>
    <common-header bg="#08BECE">
      <span slot="title">Book</span>
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
