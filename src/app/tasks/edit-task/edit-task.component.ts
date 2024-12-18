import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {  Task } from '../task/task.model';
import { tasks } from '../../dummy-tasks';
@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent {
    @Output() cancel = new EventEmitter<void>();
    @Output() edit = new EventEmitter<Task>();
    @Input() id!:string;

    @Input() task: any;

  
    onCancel(){
      this.cancel.emit();
    }

    onSubmit(){
      this.edit.emit(this.task);
    }
}
