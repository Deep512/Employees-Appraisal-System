import { Component } from "@angular/core";
import { EmployeeService } from "../services/employeeservice.service";
import { Router } from "@angular/router";
import { Employee } from "../Employee";
import { FormControl, Validators } from "@angular/forms";
@Component({
  templateUrl: "./addemployee.component.html",
  styleUrls: ["./addemployee.component.css"],
})
export class AddemployeeComponent {
  firstname: string;
  lastname: string;
  age: number;
  department: string;
  designation: string;
  phone: string;
  apprStatus: string;
  salary: number;
  productivity: number;
  attendance: number;
  performance: string;
  employee: Employee;

  // Validators
  first = new FormControl("", [
    Validators.required,
    Validators.pattern("[a-zA-Z ]*"),
  ]);

  last = new FormControl("", [
    Validators.required,
    Validators.pattern("[a-zA-Z ]*"),
  ]);

  phoneNo = new FormControl("", [
    Validators.required,
    Validators.pattern("[0-9]{10}"),
  ]);
  Age = new FormControl("", [Validators.required]);

  dep = new FormControl("", [
    Validators.required,
    Validators.pattern("[a-zA-Z ]*"),
  ]);

  des = new FormControl("", [
    Validators.required,
    Validators.pattern("[a-zA-Z ]*"),
  ]);

  sal = new FormControl("", [
    Validators.required,
    Validators.pattern("[0-9]*"),
  ]);

  prod = new FormControl("", [
    Validators.required,
    Validators.pattern("[1-5]"),
  ]);

  attd = new FormControl("", [
    Validators.required,
    Validators.pattern("^[1-9][0-9]?$|^100$"),
  ]);

  per = new FormControl("", [Validators.required]);

  appr = new FormControl("", [
    Validators.required,
    Validators.pattern("[a-zA-Z ]*"),
  ]);

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  // Method to save an employee
  saveEmployee() {
    this.employee = new Employee(
      this.makeRandomID(),
      this.firstname,
      this.lastname,
      this.age,
      this.phone,
      this.department,
      this.designation,
      this.salary,
      this.productivity,
      this.attendance,
      this.performance,
      this.apprStatus
    );
    this.employeeService.addEmployee(this.employee).then((response) => {
      response.json().then((data) => {
        if (data["error"]) {
          alert(data["error"]);
        } else {
          this.router.navigate(["Employees"]);
        }
      });
    });
  }

  // Method to cancel the add operation
  cancelEmployee() {
    this.router.navigate(["Employees"]);
  }

  getErrorMessage() {
    return this.phoneNo.hasError("required")
      ? "You must enter a value"
      : this.phoneNo.hasError("pattern")
      ? "Not a valid phone no"
      : "";
  }
  getErrorAge() {
    return this.Age.hasError("required") ? "Please enter a value" : "";
  }

  getErrorFirst() {
    return this.first.hasError("required")
      ? "Please enter a value"
      : this.first.hasError("pattern")
      ? "Not a valid name"
      : "";
  }

  getErrorLast() {
    return this.last.hasError("required")
      ? "Please enter a value"
      : this.last.hasError("pattern")
      ? "Not a valid name"
      : "";
  }

  getErrorDep() {
    return this.dep.hasError("required")
      ? "Please enter a value"
      : this.dep.hasError("pattern")
      ? "Not a valid Department Name"
      : "";
  }

  getErrorDes() {
    return this.des.hasError("required")
      ? "Please enter a value"
      : this.des.hasError("pattern")
      ? "Not a valid Designation"
      : "";
  }

  getErrorSal() {
    return this.sal.hasError("required")
      ? "Please enter a value"
      : this.des.hasError("pattern")
      ? "Not a valid Salary Figure"
      : "";
  }
  getErrorProd() {
    return this.prod.hasError("required")
      ? "Please enter a value"
      : this.prod.hasError("pattern")
      ? "Not a valid rating"
      : "";
  }

  getErrorAttd() {
    return this.attd.hasError("required")
      ? "Please enter a value"
      : this.attd.hasError("pattern")
      ? "Not a valid percentage"
      : "";
  }

  getErrorPer() {
    return this.per.hasError("required") ? "Please enter a value" : "";
  }

  getErrorAppr() {
    return this.appr.hasError("required") ? "Please enter a value" : "";
  }

  // Creates random id for employee
  makeRandomID(): string {
    var text = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
}
