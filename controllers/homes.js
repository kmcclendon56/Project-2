const Home = require("../models/home");
const journey = require("../models/journey");

module.exports = {
    index,
    show
};

function index(req,res){
    res.render("homes/index.ejs")
};


//show function will not show picture yet just the title
async function show(req, res){
    try{
        const journeyDocument = await journey.findById(req.params.id)
        .exec()
        res.render("journey/show", {
            where: ""
        });
    }catch(err){
        res.send(err)
    }
}