<template>
    <ul>
      <li v-for="movie in movieList" :key="movie.id" class="movie">
        <div class="movie-img">
          <img :src="movie.img" alt="#">
        </div>
        <div class="movie-info">
          <p>{{movie.nm}}</p>
          <p>{{movie.ver}}</p>
          <p>{{movie.star}}</p>
          <p>{{movie.rt}}</p>
          <p>{{movie.cat}}</p>
        </div>
      </li>
    </ul>
</template>

<script>
//  axios请求:cnpm install axios --save
import Axios from 'axios'
export default {
  data() {
    return {
      movieList:[]
    };
  },
  //钩子函数
  mounted() {
//    let url1=API_PROXY+'接口'+this.moveList.length;
    let url2='/static/data/moviedata-2017-11-25.json';
    Axios.get(url2)
      .then(res=>{
        this.loadingShow=false;
      })
      .catch(()=>{});
  }
  }
</script>

<style>
  .movie{
    display:flex;
  }
  .movie-img{
    flex:1;
  }
  .movie-img img{
    width:0;
  }
  .movie-info{
    flex:2;
  }
</style>
