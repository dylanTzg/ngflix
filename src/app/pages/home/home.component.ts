import {Component, Input} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {Observable} from "rxjs";
import {Movie, MoviesResponse} from "../../models/movie";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  AllMovies$: Observable<Movie[]>[] = this.moviesService.getAllMovies$() ;

  AllMoviesTitle: string[] = this.moviesService.getAllMoviesTitle();
  constructor(private moviesService: MoviesService){
  }





}
