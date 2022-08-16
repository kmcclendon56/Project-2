const mongoose = require("mongoose");

const newJourneySchema = new mongoose.Schema({
    where: String,
    restaurant: String,
    spot: String,
    image: String
});


module.exports = mongoose.model("newJourney", newJourneySchema);