import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CreateEmployeeComponent } from './CreateEmployee/create-employee/create-employee.component';
import { EmployeeListComponent } from './EmployeeList/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './EmployeeDetails/employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './EmployeeUpdate/update-employee/update-employee.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
