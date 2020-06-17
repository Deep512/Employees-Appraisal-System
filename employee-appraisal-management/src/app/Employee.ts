export class Employee {
  _id: string;
  empid: string;
  firstname: string;
  lastname: string;
  age: number;
  department: string;
  designation: string;
  salary: number;
  phone: string;
  productivity: number;
  attendance: number;
  performance: string;
  apprStatus: string;

  constructor(
    empid: string,
    firstname: string,
    lastname: string,
    age: number,
    phone: string,
    department: string,
    designation: string,
    salary: number,
    productivity: number,
    attendance: number,
    performance: string,
    apprStatus: string
  ) {
    this.empid = empid;
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.phone = phone;
    this.department = department;
    this.designation = designation;
    this.productivity = productivity;
    this.attendance = attendance;
    this.performance = performance;
    this.apprStatus = apprStatus;
    this.salary = salary;
  }
}
