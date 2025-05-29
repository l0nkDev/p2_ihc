import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'activity',
  templateUrl: './activity.component.html',
  imports: [FormsModule, RouterLink],
})

export class ActivityComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
}


