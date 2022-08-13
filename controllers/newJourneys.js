const newJourney = require("../models/newjourney");

module.exports = {
    create,
    new: addNewJourney
};


function addNewJourney(req, res) {
    res.render("journeys/new.ejs");
  }

async function create (req, res){
    newJourney.create(req.body, function (err, journeyCreated){
        if (err) {
            return res.render('journeys/new.ejs');
        }
        res.redirect(`/journeys/${journeyCreated._id}`);
    });
}