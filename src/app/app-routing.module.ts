import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import MovieCardsComponent from './movies/movie-cards/movie-cards.component';
import { MovieInfoComponent } from './movies/movie-info/movie-info.component';
import { HomeComponent } from './home/home.component';
import { SeriesInfoComponent } from './series-info/series-info.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path:'series',
    children:[
      {
        path:'series/:series_id',
        component:SeriesInfoComponent
      }
    ]
  },
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
