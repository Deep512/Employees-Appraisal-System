import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../services/employeeservice.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Employee } from "../Employee";
@Component({
  selector: "app-employeepage",
  templateUrl: "./employeepage.component.html",
  styleUrls: ["./employeepage.component.css"],
})
export class EmployeePageComponent implements OnInit {
  employee: Employee;
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    var id = this.route.snapshot.params["id"];
    this.employeeService.getEmployee(id).then((response) => {
      response.json().then((employee) => {
        this.employee = employee[0];
      });
    });
  }

  editEmployee() {
    this.router.navigate(["EditEmployee/" + this.employee._id]);
  }

  goBack() {
    this.location.back();
  }
}
