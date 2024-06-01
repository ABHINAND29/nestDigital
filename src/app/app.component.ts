import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './units/navbar/navbar.component';
import { DepartmentComponent } from './pages/department/department.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AerospaceComponent } from './pages/aerospace/aerospace.component';
import { HealthComponent } from './pages/health/health.component';
import { GisComponent } from './pages/gis/gis.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,DepartmentComponent,HomeComponent,AboutComponent,AerospaceComponent,HealthComponent,GisComponent,FooterComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nestDigital';
}
