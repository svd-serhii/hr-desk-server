const Joi = require("joi");

const createEmployeeSchema = Joi.object({
  fullName: Joi.string().required(),
  birthday: Joi.string().required(),
  joinedDay: Joi.string().required(),
  department: Joi.string().required(),
  position: Joi.string().required(),
  seniority: Joi.string().required(),
  workEmail: Joi.string().required(),
  personalEmail: Joi.string(),
  phone: Joi.string(),
  linkedIn: Joi.string(),
  telegram: Joi.string(),
  slack: Joi.string(),
  teamManager: Joi.string(),
  workSchedule: Joi.string(),
  formOfCooperation: Joi.string(),
  probationPeriod: Joi.string(),
  skills: Joi.string(),
  languages: Joi.string(),
  medicalLeave: Joi.string(),
  daysOff: Joi.string(),
});

const updateEmployeeSchema = Joi.object().keys({
  fullName: createEmployeeSchema.extract("fullName").optional(),
  birthday: createEmployeeSchema.extract("birthday").optional(),
  joinedDay: createEmployeeSchema.extract("joinedDay").optional(),
  department: createEmployeeSchema.extract("department").optional(),
  position: createEmployeeSchema.extract("position").optional(),
  seniority: createEmployeeSchema.extract("seniority").optional(),
  workEmail: createEmployeeSchema.extract("workEmail").optional(),
  personalEmail: createEmployeeSchema.extract("personalEmail").optional(),
  phone: createEmployeeSchema.extract("phone").optional(),
  linkedIn: createEmployeeSchema.extract("linkedIn").optional(),
  telegram: createEmployeeSchema.extract("telegram").optional(),
  slack: createEmployeeSchema.extract("slack").optional(),
  teamManager: createEmployeeSchema.extract("teamManager").optional(),
  workSchedule: createEmployeeSchema.extract("workSchedule").optional(),
  formOfCooperation: createEmployeeSchema.extract("formOfCooperation").optional(),
  probationPeriod: createEmployeeSchema.extract("probationPeriod").optional(),
  skills: createEmployeeSchema.extract("skills").optional(),
  languages: createEmployeeSchema.extract("languages").optional(),
  medicalLeave: createEmployeeSchema.extract("medicalLeave").optional(),
  daysOff: createEmployeeSchema.extract("daysOff").optional(),
});

module.exports = {
  createEmployeeSchema,
  updateEmployeeSchema,
};
