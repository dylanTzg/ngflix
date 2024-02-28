import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Movie} from "../../models/movie";
import {TvShow} from "../../models/tvShow";
import {MoviesService} from "../../services/movies.service";
import {TvShowService} from "../../services/tvShow.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.scss'
})
export class ShowDetailComponent implements OnInit{

  showId: number = 0;

  show$: Observable<Movie> | undefined;
  constructor(private activatedRoute: ActivatedRoute,
              private moviesService: MoviesService,
              private tvShowService: TvShowService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.showId = params['id'];
    });
    this.show$ = this.moviesService.getMovieById(this.showId.toString());
  }

}
