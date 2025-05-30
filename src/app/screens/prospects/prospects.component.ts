import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'prospects',
  templateUrl: './prospects.component.html',
  imports: [FormsModule, RouterLink, CdkDropList, CdkDrag],
})

export class ProspectsComponent {
  new = ['Joaquin Chumacero|Nunca', 'Ema Moya|Nunca', 'Denis Bolaños|Nunca', ];
  contacted = ['Saturnino Mamani|Hace 3h', ];
  following = ['Maria Duran|Ayer', 'Eduardo Cristobal|Hace 12h', 'Elena Verdu|Hace 8m', ];
  converted = ['Javier Tello|Ayer', 'Aziz Corrales|Hace 6d', ];
  uninterested = ['Carlos Sejas|Febrero 15', 'Jose Garces|Febrero 28', 'Cintia Caceres|Marzo 5', 'Gloria Vallejo|Marzo 14', 'Irati Borrego|Marzo 18', ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

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


