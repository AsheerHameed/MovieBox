import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { seriesInfo } from './seriesInfoType';

@Component({
  selector: 'app-series-info',
  templateUrl: './series-info.component.html',
  styleUrls: ['./series-info.component.scss'],
})
export class SeriesInfoComponent {
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private spinner: NgxSpinnerService

  ) {}
  SeriesInfo: seriesInfo ;
  series_id :number

  watched: string = 'assets/watched.png';
  heart: string = 'assets/heart.png';
  bookmark: string = 'assets/bookmark-white.png';

  toggleImage(imageType: string) {
    switch (imageType) {
      case 'watched':
        this.watched = this.watched === 'assets/watched.png' ? 'assets/watched-filled.png' : 'assets/watched.png';
        break;
      case 'heart':
        this.heart = this.heart === 'assets/heart.png' ? 'assets/heart-filled.png' : 'assets/heart.png';
        break;
      case 'bookmark':
        this.bookmark = this.bookmark === 'assets/bookmark-white.png' ? 'assets/bookmark-white-filled.png' : 'assets/bookmark-white.png';
        break;
      default:
        // Handle unexpected image type
        console.error('Invalid image type');
        break;
    }
  }

  ngOnInit(){
    let seriesId = this.route.snapshot.params['series_id'];
    this.series_id = seriesId;
    this.movieService.getSeriesById(seriesId).subscribe((res: any) => {
      this.SeriesInfo = res
    });
  }
}
