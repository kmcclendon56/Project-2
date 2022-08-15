const Journey = require("../models/journey");
const journeys = require("./journeys");

module.exports = {
    create,
    edit: editBlog
};

function create (req, res){
    Journey.findById(req.params.id, function(err, journey){
        req.body.userID = req.user._id;
        req.body.userName = req.user.name;
        journey.blogs.push(req.body);
        journey.save(function(err){
            res.redirect(`/journeys/${journeys._id}`);
        });
    });
}

function editBlog(req, res) {
    Journey.findOne({'blogs._id': req.params.id}, function(err, journey) {
      const blogSubdoc = journey.blogs.id(req.params.id);
      if (!blogSubdoc.userId.equals(req.user._id)) return res.redirect(`/jouneys/${journeys._id}`);
      blogSubdoc.text = req.body.text;
      journeys.save(function(err) {
        res.redirect(`/journeys/${journeys._id}`);
      });
    });
  }