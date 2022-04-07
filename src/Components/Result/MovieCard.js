import React from 'react'
import MovieDetail from './MovieDetail'
import style from './result.module.css'
const MovieCard = () => {
  return (
    <div className={style.movie_card}>
        <MovieDetail label='Episode' value='4' />
        <MovieDetail label='Title' value='A New Hope' />
        <MovieDetail label='Release Date' value='4/3/2022' />
        <MovieDetail label='Director' value='George Lucas' />
        <MovieDetail label='Producer' value='Rick McCallum' />
    </div>
  )
}

export default MovieCard