import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {


  @Input() selectedId!:string;
  @Input() selectedName!:string; 

  
  onSelectUser(){
    console.log("Selected user id: " + this.selectedId + " and name: " + this.selectedName);
  }
}
