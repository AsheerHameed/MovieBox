import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-series-info',
  templateUrl: './series-info.component.html',
  styleUrls: ['./series-info.component.scss'],
})
export class SeriesInfoComponent {
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  series_id :number
  ngOnInit(){
    let seriesId = this.route.snapshot.params['series_id'];
    this.series_id = seriesId;
    console.log(seriesId);
    
    this.movieService.getSeriesById(seriesId).subscribe((res: any) => {
      console.log(res);
    });
  }
}
