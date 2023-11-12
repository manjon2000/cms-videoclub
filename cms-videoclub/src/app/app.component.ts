import { Component, OnInit, inject } from '@angular/core';
import { Auth, User, user } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { AuthService } from './shared/services/auth.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private auth: AuthService, private firestore: Firestore) {
    this.auth.initAuthListener();
    this.firestore
  }
  ngOnInit(): void {}
}
