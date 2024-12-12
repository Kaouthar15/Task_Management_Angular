import { Component, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from "./task/task.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'udemy_course';
  users = DUMMY_USERS;


  selectedId!:string;
  selectedName!:string;



  onSelectUser(user: { id: string, name: string }){
    console.log('Selected user id with '+user.id + " the name is : "+user.name);
    this.selectedId = user.id;
    this.selectedName = user.name;
  }
}