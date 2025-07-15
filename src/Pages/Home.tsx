import React from 'react';
import MoviesList from '../Components/MoviesList';
import './PageStyles/_page.scss'

const Home: React.FC = () => {
  return (
    <>
    {/* <h1>Popular Movies You Can Visit On These</h1> */}
    <MoviesList />
   </>
  )
  
};

export default Home;
