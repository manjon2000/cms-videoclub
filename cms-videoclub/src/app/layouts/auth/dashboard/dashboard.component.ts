import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { AuthService } from 'src/app/shared/services/auth.service';
import * as auth from '../../../auth/auth.actions'

@Component({
  selector: 'ui-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  formTaskWork!: FormGroup;
  userName!: string | null | undefined;
  expandMenu: boolean = false;

  constructor(
    private auth: AuthService, 
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store<AppState>
    ) {
      this.formTaskWork = this.formBuilder.group({
        client:       ['', [Validators.required, Validators.minLength(2)]],
        hours:        ['', [Validators.required]],
        description:  ['', [Validators.required, Validators.minLength(4)]]
      })
    }

    ngOnInit(): void {
      this.store.select('auth').subscribe( ({user}) => {
        this.userName = user?.usename
      })
    }

    expandedMenu(): void {
      this.expandMenu = !this.expandMenu;
      console.log(this.expandMenu)
    }
  

  handlelogOut() {
    this.store.dispatch(auth.unSetUser());
    this.router.navigate(['/'])
  }
}
