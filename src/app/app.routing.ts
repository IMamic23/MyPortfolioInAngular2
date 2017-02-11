import { PortfolioComponent } from './portfolio/portfolio.component';
import { ExperienceComponent } from './experience/experience.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from "@angular/router";

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'experience', component: ExperienceComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'home', component: HomeComponent},
  { path: 'contact_me', component: ContactmeComponent },
  { path: 'about_me', component: AboutmeComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);