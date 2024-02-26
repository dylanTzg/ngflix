import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Movie, MoviesResponse} from "../models/movie";
import {map, Observable} from "rxjs";
import {topRated, upComing} from "../constants/movie-type";

@Injectable()
export class MoviesService {

  apiUrl: string = "https://api.themoviedb.org/3";
  apiKey: string = "4be688387611a7bf9b32a65d7972cc23"

  upComingMovieTitle: string = "Up Coming";
  topRatedMovieTitle: string = "Top Rated";


  private AllMovies$: Observable<Movie[]>[] = [
    this.getMoviesByType(upComing),
    this.getMoviesByType(topRated)
  ];

  private AllMoviesTitle: string[] = [this.upComingMovieTitle, this.topRatedMovieTitle];

  constructor(private http: HttpClient) {
  }

  getMoviesByType(type: string) {
    return this.http.get<MoviesResponse>(this.apiUrl + "/movie/" + type + "?api_key=" + this.apiKey)
      .pipe(map((response: MoviesResponse) => response.results.slice(0, 10)));
  }

  getAllMoviesTitle(): string[] {
    return this.AllMoviesTitle;
  }

  getAllMovies$(): Observable<Movie[]>[] {
    return this.AllMovies$;
  }
}
