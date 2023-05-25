
const mongoose = require('mongoose');

// create a schema for our database
const Schema = {
    name: String,
    path: String,
    size: Number,
    date: {type: Date, default: Date() }
};

const photoSchema = new mongoose.Schema(Schema);
// convert the schema into a Model
const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;