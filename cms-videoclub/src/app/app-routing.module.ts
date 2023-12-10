import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './layouts/register/register.component';
import { LoginComponent } from './layouts/login/login.component';
import { EmployeesIndexComponent } from './pages/employees/employees.index/employees.index.component';
import { EmployeesEditComponent } from './pages/employees/employees.edit/employees.edit.component';
import { EmployeesDeleteComponent } from './pages/employees/employees.delete/employees.delete.component';
import { DashboardPageComponent } from './pages/dashboard/dashboard.page.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { 
    path: 'dashboard', 
    component: DashboardPageComponent, 
    pathMatch: 'full',
    // canActivate: [ authGuard ]
  },
  {
    path: 'employees',
    component: EmployeesIndexComponent,
    pathMatch: 'full',
    // canActivate: [ authGuard ]
  },
  {
    path: 'employees/edit',
    component: EmployeesEditComponent,
    pathMatch: 'full',
    // canActivate: [ authGuard ]
  },
  {
    path: 'employees/delete',
    component: EmployeesDeleteComponent,
    pathMatch: 'full',
    // canActivate: [ authGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
