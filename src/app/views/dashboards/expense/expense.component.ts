import { Component } from '@angular/core';
import {AccountStateComponent} from "@views/dashboards/expense/components/account-state/account-state.component";
import {AudienceComponent} from "@views/dashboards/analytics/components/audience/audience.component";
import {VisitorsComponent} from "@views/dashboards/analytics/components/visitors/visitors.component";
import {RangeSelectorComponent} from "@views/dashboards/expense/components/range-selector/range-selector.component";
import {LatestExpensesComponent} from "@views/dashboards/expense/components/latest-expenses/latest-expenses.component";

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [
    AccountStateComponent,
    AudienceComponent,
    VisitorsComponent,
    RangeSelectorComponent,
    LatestExpensesComponent
  ],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.scss'
})
export class ExpenseComponent {

}
