import { ErrorHandler, Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHandler,
} from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';

export interface User {
  name: string;
  email: string;
  password: String;
}

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}

  configUrl = 'assets/config.json';

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.configUrl, user);
  }
}
