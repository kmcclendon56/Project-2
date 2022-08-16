const Journey = require("../models/journey");


module.exports = {
    show,
    showAll
}

async function show(req, res){
    try{
        const journeyDocument = await Journey.findById(req.params.id)
            .exec()
        res.render("journeys/show.ejs", {
            where: where
        });
    }catch(err){
        res.send(err)
    }
}

async function showAll(req, res){
    try{
        const journeyDocuments = await Journey.find()
            .exec()
        res.render("journeys/showAll.ejs", {
            journeys: journeyDocuments,
        });
    }catch(err){
        res.send(err)
    }
}