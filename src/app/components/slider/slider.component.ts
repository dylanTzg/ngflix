import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {baseImageURL} from "../../constants/images-sizes";
import {Movie} from "../../models/movie";
import {TvShow} from "../../models/tvShow";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state("void", style({opacity: 0})),
      transition("void <=> *", [animate('1s')]),
    ])]
})
export class SliderComponent implements OnInit {

  @Input() slides: (Movie | TvShow)[]  = [];

  slideIndex: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.nextSlide();
  }

  nextSlide() {
    setInterval(() => {
      this.slideIndex++;
      if (this.slideIndex >= this.slides.length) {
        this.slideIndex = 0;
      }
    }, 5000);
  }

  protected readonly baseImageURL = baseImageURL;

  getSlideTitle(slide: Movie | TvShow): string {
    if ('original_title' in slide) {
      return (slide as Movie).original_title;
    } else {
      return (slide as TvShow).original_name;
    }
  }

  getReleaseDate(slide: Movie | TvShow): string {
    if ('release_date' in slide) {
      return (slide as Movie).release_date;
    } else {
      return (slide as TvShow).first_air_date;
    }
  }
}
