const Journey = require("../models/journey");

module.exports = {
    create,
    new: newJourney,
    show
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

//show function will not show picture yet just the title
async function show(req, res){
    try{
        const journeyDocument = await Journey.findById(req.params.id)
            .exec()
        res.render("journeys/show.ejs", {
            journey: journeyDocument
        });
    }catch(err){
        res.send(err)
    }
}