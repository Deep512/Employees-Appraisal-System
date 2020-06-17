const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Employee = require("./models/employee");
dotenv.config();

mongoose.connect(process.env.MONGO_LOC, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Get all employees
app.post("/all", async (req, res) => {
	await Employee.find()
		.then((employees) => {
			res.json(employees);
		})
		.catch((err) => {
			res.status(400).send({ error: "Error getting employees" });
		});
});

// Add an employee
app.post("/add", async (req, res) => {
	if (
		!req.body.empid ||
		!req.body.firstname ||
		!req.body.lastname ||
		!req.body.age ||
		!req.body.phone ||
		!req.body.department ||
		!req.body.designation ||
		!req.body.salary
	) {
		console.log("Invalid employee details!");
		res.status(400).json({ error: "Invalid employee details" });
		return;
	}
	let new_employee = Employee(req.body);
	await new_employee.save((err) => {
		if (err) {
			console.log(err);
			res.json({ message: "employee already exists!" });
			return;
		}
	});
	return res
		.status(200)
		.json({ message: "Employee successfully added to the database" });
});

// Update an employee
app.post("/update", async (req, res) => {
	if (
		!req.body.id ||
		!req.body.firstname ||
		!req.body.lastname ||
		!req.body.age ||
		!req.body.phone ||
		!req.body.department ||
		!req.body.designation ||
		!req.body.salary ||
		!req.body.attendance ||
		!req.body.performance ||
		!req.body.productivity ||
		!req.body.apprStatus
	) {
		console.log("invalid employee details!");
		res.status(400).json({ error: "Invalid employee details" });
		return;
	}
	const updated = {
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		age: req.body.age,
		phone: req.body.phone,
		department: req.body.department,
		designation: req.body.designation,
		salary: req.body.salary,
		productivity: req.body.productivity,
		attendance: req.body.attendance,
		performance: req.body.performance,
		apprStatus: req.body.apprStatus,
	};
	await Employee.findByIdAndUpdate(
		{ _id: req.body.id },
		updated,
		{ new: true },
		(err) => {
			if (err) {
				res.json({ message: "error in updating,try again" });
				return;
			} else {
				res
					.status(200)
					.json({ message: "Employee details updated successfully!" });
				return;
			}
		}
	);
});

// Delete an employee
app.post("/delete", async (req, res) => {
	if (!req.body.id) {
		res.status(401).json({ error: "No user selected!" });
		return;
	}
	await Employee.remove({ _id: req.body.id }, function (err) {
		if (err) {
			res.send(400).send({ error: "Error deleting employee" });
			return;
		}
		res.status(200).json({ message: "Employee data deleted successfully!" });
	});
});

// Get employee of given ID
app.post("/one", async (req, res) => {
	if (!req.body.id) {
		res.status(401).json({ error: "No user selected!" });
		return;
	} else {
		await Employee.find({ _id: req.body.id })
			.then((emp) => {
				res.send(emp);
				return;
			})
			.catch((err) => {
				console.log(err);
			});
	}
});

// Employees with appraisals granted
app.post("/granted", async (req, res) => {
	await Employee.find({ apprStatus: "Granted" })
		.then((emp) => {
			res.send(emp);
			return;
		})
		.catch((err) => {
			console.log(err);
		});
});

app.listen(3000, function () {
	console.log("listening on port 3000");
});
