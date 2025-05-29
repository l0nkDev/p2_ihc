import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'dashboardcard',
  templateUrl: './dashboardcard.component.html',
  imports: [FormsModule, RouterLink],
})

export class DashboardCardComponent {
  @Input() colored: boolean = false;
  @Input() color: string = '';
  @Input() priority: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() time: string = '';
  @Input() type: string = '';
}


