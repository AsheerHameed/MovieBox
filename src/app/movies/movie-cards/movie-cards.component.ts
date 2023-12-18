import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service'
import { moviesType } from './movie_interface/movieType';
@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.scss'],
})
export class MovieCardsComponent {
  movieInfo: moviesType[] = [];
  constructor(private movie: MovieService) {
    this.movie.getMovies().subscribe((res: any) => {
      this.movieInfo = res.results;
    });
  }
}
export default MovieCardsComponent;
