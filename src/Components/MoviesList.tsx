import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../Features/MovieSlice';
import { RootState, AppDispatch } from '../Store/Store';
import './ComponentStyles/_movies.scss';


const MovieList: React.FC = () => {
const dispatch: AppDispatch = useDispatch();
const { movies, loading, error } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error: {error}</p>;
 
  if (!movies || movies.length === 0) {
    return <p>No movies found</p>;
  }

  return (
    <div className='movie-list'>
      {/* <h1>Movie List</h1>  */}
      {movies.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <h2>{movie.title}</h2>
          <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt={movie.original_title} />
          <h3>{movie.original_title}</h3> 
          <p>Release Date: {movie.Release_Date}</p>
          <p>Overview: {movie.overview}</p>
          <a href={movie.url}>Click to Visit the Site</a>
        </div>
        ))}
    </div>
  );
};

export default MovieList;
