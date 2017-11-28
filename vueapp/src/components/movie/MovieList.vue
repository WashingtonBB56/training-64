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
    this.loadData();
  },
  methods: {
    loadData() {
      //    let url1=API_PROXY+'接口'+this.moveList.length;
      let url2='/static/data/moviedata-2017-11-25.json';
      Axios.get(url2)
        .then(res=>{
          this.loadingShow=false;
          let list = res.data.data.movies;
//          假分页实现异步分页，slice函数进行数据截取
          let data = list.slice(
            this.moveList.length,
            this.moveList.length + 10
          );
          if (data.length < 10) {
            this.tip = true;
          }
          this.moveList = this.moveList.concat(data);
        })
        .catch(()=>{});
      },
      goDetail(movieId){
        this.$router.push('/movie/movieDetail/'+ movieId);
      }
  }
}
</script>

<style>
  .movie{
    display:flex;
  }
  .movie-img{
    flex:1;
    width:0;
  }
  .movie-img img{
    width:100%;
  }
  .movie-info{
    flex:2;
    width:0;
  }
</style>
