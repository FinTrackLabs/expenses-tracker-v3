import { Component } from '@angular/core'
import { stateData } from '../../data'

@Component({
  selector: 'analytics-state',
  standalone: true,
  imports: [],
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
  styles: ``,
})
export class StateComponent {
  stateData = stateData
}
