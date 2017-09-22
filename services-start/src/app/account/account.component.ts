import { Component, EventEmitter, Input, Output } from '@angular/core';
import {LogStatusService} from '../log-status.service';
import {AccountsService} from '../accounts.services';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: []
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private logging_service: LogStatusService,private account_service:AccountsService){

  }

  onSetTo(status: string) {
    this.account_service.statusChanged.emit(status);
    this.account_service.StatusChange(this.id, status);
  }
}
