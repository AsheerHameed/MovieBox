import { Component, ElementRef, Renderer2 } from '@angular/core';
import { newArrivalResults } from '../featured-series/featuredSeriesType';
import { searchResults } from '../home-carousel/serachResultsInterface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-searched-result-info',
  templateUrl: './searched-result-info.component.html',
  styleUrls: ['./searched-result-info.component.scss']
})
export class SearchedResultInfoComponent {
  searchResult: searchResults[] = [];
  isModalOpened : boolean = false;
  searchQueries = {
    title :[],
    distinctTitles: [],
    posterPaths: [],
    id: [],
  }
  constructor(private movieService: MovieService,private el: ElementRef, private renderer: Renderer2) {}

  getSearchResults(name: string) {
    this.searchResult = []; // Clear the array before fetching new results
    this.searchQueries.title = [];
    this.searchQueries.distinctTitles = [];
    this.searchQueries.posterPaths = [];
    this.searchQueries.id  = [];
    this.movieService.getMovieFromSearch(name).subscribe((res: any) => {
      const searchedResults = res.results;
      this.searchResult.push(searchedResults);

      for (let i = 0; i < 7; i++) {
        this.searchQueries.posterPaths.push(searchedResults[i].poster_path)
        this.searchQueries.title.push(searchedResults[i].title);
        this.searchQueries.distinctTitles= [...new Set( this.searchQueries.title.map(obj => obj)) ];
        this.searchQueries.id.push(searchedResults[i].id)
      }
    });
    this.renderer.setStyle(this.el.nativeElement.querySelector('.search_results'), 'display', 'block');

  }
}
