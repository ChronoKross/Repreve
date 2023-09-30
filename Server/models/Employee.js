const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: String,
  leftOn: {
    type: Date,
  },
});

const employee = mongoose.model("employee", employeeSchema);

module.exports = employee;
