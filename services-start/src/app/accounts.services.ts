import {Injectable,EventEmitter} from '@angular/core';
import {LogStatusService} from './log-status.service';
@Injectable()
export class AccountsService {
    statusChanged = new EventEmitter<string>();
    constructor(private logStatusService: LogStatusService){
        // Initiation of LogStatusService
    }

     // Add meta data to service
    accounts = [
        {
            name: 'test Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    AccountAdd(name: string, status: string) {
        this.accounts.push({name:name,status:status});
        this.logStatusService.logStatus(status);
    }

    StatusChange(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.logStatusService.logStatus(newStatus);
    }

}