import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './CreateEmployee/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './EmployeeDetails/employee-details/employee-details.component';
import { EmployeeListComponent } from './EmployeeList/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './EmployeeUpdate/update-employee/update-employee.component';


const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
