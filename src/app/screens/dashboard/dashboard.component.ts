import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DashboardCardComponent } from '../../components/dashboardcard/dashboardcard.component';
import { ActivityComponent } from '../../components/activity/activity.component';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  imports: [FormsModule, RouterLink, DashboardCardComponent, ActivityComponent],
})

export class DashboardComponent {
}


