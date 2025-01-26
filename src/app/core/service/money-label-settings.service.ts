import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoneyLabelSettingsService {

  showMoneyLabel = signal<boolean>(true);

  toggleMoneyLabel(): void {
    this.showMoneyLabel.set(!this.showMoneyLabel());
  }

  setMoneyLabelVisibility(visible: boolean): void {
    this.showMoneyLabel.set(visible);
  }
}
