import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';
import { FeaturedMovieComponent } from './featured-series/featured-movie.component';
import { NewArrivalComponent } from './new-arrival/new-arrival.component';
import { FeaturedCastsComponent } from './featured-casts/featured-casts.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxCarouselModule } from 'igniteui-angular';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FeaturedMovieComponent,
    NewArrivalComponent,
    FeaturedCastsComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoviesModule,
    RouterModule,
    BrowserAnimationsModule,
    IgxCarouselModule,
    CarouselModule,
    HttpClientModule,
    YouTubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
