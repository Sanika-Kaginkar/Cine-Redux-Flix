import React from 'react';
import MoviesList from '../Components/MoviesList';
import './PageStyles/_page.scss';

const MoviesPage: React.FC = () => {
  return (
    <div>
      <h1>List of Popular movies</h1>
      <MoviesList />
    </div>
  );
};

export default MoviesPage;
