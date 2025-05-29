import { Routes } from '@angular/router';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { ProspectsComponent } from './screens/prospects/prospects.component';
import { ProfileComponent } from './screens/profile/profile.component';
import { AutomatizationComponent } from './screens/automatization/automatization.component';
import { MassComponent } from './screens/mass/mass.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Dashboard',
    component: DashboardComponent
  },
  {
    path: 'prospects/1',
    title: 'Perfil',
    component: ProfileComponent
  },
  {
    path: 'prospects',
    title: 'Prospectos',
    component: ProspectsComponent
  },
  {
    path: 'automatization',
    title: 'Automatización',
    component: AutomatizationComponent
  },
  {
    path: 'mass',
    title: 'Mensajes en masa',
    component: MassComponent
  },
];
