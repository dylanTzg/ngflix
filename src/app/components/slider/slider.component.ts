import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {baseImageURL} from "../../constants/images-sizes";
import {Movie, MoviesResponse} from "../../models/movie";
import {popular} from "../../constants/movie-type";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  animations: [
    trigger('slideFade', [
      state("void", style({opacity: 0})),
      transition("void <=> *", [animate('1s')]),
    ])]
})
export class SliderComponent implements OnInit {

  popularMovies: Movie[] | undefined;

  slideIndex: number = 0;


  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.getPopularMovies();
    this.nextSlide();
  }

  getPopularMovies() {
    this.moviesService.getMoviesByType(popular).subscribe((data) => {
      this.popularMovies = data;
    });
  }

  nextSlide() {
    setInterval(() => {
      this.slideIndex++;
      if (this.popularMovies)
        if (this.slideIndex > this.popularMovies?.length - 1) {
          this.slideIndex = 0;
        }
    }, 5000);
  }

  protected readonly baseImageURL = baseImageURL;
}

