import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'historyentry',
  templateUrl: './historyentry.component.html',
  imports: [FormsModule],
})

export class HistoryEntry {
  @Input() title: string = '';
  @Input() subtitle: string = '';
}


