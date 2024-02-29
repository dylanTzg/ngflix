import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Movie} from "../../models/movie";
import {MoviesService} from "../../services/movies.service";
import {TvShowService} from "../../services/tvShow.service";
import {Observable} from "rxjs";
import {TvShow} from "../../models/tvShow";

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.scss'
})
export class ShowDetailComponent implements OnInit {

  showId: number = 0;

  type: string = '';

  show$: Observable<Movie> | undefined;

  tv$: Observable<TvShow> | undefined;

  constructor(private activatedRoute: ActivatedRoute,
              private moviesService: MoviesService,
              private tvShowService: TvShowService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.showId = params['id'];
      this.type = params['type'];
    });
    this.getShow();
  }

  getShow() {
    if (this.type === 'movies') {
      this.show$ = this.moviesService.getMovieById(this.showId.toString());
    }
    if (this.type === 'tvShows') {
      this.tv$ = this.tvShowService.getTvShowById(this.showId.toString());
    }
  }
}
