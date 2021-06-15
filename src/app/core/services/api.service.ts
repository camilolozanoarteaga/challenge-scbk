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
  private BASE_URL = 'https://run.mocky.io/v3/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Content-Security-Policy': 'default-src "self"; connect-src none',
    }),
    responseType: 'text' as 'json',
  };

  constructor(private http: HttpClient) {}

  getAccounts(): Observable<AccountsInformation[]> {
    const url = `${this.BASE_URL}a38ba3ba-1d52-4c57-8e30-c891723ce623`;
    return this.http.get<Accounts>(url, this.httpOptions).pipe(
      map((data: Accounts) => this.parseJson(data.toString())),
      map((data: Accounts) => data.cuentas)
    );
  }

  getAccountMovement(): Observable<MovementAccountInformation[]> {
    const url = `${this.BASE_URL}51df19f5-4499-4b0f-8787-4be2955c151d`;
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
