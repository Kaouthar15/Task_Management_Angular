import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule,TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {


  @Input() selectedId!:string;
  @Input() selectedName!:string; 

  tasks = [
    {
      id : 't1',
      userId : 'u1',
      title : 'Master Angular',
      summary  : 'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate : '2025-12-31'
    },
    {
      id : 't2',
      userId : 'u1',
      title : 'Master SpringBoot',
      summary  : 'Learn all the basic and advanced features of SpringBoot & how to apply them.',
      dueDate : '2025-12-31'
    },
    {
      id : 't3',
      userId : 'u2',
      title : 'Master JavaScript',
      summary  : 'Learn all the basic and advanced features of Javasprict & how to apply them.',
      dueDate : '2023-01-09' 
    }
  ]
  
  onSelectUser(){
    console.log("Selected user id: " + this.selectedId + " and name: " + this.selectedName);
  }
  get selectedUserTasks() {
    return this.tasks.filter((e)=>this.selectedId === e.userId);
  }

  onCompleteTask(id:string){
    this.tasks = this.tasks.filter((e)=>id !== e.id);
  }
}
