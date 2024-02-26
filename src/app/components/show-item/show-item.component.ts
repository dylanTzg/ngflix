import {Component, Input} from '@angular/core';
import {Movie} from "../../models/movie";
import {baseImageURL780} from '../../constants/images-sizes';
import {TvShow} from "../../models/tvShow";

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrl: './show-item.component.scss'
})
export class ShowItemComponent {
  @Input() showMovie: Movie | undefined;
  @Input() showTvShow: TvShow | undefined;
  protected readonly baseImageURL = baseImageURL780;

}
