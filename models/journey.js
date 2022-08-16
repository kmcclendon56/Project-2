const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
    {
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}, //<- we want to make sure a review is always tied to a user
    userName: String
    }
)
const journeySchema = new mongoose.Schema({
    where: String,
    image: String,
    blogs: [blogSchema]
});





module.exports = mongoose.model("journeys", journeySchema);