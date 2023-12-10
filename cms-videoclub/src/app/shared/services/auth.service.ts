import { Injectable, inject } from '@angular/core';


import { Store } from '@ngrx/store';

import { map } from 'rxjs';
import { AppState } from 'src/app/app.reducer';

import * as auth from '../../auth/auth.actions';
import { UserModel } from 'src/app/models/user/user.model';


import { HttpClient } from  '@angular/common/http';



export interface UsersCollection {
  uid: string,
  name: string | null,
  email: string | null,
}

export interface TaskWorkInterface {
  client: string;
  hours: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private store: Store<AppState>,
    private http: HttpClient
  ) { }


  signInWhitEmailAndPassword(email: any, password: any): any {
    const request = this.http.post('http://localhost:4000/v1/auth/login', {
      email,
      password
    }, {
      responseType: 'json',
      withCredentials: true
    })

    if(!request) return null;

    return request
  }
}