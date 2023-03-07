import React from 'react'
import './MovieList.css'
import MovieCard from "../MovieCard/MovieCard"

const MovieList = ({ movies }) => {
  return (
    <div className="movieList">
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
};

export default MovieList