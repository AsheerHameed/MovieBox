import { Component, Input } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { movieInfoType } from './movieInfoType';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss'],
})
export class MovieInfoComponent {
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
  ) {}
  movieId: number;
  trailer: string = '';
  movieInfo: movieInfoType;
  ngOnInit() {

    const id = this.route.snapshot.params['id'];
    this.movieId = id;
    this.movieService.getMovieById(this.movieId).subscribe((res: any) => {
      this.movieInfo = res;
      this.getTrailer();
    });
  }
  getTrailer() {
    this.movieService.getMovieTrailer(this.movieId).subscribe((res: any) => {
      let i = 0;
      while (i < res.results.length) {
        if (res.results[i].type === 'Trailer') {
          this.trailer = res.results[i].key;
          console.log(this.trailer);
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
