import { Component, Input, Output, EventEmitter } from "@angular/core";
import { EmployeeService } from "../services/employeeservice.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-employeedetail",
  templateUrl: "./employeedetail.component.html",
  styleUrls: ["./employeedetail.component.css"],
})
export class EmployeedetailComponent {
  // Input variable to display properties of an employee
  @Input() employee;

  // Output variable used to tell the parent component to refesh the employee list after successful delete
  @Output() refreshEmployeeList: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  viewEmployee() {
    this.router.navigate(["Employee/" + this.employee._id]);
  }

  // Method to edit employee details
  editEmployee() {
    this.router.navigate(["EditEmployee/" + this.employee._id]);
  }

  // Method to delete an employee
  async deleteEmployee() {
    var result = confirm("Are you sure, you want to delete this Employee?");
    if (result) {
      this.employeeService
        .deleteEmployee(this.employee._id)
        .then((response) => {
          response.json().then((data) => {
            this.refreshEmployeeList.emit(true);
            this.router.navigate(["Employees"]);
            alert(data["message"]);
          });
        });
    }
  }
}
