import { Component, Input } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { movieInfoType } from './movieInfoType';
import { NgxSpinnerService } from 'ngx-spinner';
import { seriesInfo } from 'src/app/featured-series/seriesInfoType';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss'],
})
export class MovieInfoComponent {
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}
  movieId: number;
  trailer: string = '';
  movieInfo: movieInfoType;
  SeriesInfo: seriesInfo ;

  watched: string = 'assets/watched.png';
  heart: string = 'assets/heart.png';
  bookmark: string = 'assets/bookmark-white.png';

  toggleImage(imageType: string) {
    switch (imageType) {
      case 'watched':
        this.watched =
          this.watched === 'assets/watched.png'
            ? 'assets/watched-filled.png'
            : 'assets/watched.png';
        break;
      case 'heart':
        this.heart =
          this.heart === 'assets/heart.png'
            ? 'assets/heart-filled.png'
            : 'assets/heart.png';
        break;
      case 'bookmark':
        this.bookmark =
          this.bookmark === 'assets/bookmark-white.png'
            ? 'assets/bookmark-white-filled.png'
            : 'assets/bookmark-white.png';
        break;
      default:
        // Handle unexpected image type
        console.error('Invalid image type');
        break;
    }
  }

  showMoviesPage: boolean = false;
  showSeriesPage: boolean = false;
  series_id :number

  showPage: boolean = false;
  ngOnInit() {
    this.togglePageType();
    const id = this.route.snapshot.params['id'];
    this.movieId = id;
    this.movieService.getMovieById(this.movieId).subscribe((res: any) => {
      this.movieInfo = res;
      this.getTrailer();
    });
    this.spinner.show();
    setTimeout(() => {
      this.showPage = true;
      this.spinner.hide();
    }, 2000);

    let seriesId = this.route.snapshot.params['series_id'];
    this.series_id = seriesId;
    this.movieService.getSeriesById(seriesId).subscribe((res: any) => {
      this.SeriesInfo = res
    });
  }
  togglePageType() {
    if (this.router.url.includes('/movies/movie/')) {
      this.showMoviesPage = true;
      console.log('Movies', this.showMoviesPage);
    } else if (this.router.url.includes('/series/series/'))
    {
      this.showSeriesPage = true;
      console.log('Movies', this.showSeriesPage);
    }
  }
  getTrailer() {
    this.movieService.getMovieTrailer(this.movieId).subscribe((res: any) => {
      let i = 0;
      while (i < res.results.length) {
        if (res.results[i].type === 'Trailer') {
          this.trailer = res.results[i].key;
        }
        i++;
      }
    });
  }

  transformMinute(value: number): string {
    let hours = Math.floor(value / 60);
    let minutes = Math.floor(value % 60);
    return hours + ' hrs ' + minutes + ' mins';
  }
}
