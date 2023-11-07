import { getLocaleFirstDayOfWeek } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, subscribeOn } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public apiKey = '58cafdd1f1c35f85272fca63fa2e7317'; // Replace with your TMDb API Key
  public apiUrl = 'https://api.themoviedb.org/3';
  public movieId: number;
  private apiBearerToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGNhZmRkMWYxYzM1Zjg1MjcyZmNhNjNmYTJlNzMxNyIsInN1YiI6IjYyYzAxN2IwOTY3MmVkMDA3ZWU5OTMwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vBV1wRkKzi1xBDayzQhuqLjwkcSnQ9SEssc6asQWyG4';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  // function to get movies
  getMovies() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.apiBearerToken}`,
    });
    return this.http.get(`${this.apiUrl}/movie/popular`, { headers });
  }

  // get movie by id
  getMovieById(id: number) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.apiBearerToken}`,
    });
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`,
      { headers }
    );
  }

  getMovieTrailer(id: number) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.apiBearerToken}`,
    });
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.apiKey}`,
      { headers }
    );
  }

  getHighestRatedSeries() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.apiBearerToken}`,
      accept: 'application/json',
    });
    return this.http.get(
      `https://api.themoviedb.org/3/tv/top_rated?language=en-US`,
      { headers }
    );
  }

  getSeriesById(id: number) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.apiBearerToken}`,
      accept: 'application/json',
    });
    return this.http.get(`https://api.themoviedb.org/3/tv/${id}`, { headers });
  }
}
