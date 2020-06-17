import { Injectable } from "@angular/core";
import { Employee } from "../Employee";

@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  constructor() {}

  // Returns all the employees
  async getAllEmployees(): Promise<any> {
    return await fetch("http://localhost:3000/all", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });
  }

  // Adds an employee to employee list
  async addEmployee(employee: Employee): Promise<any> {
    return await fetch("http://localhost:3000/add", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        empid: employee.empid,
        firstname: employee.firstname,
        lastname: employee.lastname,
        age: employee.age,
        department: employee.department,
        designation: employee.designation,
        phone: employee.phone,
        attendance: employee.attendance,
        performance: employee.performance,
        productivity: employee.productivity,
        apprStatus: employee.apprStatus,
        salary: employee.salary,
      }),
    });
  }

  // Update employee details
  async updateEmployee(employee: Employee): Promise<any> {
    return await fetch("http://localhost:3000/update", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: employee._id,
        firstname: employee.firstname,
        lastname: employee.lastname,
        age: employee.age,
        department: employee.department,
        designation: employee.designation,
        phone: employee.phone,
        attendance: employee.attendance,
        performance: employee.performance,
        productivity: employee.productivity,
        apprStatus: employee.apprStatus,
        salary: employee.salary,
      }),
    });
  }

  // Deletes an employee from employee list
  async deleteEmployee(id: string): Promise<any> {
    return await fetch("http://localhost:3000/delete", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
      }),
    });
  }

  // Returns an employee with passed employee id from employee list
  async getEmployee(id: string): Promise<any> {
    return await fetch("http://localhost:3000/one", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
      }),
    });
  }

  // Returns all the employees
  async getAllGrantedEmployees(): Promise<any> {
    return await fetch("http://localhost:3000/granted", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });
  }
}
