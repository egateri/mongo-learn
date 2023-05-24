const mongoose = require("mongoose");

const Schema = {
  roll_no: { type: Number, required: true },
  name: { type: String, required: true },
  year: { type: Number, required: true },
  subjects: { type: [String], required: true },
};

// create a schema
const studentSchema = new mongoose.Schema(Schema);
// create a model with studentSchema
const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
