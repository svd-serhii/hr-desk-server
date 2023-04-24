const {
  getEmployeesService,
  getEmployeeService,
  createEmployeeService,
  updateEmployeeService,
  deleteEmployeeService,
} = require("../services/employeeServices");

const { catchAsync } = require("../utils/catchAsync");

let getEmployees = async (req, res) => {
  const { page, limit = 10 } = req.query;
  const employees = await getEmployeesService(page, limit);
  res.status(200).json(employees);
};
getEmployees = catchAsync(getEmployees);

let getEmployee = async (req, res) => {
  const { employeeId } = req.params;
  const employee = await getEmployeeService(employeeId);
  res.status(200).json(employee);
};
getEmployee = catchAsync(getEmployee);

let createEmployee = async (req, res) => {
  const createEmployee = await createEmployeeService(req.body);
  res.status(201).json(createEmployee);
};
createEmployee = catchAsync(createEmployee);

let updateEmployee = async (req, res) => {
  const { employeeId } = req.params;
  const updatedEmployee = await updateEmployeeService(employeeId, req.body);
  res.status(200).json(updatedEmployee);
};
updateEmployee = catchAsync(updateEmployee);

let deleteEmployee = async (req, res) => {
  const { employeeId } = req.params;
  const deletedEmployeeId = await deleteEmployeeService(employeeId);
  res.status(200).json({ id: employeeId });
};

deleteEmployee = catchAsync(deleteEmployee);

module.exports = {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
