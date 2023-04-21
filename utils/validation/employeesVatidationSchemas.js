const Joi = require("joi");

const createEmployeeSchema = Joi.object({
  fullName: Joi.string().required(),
  birthday: Joi.string().required(),
  joinedDay: Joi.string().required(),
  department: Joi.string().required(),
  position: Joi.string().required(),
  seniority: Joi.string().required(),
  workEmail: Joi.string().required(),
  personalEmail: Joi.string().required(),
  phone: Joi.string().required(),
  linkedIn: Joi.string().required(),
  telegram: Joi.string().required(),
  slack: Joi.string().required(),
  teamManager: Joi.string().required(),
  workSchedule: Joi.string().required(),
  probationPeriod: Joi.string().required(),
  skills: Joi.string().required(),
  languages: Joi.string().required(),
  medicalLeave: Joi.string().required(),
  daysOff: Joi.string().required(),
});

const updateEmployeeSchema = Joi.object()
  .keys({
    title: createTaskSchema.extract("title").optional(),
    completed: createTaskSchema.extract("completed").optional(),
  })
  .or("title", "completed");

module.exports = {
  createTaskSchema,
  updateTaskSchema,
};
