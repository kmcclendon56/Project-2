const mongoose = require("mongoose");

const journeySchema = new mongoose.Schema({
    where: String,
    restaurant: String,
    spot: String,
    image: String
});


module.exports = mongoose.model("journey", journeySchema);