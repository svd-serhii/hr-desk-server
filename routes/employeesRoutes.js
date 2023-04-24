const express = require("express");

const {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeesControllers");

const { validateBody } = require("../utils/validateBody");

const { createEmployeeSchema, updateEmployeeSchema } = require("../utils/validation/employeesVatidationSchemas");

const router = express.Router();

router.route("/").get(getEmployees).post(validateBody(createEmployeeSchema), createEmployee);

router
  .route("/:employeeId")
  .get(getEmployee)
  .patch(validateBody(updateEmployeeSchema), updateEmployee)
  .delete(deleteEmployee);

module.exports = { employeesRouter: router };
