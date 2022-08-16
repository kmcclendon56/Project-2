const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
    {
        content: String,
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        userName: String
    },
    {
        timestamps: true,
    }
)
const journeySchema = new mongoose.Schema({
    where: String,
    restaurant: String,
    spot: String,
    image: String,
    blogs: [blogSchema]
});





module.exports = mongoose.model("journeys", journeySchema)