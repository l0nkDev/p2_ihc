import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'historycard',
  templateUrl: './historycard.component.html',
  imports: [FormsModule],
})

export class HistoryCardComponent {;
  @Input() text: string = '';
}


