import { Injectable } from '@angular/core';

//@Injectable()
export class LogStatusService {

  constructor() { }
  logStatus(status:string){
    console.log('A server status changed, new status: ' + status);
  }
}
