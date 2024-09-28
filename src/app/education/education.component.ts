import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  constructor(private router: Router) {}
}
