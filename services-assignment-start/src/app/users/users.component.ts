import { Component, OnInit } from '@angular/core';
import {ActiveUsersService} from '../active-users.service';
import {User} from "../models/user.model";
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  activeUsers: User[] = [];
  inactiveUsers: User[] = [];
  Users: User[] = [];
  constructor(private UsersService: ActiveUsersService) {
/*    this.activeUsers = UsersService.Users.filter((user)=>{return user.active});
    this.inactiveUsers = UsersService.Users.filter((user)=>{return !user.active});*/
    this.Users = UsersService.Users;
  }

  ngOnInit() {
  }

  changeStatus(id){
    this.UsersService.changeActivation(id);
  }
}
