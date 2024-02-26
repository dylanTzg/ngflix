import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MoviesResponse} from "../models/movie";
@Injectable()
export class MoviesService {
  apiUrl : string = "https://api.themoviedb.org/3";
  apiKey : string = "4be688387611a7bf9b32a65d7972cc23"
  constructor(private http: HttpClient) {
  }

   getPopularMovies() {
    return this.http.get<MoviesResponse>(this.apiUrl+"/movie/popular?api_key="+ this.apiKey);
  }

  getUpcomingMovies() {
    return this.http.get<MoviesResponse>(this.apiUrl+"/movie/upcoming?api_key="+ this.apiKey);
  }
}
