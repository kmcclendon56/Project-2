const Journey = require("../models/journey");

module.exports = {
    create,
    new: newJourney,
};


function newJourney(req, res) {
    res.render("journeys/new.ejs");
}

function create(req, res) {
    console.log(req.body);
    Journey.create(req.body, function (err, journeyCreated) {
        if (err) {
            return res.render('newJourneys/new.ejs');
        }
        res.redirect(`/journeys/${journeyCreated._id}`);
    });
}