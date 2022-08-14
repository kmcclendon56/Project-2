const Journey = require("../models/journey");

module.exports = {
    create,
    new: newJourney
};


function newJourney(req, res) {
    res.render("journeys/new.ejs");
  }

async function create (req, res){
    Journey.create(req.body, function (err, journeyCreated){
        if (err) {
            return res.render('journeys/new.ejs');
        }
        res.redirect(`/journeys/${journeyCreated._id}`);
    });
}