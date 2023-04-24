const { Employee } = require("../models/Employee");
const { HttpError } = require("../utils/HttpError");

const getEmployeesService = async (page, limit) => {
  const skip = (page - 1) * limit;
  const employees = await Employee.find().skip(skip).limit(limit);
  return employees;
};

const getEmployeeService = async (id) => {
  const employee = await Employee.findById(id);
  if (!employee) {
    throw new HttpError(404, "This employee does not exist");
  }
  return employee;
};

const createEmployeeService = async (body) => {
  const newEmployee = await Employee.create(body);
  return newEmployee;
};

const updateEmployeeService = async (id, body) => {
  const updatedEmployee = await Employee.findByIdAndUpdate(id, body, { new: true });
  if (!updatedEmployee) {
    throw new HttpError(404, "This employee does not exist");
  }
  return updatedEmployee;
};

const deleteEmployeeService = async (id) => {
  const deletedEmployee = await Employee.findByIdAndDelete(id);
  if (!deletedEmployee) {
    throw new HttpError(404, "This employee does not exist");
  }

  return { id: id };
};

module.exports = {
  getEmployeesService,
  getEmployeeService,
  createEmployeeService,
  updateEmployeeService,
  deleteEmployeeService,
};
