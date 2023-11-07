import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardsComponent } from './movie-cards/movie-cards.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [MovieCardsComponent, MovieInfoComponent],
  imports: [CommonModule, RouterModule, HttpClientModule,YouTubePlayerModule],
  exports: [MovieCardsComponent],
})
export class MoviesModule {}

