import { Routes } from '@angular/router';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { ProspectsComponent } from './screens/prospects/prospects.component';
import { ProfileComponent } from './screens/profile/profile.component';

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
];
