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
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
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
        items: 1,
      },
    },
    nav: true,
  };
  customOptionsCard: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
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
  genre_ids: number[];

  constructor(
    private movieService: MovieService,
  ) {
    this.movieService.getHighestRatedSeries().subscribe((res: any) => {
      this.results = res.results;
      console.log(this.results);
    });
  }

  ngOnInit() {
  }
}
