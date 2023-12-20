import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Result, newArrivalResults } from './featuredSeriesType';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { UtilitiesService } from '../utilities/utilities.service';

@Component({
  selector: 'app-featured-movie',
  templateUrl: './featured-series.component.html',
  styleUrls: ['./featured-series.component.scss'],
})
export class FeaturedMovieComponent {
  id: number;

  customOptionsCard: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 300,
    autoplay:true,
    autoplayTimeout:7000,
    autoplayHoverPause:true,
    autoHeight:false,
    navText: [
      "<img src='assets/left-icon.png'/>","<img src='assets/right-icon.png'/>"],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  results: Result[];
  newArrivalResults : newArrivalResults[];
  genreId: number;
  genreName: string;
  genre_ids = new Map();
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

  constructor(private movieService: MovieService,private utility: UtilitiesService) {
    this.movieService.getHighestRatedSeries().subscribe((res: any) => {
      this.results = res.results;

      this.movieService.getLatestMovies().subscribe((res: any) => {
        this.newArrivalResults = res.results;
      });
    });
  }

  compressTitle(title: string): string {
    return this.utility.compressWordsHome(title);
  }
  ngOnInit() {
    this.movieService.getGenresById().subscribe((res: any) => {
      this.genre_ids = res;
    });
  }
  getGenreNamesByIds(genreIds: number[],type:string): string {
    return type === 'series'
  ? genreIds.map(id => this.seriesGenresMap[id] || 'Unknown Genre').join(', ')
  : type === 'movies'
  ? genreIds.map(id => this.moviesGenresMap[id] || 'Unknown Genre').join(', ')
  : null;
  }
}
