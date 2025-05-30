import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HistoryEntry } from "../../components/historyentry/historyentry.component";

@Component({
  selector: 'prospects',
  templateUrl: './profile.component.html',
  imports: [FormsModule, HistoryEntry],
})

export class ProfileComponent {
  index = -1;
  text = '';

  overlay = false;

  openOverlay(id: number) {
    this.index = id;
    this.overlay = true;
  }

  closeOverlay() {
    this.index = -1;
    this.text = '';
    this.overlay = false;
  }
}


