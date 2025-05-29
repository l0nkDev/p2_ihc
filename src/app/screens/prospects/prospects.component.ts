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
  converted = ['Joaquin Chumacero|Nunca', 'Ema Moya|Nunca', 'Denis Bolaños|Nunca', ];
  uninterested = ['Joaquin Chumacero|Nunca', 'Ema Moya|Nunca', 'Denis Bolaños|Nunca', ];

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
}


