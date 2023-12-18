import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Result } from './featuredSeriesType';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-featured-movie',
  templateUrl: './featured-movie.component.html',
  styleUrls: ['./featured-movie.component.scss'],
})
export class FeaturedMovieComponent {
  id: number;

  customOptionsCard: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: [
    "",""],
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
  genreId: number;
  genreName: string;
  genre_ids = new Map();

  constructor(private movieService: MovieService) {
    this.movieService.getHighestRatedSeries().subscribe((res: any) => {
      this.results = res.results;
    });
  }

  getGenreName(genreId: number, genreName: string) {}
  ngOnInit() {
    this.movieService.getGenresById().subscribe((res: any) => {
      this.genre_ids = res;
      console.log('Genres', this.genre_ids);
    });
  }
}
