import { Component, Input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'dashboardcard',
  templateUrl: './dashboardcard.component.html',
  imports: [FormsModule],
})

export class DashboardCardComponent {
  @Input() id: number = -1;
  @Input() colored: boolean = false;
  @Input() color: string = '';
  @Input() priority: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() time: string = '';
  @Input() type: string = '';

  deleteEvent = output<number>();

  clicked() {
    this.deleteEvent.emit(this.id);
  }
}


