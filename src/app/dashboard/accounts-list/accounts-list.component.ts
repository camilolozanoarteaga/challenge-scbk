import { Component, OnInit } from '@angular/core';
import { AccountsInformation } from 'src/app/core/models/account.model';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css'],
})
export class AccountsListComponent implements OnInit {
  accountsList: AccountsInformation[];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAccounts().subscribe((data) => console.log(data));

    this.accountsList = [];
    // .subscribe(
    //   (payload: AccountsInformation[]) => (this.accountsList = payload)
    // );
  }
}
