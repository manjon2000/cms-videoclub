import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private auth: AuthService) {
  }
  ngOnInit(): void {}
}
