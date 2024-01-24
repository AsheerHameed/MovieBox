import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';
import { FeaturedCastsComponent } from './featured-casts/featured-casts.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxCarouselModule } from 'igniteui-angular';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { HttpClientModule } from '@angular/common/http';
import { NgxCarouselModule } from 'ngx-light-carousel';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomeCarouselComponent } from './home/home-carousel/home-carousel.component';
import { SearchedResultInfoComponent } from './home/searched-result-info/searched-result-info.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import {  ReactiveFormsModule } from '@angular/forms';
import { OnboardingModule } from './onboarding/onboarding.module';
import { FeaturedMovieComponent } from './home/featured-series/featured-series.component';
import { UtilitiesService } from './utilities/utilities.service';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    FeaturedCastsComponent,
    HomeComponent,
    HomeCarouselComponent,
    FeaturedMovieComponent,
    FavoritesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoviesModule,
    HomeModule,
    RouterModule,
    BrowserAnimationsModule,
    IgxCarouselModule,
    CarouselModule,
    HttpClientModule,
    YouTubePlayerModule,
    NgxCarouselModule,
    SlickCarouselModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    OnboardingModule
  ],
  providers: [UtilitiesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
