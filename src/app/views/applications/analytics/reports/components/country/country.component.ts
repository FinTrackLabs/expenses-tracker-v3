import { Component } from '@angular/core'
import { CountryList } from '../../data'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'reports-country',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country.component.html',
  styles: ``,
})
export class CountryComponent {
  countries = CountryList
}