import { Component, Input } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { movieInfoType } from './movieInfoType';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss'],
})
export class MovieInfoComponent {
  private apiLoaded = false;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
  ) {}
  movieId: number;
  trailer: string = '';
  poster_path: string = '';
  @Input() videoId: string;
  movieInfo: movieInfoType;
  myVideo = 'https://www.youtube.com/watch?v=';
  ngOnInit() {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }

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
        }
        i++;
      }
      this.videoId = this.myVideo + this.trailer;
      console.log(this.videoId);
    });
  }
 
  transformMinute(value: number): string {
    let hours = Math.floor(value / 60);
    let minutes = Math.floor(value % 60);
    return hours + ' hrs ' + minutes + ' mins';
  }
}
