import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { MoviesState, Movie } from '../Redux/types';

const initialState: MoviesState = {
  movies: [],
  loading: false,
  error: null,
};
// const movieID=1357633;
const tmdb_api_key = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3'; 
export const fetchMovies = createAsyncThunk<Movie[]>('movies/fetchMovies', async () => { 
  const response = await fetch(`${BASE_URL}/discover/movie?api_key=${tmdb_api_key}&with_genres=${28}&_=${new Date().getTime()}`);
  const data = await response.json();
  console.log(data)
  return data.results; 
});

// Create movies slice
const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action: PayloadAction<Movie[]>) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default moviesSlice.reducer;
