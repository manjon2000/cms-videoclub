import { Injectable, inject } from '@angular/core';

import { Auth, createUserWithEmailAndPassword, authState, signInWithEmailAndPassword, signOut, updateProfile } from '@angular/fire/auth';

import { Firestore } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { collection, addDoc } from 'firebase/firestore';

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

  auth: Auth = inject(Auth);

  constructor(
    private firestore: Firestore,
    private store: Store<AppState>,
    private http: HttpClient
  ) { }


  initAuthListener() {
    authState(this.auth as any | null).subscribe((user) => {

      if(user && user != undefined) {
        this.store.dispatch(auth.setUser({
          user: {
            id: user?.uid,
            usename: user?.displayName,
            email: user?.email
          }
        }));
  
        return user;
      }

      return;

    })
  }

  async registerWhitEmailAndPassword(username: any, email: any, password: any) {
    const credentials = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    ).then(({ user }) => {
      updateProfile(user, {
        displayName: username
      })
    })
    return credentials;
  }

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

  async logOut() {
    return await signOut(this.auth);
  }
  async createDocumentToUser(task: TaskWorkInterface) {

    const collectionRef = collection(this.firestore, '/works/');

    if (!collectionRef) {
      console.error("Collection reference is invalid");
      return;
    }

    return addDoc(collectionRef, task);
  }

  isAuth() {
    return authState(this.auth as Auth | any).pipe(
      map(fbUser => fbUser !== null)
    );
  }
}