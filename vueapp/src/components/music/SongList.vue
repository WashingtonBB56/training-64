<template>
  <div class="music">
    <!--aplayer usage-->
    <!--<a-player autoplay :music="{-->
    <!--title: 'Preparation',-->
    <!--author: 'Hans Zimmer/Richard Harvey',-->
    <!--url: 'http://devtest.qiniudn.com/Preparation.mp3',-->
    <!--pic: 'http://devtest.qiniudn.com/Preparation.jpg',-->
    <!--lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'-->
    <!--}"></a-player>-->
    <a-player v-if="isShow" :autoplay="true" :music="songs" :showlrc="5"></a-player>
  </div>
</template>

<script>
  import Axios from 'axios'
  import APlayer from 'vue-aplayer'
export default {
    data (){
      return {
        songs: [],
        isShow: false
      }
    },
//  https://www.npmjs.com/package/vue-aplayer
  components: {
    "a-player": APlayer
  },
    mounted() {
      Axios.get('/static/data/musicdata.json')
        .then(res=>{
          let list = res.data.musicData;
//          循环遍历
          list.forEach(element=>{
            this.songs.push({
              title: element.title,
              author: element.author,
              url: element.src,
              pic: element.musicImgSrc,
              lrc: element.lrc
            });
          });
          this.isShow = true;
        })
        .catch();
    }
  }
</script>
<style scoped>
  .music{
    margin:1rem 0;
  }
  .aplayer{
    margin:0;
  }
</style>
