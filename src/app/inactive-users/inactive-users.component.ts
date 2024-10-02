import { Component, EventEmitter, Input, Output } from '@angular/core';
import { userServices } from '../user.services';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})

export class InactiveUsersComponent {

  users:string[];

  constructor(private userServices: userServices){
    this.users = userServices.inactiveUsers;
  }
  onSetToActive(id: number):void {
    this.userServices.setActive(id);
  }
}