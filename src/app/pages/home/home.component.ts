import {Component, Input} from '@angular/core';
import {MoviesService} from "../../services/movies.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  upcomingMovies$ = this.moviesService.getUpcomingMovies();
  upcomingMovieTitle : string = "Upcoming Movies";
  constructor(private moviesService: MoviesService){
  }

}
