import { Component } from '@angular/core';
import { find } from 'rxjs';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  onSelectUser(){
    return find
  }
}
