import { Injectable } from '@angular/core';
import {User} from './models/user.model';
@Injectable()
export class ActiveUsersService {
    private activated: number = 0;
    private deactivated: number = 0;

  Users: User[] = [
      new User('Anna',true),
      new User('Avi',false)
  ];
  constructor() { }
  changeActivation(id:number){
      let activation = !this.Users[id].active;
      if(activation){
          this.activated += 1;
          console.log('in total users changed to activated '+this.activated+' times')
      }else{
          this.deactivated += 1;
          console.log('in total users changed to deactivated '+this.deactivated+' times')
      }
      this.Users[id].active = activation;
  }
}
