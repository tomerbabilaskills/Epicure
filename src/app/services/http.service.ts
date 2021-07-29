import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { IDish, IRestaurant } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  apiUrl: string = 'http://localhost:3000/api';

  httpOptions = {
    header: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getChefs() {
    return this.http.get(`${this.apiUrl}/chef`);
  }

  getRestaurants(): Observable<IRestaurant[]> {
    return this.http.get<IRestaurant[]>(`${this.apiUrl}/restaurant`);
  }

  getDishes(): Observable<IDish[]> {
    return this.http.get<IDish[]>(`${this.apiUrl}/dish`);
  }
}
