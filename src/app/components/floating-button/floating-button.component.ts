import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-floating-button',
  standalone: true,
  imports: [],
  templateUrl: './floating-button.component.html',
  styleUrl: './floating-button.component.scss'
})
export class FloatingButtonComponent {
  @Output() click = new EventEmitter<void>();

  onFloatingButtonClick(): void {
    this.click.emit();
  }
}
