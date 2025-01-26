import { Route } from '@angular/router'
import { AnalyticsComponent } from './analytics/analytics.component'
import { EcommerceComponent } from './ecommerce/ecommerce.component'
import {ExpenseComponent} from "@views/dashboards/expense/expense.component";

export const DASHBOARD_ROUTES: Route[] = [
  {
    path: 'analytics',
    component: AnalyticsComponent,
    data: { title: 'Analytics' },
  },
  {
    path: 'ecommerce',
    component: EcommerceComponent,
    data: { title: 'Ecommerce' },
  },
  {
    path: 'expense',
    component: ExpenseComponent,
    data: { title: 'Expense' },
  },
]
