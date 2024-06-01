import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DepartmentComponent } from './pages/department/department.component';
import { AboutComponent } from './pages/about/about.component';
import { AerospaceComponent } from './pages/aerospace/aerospace.component';
import { HealthComponent } from './pages/health/health.component';
import { GisComponent } from './pages/gis/gis.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"department",component:DepartmentComponent},
    {path:"about",component:AboutComponent},
    {path:"aeroplane",component:AerospaceComponent},
    {path:"health",component:HealthComponent},
    {path:"gis",component:GisComponent},
    {path:"about",component:AboutComponent},
    {path:"contact",component:ContactComponent}
];
