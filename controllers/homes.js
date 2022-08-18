const Home = require("../models/home");

module.exports = {
    index,
};

function index(req, res) {
    res.render("homes/index.ejs")
};


