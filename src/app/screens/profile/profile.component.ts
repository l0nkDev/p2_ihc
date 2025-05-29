import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'prospects',
  templateUrl: './profile.component.html',
  imports: [FormsModule, RouterLink, CdkDropList, CdkDrag],
})

export class ProfileComponent {


}


