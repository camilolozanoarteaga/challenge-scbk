import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsInformation } from 'src/app/core/models/account.model';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent implements OnInit {
  @Input() account: AccountsInformation;
  accountNumber: string;
  mony: number;

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
