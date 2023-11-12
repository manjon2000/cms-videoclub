import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Environment
import { db } from 'src/environments/environment';

// Firebase
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';


// ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Reactive Forms
import { ReactiveFormsModule } from '@angular/forms';

// Swal
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import {  AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './layouts/login/login.component';
import { RegisterComponent } from './layouts/register/register.component';
import { DashboardComponent } from './layouts/auth/dashboard/dashboard.component'; 
import { appReducers } from './app.reducer';
import { ListDropdownComponent } from './components/list-dropdown/list-dropdown.component';
import { EmployeesIndexComponent } from './pages/employees/employees.index/employees.index.component';
import { EmployeesEditComponent } from './pages/employees/employees.edit/employees.edit.component';
import { EmployeesDeleteComponent } from './pages/employees/employees.delete/employees.delete.component';
import { FilmsIndexComponent } from './pages/films/films.index/films.index.component';
import { FilmsEditComponent } from './pages/films/films.edit/films.edit.component';
import { FilmsDeleteComponent } from './pages/films/films.delete/films.delete.component';
import { DashboardPageComponent } from './pages/dashboard/dashboard.page.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ListDropdownComponent,
    EmployeesIndexComponent,
    EmployeesEditComponent,
    EmployeesDeleteComponent,
    FilmsIndexComponent,
    FilmsEditComponent,
    FilmsDeleteComponent,
    DashboardPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
   
    HttpClientModule,
    SweetAlert2Module.forRoot({}),
    provideFirebaseApp(() => initializeApp(db.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    StoreModule.forRoot(
      appReducers
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false
    })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
