import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { IChefOfTheWeek, IDish, IRestaurant } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class HttpService {
  apiUrl: string = 'http://localhost:3000/api';

  httpOptions = {
    header: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getChefOfTheWeek(): Observable<IChefOfTheWeek> {
    return this.http
      .get<IChefOfTheWeek>(`${this.apiUrl}/chef/chef-of-the-week`)
      .pipe(catchError(this.handleError));
  }

  getRestaurants(): Observable<IRestaurant[]> {
    return this.http
      .get<IRestaurant[]>(`${this.apiUrl}/restaurant`)
      .pipe(catchError(this.handleError));
  }

  getDishes(): Observable<IDish[]> {
    return this.http
      .get<IDish[]>(`${this.apiUrl}/dish`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}
