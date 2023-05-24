require('dotenv').config();
const mongoose = require("mongoose");
const MONGODB_URL =process.env.MONGODB_URL;
const options= {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    family: 4
}
const db = mongoose.connect(MONGODB_URL, options)
    .then(() => console.log("DB Connected successfully"))
    .catch(err => console.log(err));  
module.exports = db;