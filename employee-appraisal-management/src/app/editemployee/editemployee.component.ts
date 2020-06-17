import { Component, OnInit } from "@angular/core";
import { Employee } from "../Employee";
import { ActivatedRoute } from "@angular/router";
import { EmployeeService } from "../services/employeeservice.service";
import { Router } from "@angular/router/";
import { Validators, FormControl } from "@angular/forms";

@Component({
  templateUrl: "./editemployee.component.html",
  styleUrls: ["./editemployee.component.css"],
})
export class EditemployeeComponent implements OnInit {
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

  // Services injected in constructor
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // Initializes variables
  ngOnInit() {
    var id = this.route.snapshot.params["id"];
    this.employeeService.getEmployee(id).then((response) => {
      response.json().then((employee) => {
        this.employee = employee[0];
      });
    });
  }

  // Form Validation
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

  // Method to update and employee
  updateEmployee() {
    this.employeeService.updateEmployee(this.employee).then((response) => {
      response.json().then((data) => {
        console.log(data);
        if (data["error"]) {
          alert(data["error"]);
        } else {
          alert(data["message"]);
          this.router.navigate(["Employees"]);
        }
      });
    });
  }

  // Method to cancel update employee operation
  cancelEmployee() {
    this.router.navigate(["Employees"]);
  }
}
