import {Component, Input} from '@angular/core';
import {MoneyLabelSettingsService} from "@core/service/money-label-settings.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-money-label',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './money-label.component.html',
  styleUrl: './money-label.component.scss'
})
export class MoneyLabelComponent {
  showLabel = this.settingsService.showMoneyLabel;

  constructor(private settingsService: MoneyLabelSettingsService) {}

}
