import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent implements OnInit {
  accountNumber: string;
  mony: number;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.accountNumber = '0092 - Cuenta de ahorros';
    this.mony = 3000500;
  }
}
