<template>
  <ul  class="clearfix main-inner">
    <li :key='music.id' v-for="music in rankingList">
      <!--static内的一般是静态数据-->
      <!--assets内数据一般是动态数据-->
      <!--路径一定要写对-->
      <router-link :to="'/music/songList/' + music.id">
        <img :src="music.bg" alt="#">
      </router-link>
    </li>
  </ul>
</template>

<script>
  import Axios from 'axios'
  export default {
    data() {
      return {
        rankingList: []
      };
    },
    mounted() {
      Axios.get("/static/data/musiclist.json")
        .then(res=>{
          this.rankingList = res.data.albums;
        })
        .catch();
    }
  };
</script>
<style scoped>
  ul li{
    float:left;
    width:50%;
  }
  ul li img{
    width:100%;
  }
</style>
