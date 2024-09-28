import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss'
})
export class PersonalInfoComponent {
  constructor(private router: Router) {}

  onExperience() {
    this.router.navigate(['/experience']);
  }
}
