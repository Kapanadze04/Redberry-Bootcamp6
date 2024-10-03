import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from "../shared/header/header.component";
import { Location } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  constructor(private router: Router, private location: Location) {}

  onEducation() {
    this.router.navigate(['/education']);
  }

  onPreviousPage() {
    this.location.back();
  }
}
