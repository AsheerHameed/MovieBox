import { AfterViewInit, Component, ElementRef, ViewChild,OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { newArrivalResults } from '../featured-series/featuredSeriesType';
import { OwlOptions } from 'ngx-owl-carousel-o';

declare var $: any;

@Component({
  selector: 'app-new-arrival',
  templateUrl: './new-arrival.component.html',
  styleUrls: ['./new-arrival.component.scss'],
})
export class NewArrivalComponent {
  // id: number;

  customOptionsCard: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: [' ', ' '],
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



  results: newArrivalResults[];
  genreId: number;
  genreName: string;
  genre_ids = new Map();
  constructor(private movieService: MovieService) {

  }

  ngOnInit() {
    this.movieService.getLatestMovies().subscribe((res: any) => {
      this.results = res.results;
      // console.log('new ', res.results);

    });
  }
}



