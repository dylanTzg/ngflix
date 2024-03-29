import {Component, Input} from '@angular/core';
import {Movie} from "../../models/movie";
import {TvShow} from "../../models/tvShow";


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  @Input() title: string = "";
  @Input() movies: Movie[] | undefined;
  @Input() tvShows: TvShow[] | undefined;

}
