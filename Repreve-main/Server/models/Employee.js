const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    name: String,
  },
  { timestamps: true }
);

const employee = mongoose.model("employee", employeeSchema);

module.exports = employee;
