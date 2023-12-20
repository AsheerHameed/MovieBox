import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service'
import { moviesType } from './movie_interface/movieType';
import { Zip } from 'fflate';
import { NavigationEnd, Router } from '@angular/router';
import { Result, newArrivalResults } from 'src/app/featured-series/featuredSeriesType';
@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.scss'],
})
export class MovieCardsComponent {
  movieInfo: moviesType[] = [];
  currentRoute: string;
  seriesCards : Result[];

  someValue : string ='Fullmetal Alchemist: Brotherhood'
  seriesGenresMap: { [id: number]: string } = {
    10759: "Action & Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    10762: "Kids",
    9648: "Mystery",
    10763: "News",
    10764: "Reality",
    10765: "Sci-Fi & Fantasy",
    10766: "Soap",
    10767: "Talk",
    10768: "War & Politics",
    37: "Western"
  };
  moviesGenresMap: { [id: number]: string } = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western"
  };

  constructor(private movie: MovieService,private route: Router) {}

  ngOnInit(): void {
     this.currentRoute = this.route.url;
     this.movie.getMovies().subscribe((res: any) => {
      this.movieInfo = res.results;
    });
    this.movie.getHighestRatedSeries().subscribe((res: any) => {
      this.seriesCards = res.results;
    });
  }
  compressWords(words: string){
    words = words.length > 26 ? words = words.slice(0, 24) + '...' : words
    return words;
  }
  getGenreNamesByIds(genreIds: number[],type:string): string {
    return type === 'series'
  ? genreIds.map(id => this.seriesGenresMap[id] || 'Unknown Genre').join(', ')
  : type === 'movies'
  ? genreIds.map(id => this.moviesGenresMap[id] || 'Unknown Genre').join(', ')
  : null;
  }
}

export default MovieCardsComponent;
