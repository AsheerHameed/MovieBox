import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import MovieCardsComponent from './movies/movie-cards/movie-cards.component';
import { MovieInfoComponent } from './movies/movie-info/movie-info.component';

const routes: Routes = [
  {
    path: 'movies',
    children: [
      { path: '', component: MovieCardsComponent },
      {
        path: 'movie/:id',
        component: MovieInfoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
