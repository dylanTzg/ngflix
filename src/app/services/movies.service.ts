import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Movie, MoviesResponse} from "../models/movie";
import {map, Observable} from "rxjs";
import {topRated, upComing} from "../constants/movie-type";

@Injectable()
export class MoviesService {

  apiUrl: string = "https://api.themoviedb.org/3";
  apiKey: string = "4be688387611a7bf9b32a65d7972cc23"

  private upComingMovieTitle: string = "Up Coming";
  private topRatedMovieTitle: string = "Top Rated";


  private AllMovies$: Observable<Movie[]>[] = [
    this.getMoviesByType(upComing,15),
    this.getMoviesByType(topRated,15)
  ];

  private AllMoviesTitle: string[] = [this.upComingMovieTitle, this.topRatedMovieTitle];

  constructor(private http: HttpClient) {
  }

  getMoviesByType(type: string, count = 20) {
    return this.http.get<MoviesResponse>(this.apiUrl + "/movie/" + type + "?api_key=" + this.apiKey)
      .pipe(map((response: MoviesResponse) => response.results.slice(0, count)));
  }

  getAllMoviesTitle(): string[] {
    return this.AllMoviesTitle;
  }

  getAllMovies$(): Observable<Movie[]>[] {
    return this.AllMovies$;
  }
}
