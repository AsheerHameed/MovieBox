import { Component, ElementRef, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { newArrivalResults } from '../featured-series/featuredSeriesType';
import { MovieService } from '../services/movie.service';
import { searchResults } from './serachResultsInterface';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss'],
})
export class HomeCarouselComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: true,
  };

  results: newArrivalResults[];
  movie_ids: number[] = [];
  trailer = [];
  movieId: number;
  name: string;
  officialTrailers: string[] = [];
  trailerKeys: string[] = [];
  searchResult: searchResults[] = [];



  searchQueries = {
    title :[],
    distinctTitles: [],
    posterPaths: [],
    id: [],
  }


  @ViewChild('#myDiv') myDiv: ElementRef;
  constructor(private movieService: MovieService) {}
  ngOnInit() {
    this.movieService.getLatestMovies().subscribe((res: any) => {
      this.results = res.results;
      for (let i = 0; i < this.results.length; i++) {
        this.movieId = this.results[i].id;
        this.movie_ids.push(this.movieId);
      }
    });
    this.getTrailer();
  }
  async ngAfterViewInit() {
    for (let i = 5; i <= 11; i++) {
      await this.movieService
        .getMovieTrailer(this.movie_ids[i])
        .toPromise() // Convert the Observable to a Promise to use await
        .then((res: any) => {
          const movieTrailer = res.results;
          this.trailer.push(movieTrailer);
        });
    }

    // Sort the trailers based on their original index
    this.trailer.sort((a, b) => {
      const indexA = this.movie_ids.indexOf(a.id);
      const indexB = this.movie_ids.indexOf(b.id);
      return indexA - indexB;
    });

    // Now this.trailer is sorted based on the original index
    this.officialTrailers = this.trailer.map((movieTrailers) =>
      movieTrailers.filter(
        (trailer) =>
          (trailer.type === 'Trailer' && trailer.name === 'Official Trailer') ||
          trailer.type === 'Trailer'
      )
    );

    // Now 'officialTrailers' contains an array for each movie with trailers meeting the conditions
    this.openTrailer(this.movieId);
  }
  openTrailer(index: number) {
    if (index >= 0 && index < this.officialTrailers.length) {
      const trailers = this.officialTrailers[index];
      for (let j = 0; j < trailers.length; j++) {
        const youtubeUrl = `https://www.youtube.com/watch?v=${trailers[j]['key']}`;
        window.open(youtubeUrl, '_blank');
      }
    }
  }
  getTrailer() {
    for (let i = 0; i < this.officialTrailers.length; i++) {
      if (this.officialTrailers[i].length > 0) {
        this.trailerKeys.push(this.officialTrailers[i][0]['key']);
      }
    }
  }

  getSearchResults(name: string) {
    this.searchResult = []; // Clear the array before fetching new results
    this.searchQueries.title = [];
    this.searchQueries.distinctTitles = [];
    this.searchQueries.posterPaths = [];
    this.searchQueries.id  = [];
    this.movieService.getMovieFromSearch(name).subscribe((res: any) => {
      const searchedResults = res.results;
      this.searchResult.push(searchedResults);

      for (let i = 0; i < 7; i++) {
        this.searchQueries.posterPaths.push(searchedResults[i].poster_path)
        this.searchQueries.title.push(searchedResults[i].title);
        this.searchQueries.distinctTitles= [...new Set( this.searchQueries.title.map(obj => obj)) ];
        this.searchQueries.id.push(searchedResults[i].id)
      }
    });
  }
  clearValue() {
    this.searchResult = [];
  }
}
