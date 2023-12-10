import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { LoginRequestInterface } from 'src/app/shared/interface/login.request.interface';
import { AuthService } from 'src/app/shared/services/auth.service';
import * as ui from 'src/app/shared/ui.actions';
import * as authUser from 'src/app/auth/auth.actions';
// import { decodeToken } from 'src/app/utils/jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm!: FormGroup;
  loading!: boolean;
  uiSubscription!: Subscription;

  constructor(
    private store: Store<AppState>,
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(6)]]
    });

    this.uiSubscription = this.store.select('ui').subscribe(ui => {
      this.loading = ui.isLoading
    });
  }

  ngOnDestroy(): void {
    this.uiSubscription.unsubscribe();
  }

  login(event: Event) {
    event.preventDefault();
    if (this.loginForm.invalid) { return; }

    const { email, password } = this.loginForm.value;

    this.store.dispatch(ui.isLoading());

    this.auth.signInWhitEmailAndPassword(email, password)?.subscribe((e: any) => {
      console.log(e)
    })
  }
}
