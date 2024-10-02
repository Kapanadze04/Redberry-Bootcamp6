import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input() title: string = '';
  @Input() step: string = '';

  constructor(private location: Location) {}

  onPreviousPage() {
    this.location.back();
  }
}
