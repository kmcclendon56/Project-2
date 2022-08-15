const Home = require("../models/home");
const Journey = require("../models/journey");

module.exports = {
    index,
};

function index(req,res){
    res.render("homes/index.ejs")
};


