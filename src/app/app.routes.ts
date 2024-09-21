import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'personal-info', component: PersonalInfoComponent }
];
