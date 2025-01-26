import { Component } from '@angular/core';
import {AccountStateComponent} from "@views/dashboards/expense/components/account-state/account-state.component";

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [
    AccountStateComponent
  ],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.scss'
})
export class ExpenseComponent {

}
