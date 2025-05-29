import { Routes } from '@angular/router';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { ProspectsComponent } from './screens/prospects/prospects.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Dashboard',
    component: DashboardComponent
  },
  {
    path: 'prospects',
    title: 'Prospectos',
    component: ProspectsComponent
  },
];
