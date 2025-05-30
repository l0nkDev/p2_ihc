import { Component, Input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'servicecard',
  templateUrl: './servicecard.component.html',
  imports: [FormsModule],
})

export class ServiceCardComponent {
  @Input() id: number = -1;
  @Input() title: string = '';
  @Input() platform: string = '';
  @Input() subtitle: string = '';
  @Input() price: string = '';
  @Input() clients: string = '';

  deleteEvent = output<number>();

  clicked() {
    this.deleteEvent.emit(this.id);
  }


}


