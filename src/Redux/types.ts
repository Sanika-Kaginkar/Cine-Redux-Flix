export interface Movie {
  id: number;
  title:string;
  Release_Date:string;
  original_title:string;
  genre_ids: string; 
  poster_path:any;
  url:any;
  type:string;
  overview:string;
}

export interface MoviesState {
  movies: Movie[];
  loading: boolean;
  error: string | null;
}
