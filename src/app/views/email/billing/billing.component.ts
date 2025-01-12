import { credits, currency } from '@/app/common/constants'
import { Component } from '@angular/core'

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [],
  templateUrl: './billing.component.html',
  styles: ``,
})
export class BillingComponent {
  currency = currency
  credits =credits
}