import Vue from 'vue'
import Router from 'vue-router'

import Movie from '@/components/movie/Movie'
import MovieList from '@/components/movie/MovieList'

import Music from '@/components/music/Music'
import RankingList from '@/components/music/RankingList'
import SongList from '@/components/music/SongList'

import Book from '@/components/book/Book'
import Picture from '@/components/picture/Picture'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/movie/movieList'
    },{
      path: '/movie',
      component: Movie,
      children: [
        {
          path: 'movieList',
          component: MovieList
        }
      ]
    },{
      path: '/music',
      component: Music,
      redirect: '/music/rankingList',
      children: [
        {
          path: 'rankingList',
          component: RankingList
        },{
          path: 'songList',
          component: SongList
        }
      ]
    },{
      path: '/book',
      component: Book
    },{
      path: '/picture',
      component: Picture
    }
  ]
})
