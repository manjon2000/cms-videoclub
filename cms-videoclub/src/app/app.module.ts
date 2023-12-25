import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



// ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Reactive Forms
import { ReactiveFormsModule } from '@angular/forms';

// Swal

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
import { AlertComponent } from './components/alert/alert.component';
import { InputComponent } from './components/input/input.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ChipsComponent } from './components/chips/chips.component';



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
    AlertComponent,
    InputComponent,
    AccordionComponent,
    ChipsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
   
    HttpClientModule,
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
