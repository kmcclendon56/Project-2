const NewJourney = require("../models/newJourney");

module.exports = {
    create,
    new: newJourney,
    show,
};


function newJourney(req, res) {
    res.render("journeys/new.ejs");
  }

function create (req, res){
    NewJourney.create(req.body, function (err, journeyCreated){
        if (err) {
            return res.render('newJourneys/new.ejs');
        }
        res.redirect(`/newJourneys/${journeyCreated._id}`);
    });
}


async function show(req, res){
    try{
        const newJourneyDocument = await NewJourney.findById(req.params.id)
            .exec()
        res.render("journeys/show.ejs", {
            newJourney: newJourneyDocument
        });
    }catch(err){
        res.send(err)
    }
    
}