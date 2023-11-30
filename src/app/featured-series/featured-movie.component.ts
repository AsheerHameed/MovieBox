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
      // console.log(this.results);
    });
  }
  getGenreName(genreId: number, genreName: string) {}
  ngOnInit() {
    this.movieService.getGenresById().subscribe((res: any) => {
      this.genre_ids = res;
      // console.log('Geres', this.genre_ids);
      let myMap = new Map<string, string>(this.genre_ids[0]);
      for (let key of myMap) {
        console.log('some',key); //Lokesh Raj John
      }
    });
  }
}
