import {Component} from '@angular/core';
import {DatepickerDirective} from "@core/directive/datepickr.directive";

@Component({
  selector: 'app-range-selector',
  standalone: true,
  imports: [
    DatepickerDirective
  ],
  templateUrl: './range-selector.component.html',
  styleUrl: './range-selector.component.scss'
})
export class RangeSelectorComponent {
  startOptions: any = {}
  endOptions: any = {}
}
