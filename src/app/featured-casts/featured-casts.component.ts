import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { PouplarActors } from '../home/featured-series/featuredSeriesType';
import { UtilitiesService } from '../utilities/utilities.service';

@Component({
  selector: 'app-featured-casts',
  templateUrl: './featured-casts.component.html',
  styleUrls: ['./featured-casts.component.scss'],
})
export class FeaturedCastsComponent {
  id: number;
  OptionsCard: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay:false,
    autoplayTimeout:7000,
    navSpeed: 200,
    navText: [
    "<img src='assets/left-icon.png'/>","<img src='assets/right-icon.png'/>"],
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

  results: PouplarActors[];
  genreId: number;
  genreName: string;
  genre_ids = new Map();

  constructor(private movieService: MovieService,utilityService:UtilitiesService) {}
  ngOnInit() {
    this.movieService.getPopularActors().subscribe((res: any) => {
      this.results = res.results;
    });
  }
  getEllipsisText(text: string, maxLength: number): string {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  }
}
