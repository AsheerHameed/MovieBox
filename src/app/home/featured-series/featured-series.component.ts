import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Result, newArrivalResults } from './featuredSeriesType';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { UtilitiesService } from '../../utilities/utilities.service';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-featured-movie',
  templateUrl: './featured-series.component.html',
  styleUrls: ['./featured-series.component.scss'],
})
export class FeaturedMovieComponent {
  @Input() movie: any;
  @Output() favoriteClicked = new EventEmitter();
  // id: number;
  isMobile : boolean = false
  customOptionsCard: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout:7000,
    autoplayHoverPause: true,
    autoHeight: false,
    navText: [
      "<img src='assets/left-icon.png'/>",
      "<img src='assets/right-icon.png'/>",
    ],
    responsive: {
      0: {
        items: 2,
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
  newArrivalResults: newArrivalResults[];
  genreId: number;
  genreName: string;
  genre_ids = new Map();
  seriesGenresMap: { [id: number]: string } = {
    10759: 'Action & Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    10762: 'Kids',
    9648: 'Mystery',
    10763: 'News',
    10764: 'Reality',
    10765: 'Sci-Fi & Fantasy',
    10766: 'Soap',
    10767: 'Talk',
    10768: 'War & Politics',
    37: 'Western',
  };

  moviesGenresMap: { [id: number]: string } = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western',
  };

  constructor(
    private movieService: MovieService,
    private utility: UtilitiesService,
    private favoritesService: FavoritesService
  ) {}

  compressTitle(title: string): string {
    return this.utility.compressWordsHome(title);
  }
  ngOnInit() {
    this.movieService.getGenresById().subscribe((res: any) => {
      this.genre_ids = res;
    });
    this.movieService.getHighestRatedSeries().subscribe((res: any) => {
      this.results = res.results;
      console.log('SERIES', this.results);

      this.movieService.getLatestMovies().subscribe((res: any) => {
        this.newArrivalResults = res.results;
      });
    });
  }
  getGenreNamesByIds(genreIds: number[], type: string): string {
    return type === 'series'
      ? genreIds
          .map((id) => this.seriesGenresMap[id] || 'Unknown Genre')
          .join(', ')
      : type === 'movies'
      ? genreIds
          .map((id) => this.moviesGenresMap[id] || 'Unknown Genre')
          .join(', ')
      : null;
  }
  // favorites: any[] = [];

  // fav: string = 'favorite.png';

  // addToFavorites(index: number) {
  //   for (let i = 0; i < this.newArrivalResults.length; i++) {
  //     if (this.newArrivalResults[i].id === index) {
  //       console.log(this.newArrivalResults[i].id, 'IN I');
  //       this.fav = 'favorite-outlined.png';
  //     } else {
  //       this.fav = 'favorite.png';
  //       console.log('i am in else');
  //     }
      // console.log("Index: " + index);
  //   }
  // }
  // Assuming newArrivalResults is an array of items fetched from the external API
// Initialize a mapping for fav status
favStatusMap: { [key: number]: string } = {};

addToFavorites(index: number,series:number) {
  console.log(index);
this.favoritesService.addMovie(this.results[index])
      console.log('movie added to favorites',this.results[index])
  // Check if the item is already in the mapping
  if (this.favStatusMap[series] === 'favorite.png') {
    // Item is already a favorite, remove it from favorites
    console.log(this.favStatusMap[series]);

  } else {
    // Item is not a favorite, add it to favorites
    this.favStatusMap[series] = 'favorite-outlined.png';
  }
  // this.favStatusMap[index] = this.favStatusMap[index] === 'favorite-outlined.png'
  //   ? 'favorite.png'
  //   : 'favorite-outlined.png';
}

// Use a method to get the fav status for a given item
getFavStatus(index: number): string {
  return this.favStatusMap[index] || 'favorite.png';
}

}
