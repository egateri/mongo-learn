require('dotenv').config();
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));
    
    // create a schema
    const studentSchema = new mongoose.Schema({
        roll_no: {type : Number, required :true},
        name: {type : String, required :true},
        year: {type : Number, required :true},
        subjects:  {type : [String], required :true},
    });
    
    // create a model with studentSchema
    const Student = mongoose.model('Student', studentSchema);
    module.exports = Student;