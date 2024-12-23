import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData, Task } from './task/task.model';
import { tasks } from '../dummy-tasks';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskComponent, NewTaskComponent,EditTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {


  constructor(private tasksService: TasksService){
  }

  @Input() selectedId!:string;
  @Input() selectedName!:string; 

  isAddingTask:boolean = false;
  isEditingTask:boolean = false;


  @Output() taskId = new EventEmitter<string>();

  tasks = tasks;
  selectedTask : any;
  
  onSelectUser(){
    console.log("Selected user id: " + this.selectedId + " and name: " + this.selectedName);
  }
  
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.selectedId);
  }

  onCompleteTask(id:string){
    this.tasks = this.tasks.filter((e)=>id !== e.id);
  }

  onStartsAddTask(){
    this.isAddingTask = true;
  }

  onCancelAddTask(){
    this.isAddingTask = false;
  }

  onCancelEditTask(){
    this.isEditingTask = false;
  }


  onSubmitAddTask(taskData : NewTaskData){

    this.tasks.push({
      id : new Date().getTime().toString(),
      userId : this.selectedId,
      title : taskData.title,
      summary : taskData.summary,
      dueDate : taskData.dueData
    })
    this.isAddingTask = false;
  }

  onSelectedTask(id:string){
    this.isEditingTask = true;
    this.selectedTask = tasks.find((e)=>e.id === id);
  }

  onSubmitEditTask(taskData : Task){
    const index = this.tasks.findIndex((e)=>e.id === taskData.id);
    if (index !== -1){
      this.tasks[index] = taskData;
      this.isEditingTask = false; 
    }
  }
}