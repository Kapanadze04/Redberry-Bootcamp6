import { Component } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { NgIf } from '@angular/common';
import { PreviewComponent } from "./preview/preview.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NgIf, PreviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isFormPage = false;


  constructor(private router: Router) {
    // Detect the current route
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Show the preview only on 'personal-info' and 'experience' pages
        this.isFormPage = 
          event.url.includes('/personal-info') || 
          event.url.includes('/experience') || 
          event.url.includes('/education');
      }
    });
  }
}
