import { Component,EventEmitter,Input, Output } from '@angular/core';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) avatar!: string;
  @Input() name!: string;
  @Input() id!:string;

  @Output() select = new EventEmitter<{id:string,name:string}>();
  
  get imagePath(){
    return 'assets/users/' + this.avatar;
  }

  onSelectUser( ){
    this.select.emit({id:this.id,name:this.name});
  }

}
