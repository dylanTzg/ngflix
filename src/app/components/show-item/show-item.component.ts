import {Component, Input} from '@angular/core';
import {Movie} from "../../models/movie";
import {baseImageURL780} from '../../constants/images-sizes';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrl: './show-item.component.scss'
})
export class ShowItemComponent {
  @Input() showItem: Movie | undefined;
  protected readonly baseImageURL = baseImageURL780;

}
