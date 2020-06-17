import { AddemployeeComponent } from "../addemployee/addemployee.component";
import { EditemployeeComponent } from "../editemployee/editemployee.component";
import { Routes } from "@angular/router";
import { EmployeePageComponent } from "../employeepage/employeepage.component";
import { EmployeeListComponent } from "../employeelist/employeelist.component";

export const routes: Routes = [
  { path: "Employees", component: EmployeeListComponent },
  { path: "AddEmployee", component: AddemployeeComponent },
  { path: "EditEmployee/:id", component: EditemployeeComponent },
  { path: "Employee/:id", component: EmployeePageComponent },
  { path: "**", redirectTo: "Employees" },
];
