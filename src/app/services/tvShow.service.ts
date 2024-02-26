import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {popular} from "../constants/movie-type";
import {TvShow, TvShowResponse} from "../models/tvShow";

@Injectable()
export class TvShowService {

  apiUrl: string = "https://api.themoviedb.org/3";
  apiKey: string = "4be688387611a7bf9b32a65d7972cc23"

  private popularTvShowsTitle: string = "Popular TV Shows";


  private allTvShows$: Observable<TvShow[]>[] = [
    this.getTvShowsByType(popular)
  ];

  private allTvShowsTitle: string[] = [this.popularTvShowsTitle];

  constructor(private http: HttpClient) {
  }

  getTvShowsByType(type: string, count = 20) {
    return this.http.get<TvShowResponse>(this.apiUrl + "/tv/" + type + "?api_key=" + this.apiKey)
      .pipe(map((response: TvShowResponse) => response.results.slice(0, count)));
  }

  getAllTvShowsTitle(): string[] {
    return this.allTvShowsTitle;
  }

  getAllTvShows$(): Observable<TvShow[]>[] {
    return this.allTvShows$;
  }


}
