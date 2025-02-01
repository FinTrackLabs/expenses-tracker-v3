import { Route } from '@angular/router'
import {NewTransactionComponent} from "@views/transactions/new-transaction/new-transaction.component";

export const TRANSACTION_ROUTES: Route[] = [
  {
    path: 'new',
    component: NewTransactionComponent,
    data: { title: 'Add New' },
  },
]
