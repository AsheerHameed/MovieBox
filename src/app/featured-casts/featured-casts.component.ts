import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { PouplarActors } from '../featured-series/featuredSeriesType';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-featured-casts',
  templateUrl: './featured-casts.component.html',
  styleUrls: ['./featured-casts.component.scss'],
})
export class FeaturedCastsComponent {
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

  results: PouplarActors[];
  genreId: number;
  genreName: string;
  genre_ids = new Map();

  constructor(private movieService: MovieService) {}
  ngOnInit() {
    this.movieService.getPopularActors().subscribe((res: any) => {
      this.results = res.results;
      console.log('actors', this.results);
    });
  }
}
