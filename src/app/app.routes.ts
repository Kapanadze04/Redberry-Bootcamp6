import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';




export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'personal-info', component: PersonalInfoComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'education', component: EducationComponent }
];
