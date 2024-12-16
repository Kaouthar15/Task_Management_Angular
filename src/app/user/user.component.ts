import { Component,EventEmitter,Input, Output } from '@angular/core';

// interface User {
//   id:string;
//   name:string;
//   avatar:string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required:true}) avatar!: string;
  // @Input() name!: string;
  // @Input() id!:string; 

  @Input({required:true}) user! : {
    id:string;
    name:string;
    avatar:string;
  }

  @Output() select = new EventEmitter<{id:string,name:string}>();
  
  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser( ){
    this.select.emit({id:this.user.id,name:this.user.name});
  }

}
