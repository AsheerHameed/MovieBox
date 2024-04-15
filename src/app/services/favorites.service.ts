import { Injectable } from '@angular/core';
interface Movie {
  adult: boolean;
  backdrop_path?: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  movies: Movie[] = [];

  addMovie(movie: any) {
    this.movies.push(movie);
  }

  getMovies() {
    // console.log("get movies called",this.movies);

    return this.movies;
  }
}
