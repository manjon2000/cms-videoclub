import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { AuthService } from 'src/app/shared/services/auth.service';
import * as ui from '../../shared/ui.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnDestroy {

  loading!: boolean;
  uiSubscribe!: Subscription;

  registerForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>,
    private formBuilder: FormBuilder
  ) {
    this.uiSubscribe = this.store.select('ui').subscribe(ui => {
      this.loading = ui.isLoading
    });

    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.min(4)]],
      email:    ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(6)]],
    })
  }

  ngOnDestroy(): void {
    this.uiSubscribe.unsubscribe();
  }


  setUser(event: Event) {

    event.preventDefault();

    if (this.registerForm.invalid) return;

    this.store.dispatch(ui.isLoading());

    const { username, email, password } = this.registerForm.value;

    if (this.registerForm.invalid) return;
  }
}
