const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
	empid: { type: String, required: true, unique: true },
	firstname: { type: String, required: true },
	lastname: { type: String, required: true },
	age: { type: Number, required: true },
	phone: { type: String, required: true },
	department: { type: String, required: true },
	designation: { type: String, required: true },
	salary: { type: Number },
	productivity: { type: Number },
	attendance: { type: Number },
	performance: { type: String },
	apprStatus: { type: String },
});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
