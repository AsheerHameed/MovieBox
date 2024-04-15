import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { FavoritesService } from '../services/favorites.service';
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

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.scss'],
})
// export class FavoritesListComponent {
//   movies: Movie[];
//   constructor(private favoritesService: FavoritesService) {}
//   uniqueMovies : any = [];
//   ngOnInit(): void {

//     this.movies= this.favoritesService.getMovies();
//     this.uniqueMovies = new Set(this.movies);
//     console.log("recently added movies: ",this.movies);
//     console.log("unique movies ",this.uniqueMovies);
//   }
// }
export class FavoritesListComponent implements OnInit {
  movies: Movie[];
  uniqueMovies: Movie[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.movies = this.favoritesService.getMovies();

    // Create a map to track unique movies by name and id
    const uniqueMoviesMap = new Map<string, Movie>();

    // Iterate over movies and add them to the map based on a combination of 'name' and 'id'
    this.movies.forEach(movie => {
      const key = `${movie.title}_${movie.id}`;
      uniqueMoviesMap.set(key, movie);
    });

    // Extract unique movies from the map
    this.uniqueMovies = Array.from(uniqueMoviesMap.values());

    console.log("recently added movies: ", this.movies);
    console.log("unique movies ", this.uniqueMovies);
  }
}

