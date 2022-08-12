const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const homeSchema = new mongoose.Schema({});


module.exports = mongoose.model("Home", homeSchema);