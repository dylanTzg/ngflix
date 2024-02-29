import {Component} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {Observable} from "rxjs";
import {Movie} from "../../models/movie";
import {TvShowService} from "../../services/tvShow.service";
import {TvShow} from "../../models/tvShow";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  allMovies$: Observable<Movie[]>[] = this.moviesService.getAllMovies$();

  allMoviesTitle: string[] = this.moviesService.getAllMoviesTitle();

  popularMovies$: Observable<Movie[]> = this.moviesService.getMoviesByType('popular');

  allTvShows$: Observable<TvShow[]>[] = this.tvShowService.getAllTvShows$();

  allTvShowsTitle: string[] = this.tvShowService.getAllTvShowsTitle();

  constructor(private moviesService: MoviesService, private tvShowService: TvShowService) {
  }


}
