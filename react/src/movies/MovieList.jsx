import React from "react";
import MovieCard from "./MovieCard";

function MovieList(props) {

  const movies = [
    {
      title: 'Titanic'
    },
    {
      title: 'Lion King'
    },
    {
      title: 'Good Will Hunting'
    }

  ]

  return (
    <div>
      {movies.map((movies) => {
        return (
          <MovieCard title={movies.title} />
        )
      })}
      {/* <MovieCard title="Titanic" />
      <MovieCard title="Lion King" /> */}
    </div>
  );
}

export default MovieList;