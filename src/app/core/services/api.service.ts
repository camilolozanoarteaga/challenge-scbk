import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

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
    }),
    responseType: 'text' as 'json',
  };

  constructor(private http: HttpClient) {}

  getAccounts(): Observable<AccountsInformation[]> {
    const url = `${this.BASE_URL}accounts`;
    return this.http.get<Accounts>(url, this.httpOptions).pipe(
      map((data: Accounts) => this.parseJson(data.toString())),
      map((data: Accounts) => data.cuentas),
      catchError(this.handleError) // then handle the error
    );
  }

  getAccountMovement(): Observable<MovementAccountInformation[]> {
    const url = `${this.BASE_URL}movements`;
    return this.http.get<MovementAccount>(url, this.httpOptions).pipe(
      map((data: MovementAccount) => this.parseJson(data.toString())),
      map((data: MovementAccount) => data.movimientos)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }

  private parseJson(data: string): any {
    const jsonData = data || '';
    return JSON.parse(jsonData);
  }
}
