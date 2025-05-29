import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HistoryEntry } from "../../components/historyentry/historyentry.component";

@Component({
  selector: 'automatization',
  templateUrl: './automatization.component.html',
  imports: [FormsModule, HistoryEntry],
})

export class AutomatizationComponent {


}


