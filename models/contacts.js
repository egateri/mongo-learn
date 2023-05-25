const mongoose = require("mongoose");

const Schema = {
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  created_at:{type:Date, required: true, default:Date.now()},
  deleted:{type:Boolean, required: true,default:false}
};

// create a schema
const contactSchema = new mongoose.Schema(Schema);
// create a model with studentSchema
const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;
