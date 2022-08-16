const Journey = require("../models/journey");
const user = require("../models/user");


module.exports = {
    show,
    showAll,
    createBlog
}

async function createBlog (req, res){
    try{
        const journeyDocument = await Journey.findById(req.params.id)
        journeyDocument.blogs.addToSet(req.body);
        journeyDocument.save();
        res.redirect(`/journeys/${journeyDocument._id}`);
    }catch(err){
        res.send(err)
    }
}

async function show(req, res){
    try{
        const journeyDocument = await Journey.findById(req.params.id)
            .exec()
        console.log(journeyDocument)
        res.render("journeys/show.ejs", {
            journey: journeyDocument
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