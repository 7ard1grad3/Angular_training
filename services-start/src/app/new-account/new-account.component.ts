import { Component, EventEmitter, Output } from '@angular/core';
import {LogStatusService} from "../log-status.service";
import {AccountsService} from "../accounts.services";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: []
})
export class NewAccountComponent {

  constructor(private loggingService: LogStatusService,private accountService: AccountsService){
    accountService.statusChanged.subscribe(
        (status: string) => {
          alert('New status updated to: ' + status)
        }
    )
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.AccountAdd(accountName,accountStatus);
  }
}
