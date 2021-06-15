import { Component, Input, OnInit } from '@angular/core';
import { AccountsInformation } from 'src/app/core/models/account.model';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent implements OnInit {
  @Input() account: AccountsInformation = null;

  constructor() {}

  ngOnInit(): void {}
}
