const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    birthday: {
      type: String,
      required: true,
    },
    joinedDay: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    seniority: {
      type: String,
      required: true,
    },
    workEmail: {
      type: String,
      required: true,
    },
    personalEmail: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    linkedIn: {
      type: String,
      required: true,
    },
    telegram: {
      type: String,
      required: true,
    },
    slack: {
      type: String,
      required: true,
    },
    teamManager: {
      type: String,
      required: true,
    },
    workSchedule: {
      type: String,
      required: true,
    },
    formOfCooperation: {
      type: String,
      required: true,
    },
    probationPeriod: {
      type: String,
      required: true,
    },
    skills: {
      type: String,
      required: true,
    },
    languages: {
      type: String,
      required: true,
    },
    medicalLeave: {
      type: String,
      required: true,
    },
    daysOff: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const Employee = mongoose.model("employee", schema);

module.exports = { Employee };
