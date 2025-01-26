import { Component } from '@angular/core';
import { stateData } from '../../data'
import {CommonModule} from "@angular/common";
import {MoneyLabelComponent} from '@component/money-label/money-label.component';


@Component({
  selector: 'app-account-state',
  standalone: true,
  imports: [
      MoneyLabelComponent,
      CommonModule
  ],
  templateUrl: './account-state.component.html',
  styleUrl: './account-state.component.scss'
})
export class AccountStateComponent {
  stateData = stateData;
}
