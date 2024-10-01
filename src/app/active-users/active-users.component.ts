import { Component, EventEmitter, Input, Output } from '@angular/core';
import { userServices } from '../user.services';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {

  users: string[];

  constructor(private userServices:userServices){
    this.users = this.userServices.activeUsers;
  }
  
  onSetToInactive(id: number) {
    this.userServices.setInActive(id);
  }
}