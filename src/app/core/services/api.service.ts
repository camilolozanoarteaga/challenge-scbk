import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Accounts, AccountsInformation } from '../models/account.model';
import {
  MovementAccount,
  MovementAccountInformation,
} from '../models/movement-account.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private BASE_URL =
    'https://3e03da03-b5c5-46b2-ad4b-662656e20608.mock.pstmn.io/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
      'Content-Security-Policy': `connect-src 'self' ${this.BASE_URL}`,
    }),
    responseType: 'text' as 'json',
  };

  constructor(private http: HttpClient) {}

  getAccounts(): Observable<AccountsInformation[]> {
    const url = `${this.BASE_URL}accounts`;
    return this.http.get<Accounts>(url, this.httpOptions).pipe(
      map((data: Accounts) => this.parseJson(data.toString())),
      map((data: Accounts) => data.cuentas)
    );
  }

  getAccountMovement(): Observable<MovementAccountInformation[]> {
    const url = `${this.BASE_URL}movements`;
    return this.http.get<MovementAccount>(url, this.httpOptions).pipe(
      map((data: MovementAccount) => this.parseJson(data.toString())),
      map((data: MovementAccount) => data.movimientos)
    );
  }

  private parseJson(data: string): any {
    const jsonData = data || '';
    return JSON.parse(jsonData);
  }
}
// https://api.mocklets.com/ext/

// https://api.mocklets.com/ext/
