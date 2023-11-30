import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { newArrivalResults } from '../featured-series/featuredSeriesType';
import { MovieService } from '../services/movie.service';

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
  movie_ids : number[] = [];
  constructor(private movieService: MovieService) {
    this.movieService.getLatestMovies().subscribe((res: any) => {
      this.results = res.results;
      for (let i = 12; i < 18; i++) {
        const movieId = this.results[i].id;
        this.movie_ids.push(movieId);
        console.log(movieId);
      }
    });
  }
}
