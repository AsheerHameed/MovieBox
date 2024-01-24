import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import MovieCardsComponent from './movies/movie-cards/movie-cards.component';
import { MovieInfoComponent } from './movies/movie-info/movie-info.component';
import { HomeComponent } from './home/home.component';
import { UserRegistrationComponent } from './onboarding/user-registration/user-registration.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path:'series',
    children:[
      {
        path:'',
        component:MovieCardsComponent
      },
      {
        path:'series/:series_id',
        component:MovieInfoComponent
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
  {
    path:'onboarding',
    component: UserRegistrationComponent
  },
  {
    path:'favorites',
    component:FavoritesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
