import { Component } from '@angular/core'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'product-filter',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './product-filter.component.html',
  styles: ``,
})
export class ProductFilterComponent {}