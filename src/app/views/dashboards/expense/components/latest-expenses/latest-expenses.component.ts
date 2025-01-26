import { Component } from '@angular/core';
import { VisitsList } from '../../data';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-latest-expenses',
  standalone: true,
  imports: [
      CommonModule
  ],
  templateUrl: './latest-expenses.component.html',
  styleUrl: './latest-expenses.component.scss'
})
export class LatestExpensesComponent {
  visits = VisitsList
}
