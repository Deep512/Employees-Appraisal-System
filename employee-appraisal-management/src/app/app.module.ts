import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { PanelModule } from "primeng/panel";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatFormFieldModule, MatInputModule } from "@angular/material";

import { AppComponent } from "./app.component";
import { EmployeedetailComponent } from "./employeedetail/employeedetail.component";
import { AddemployeeComponent } from "./addemployee/addemployee.component";
import { EditemployeeComponent } from "./editemployee/editemployee.component";
import { RouterModule } from "@angular/router";
import { EmployeeListComponent } from "./employeelist/employeelist.component";

import { routes } from "./routes/routes";
import { EmployeePageComponent } from "./employeepage/employeepage.component";

@NgModule({
  declarations: [
    AppComponent,
    EmployeedetailComponent,
    AddemployeeComponent,
    EditemployeeComponent,
    EmployeeListComponent,
    EmployeePageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    PanelModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
