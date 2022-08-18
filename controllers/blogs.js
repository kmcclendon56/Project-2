const Journey = require("../models/journey");
const journeys = require("./journeys");

module.exports = {
  create,
  edit: editBlog,
  delete: deleteBlog
};

function create(req, res) {
  Journey.findById(req.params.id, function (err, journey) {
    req.body.userID = req.user._id;
    req.body.userName = req.user.name;
    journey.blogs.push(req.body);
    journey.save(function (err) {
      res.redirect(`/journeys/${journeys._id}`);
    });
  });
}

function editBlog(req, res) {
  Journey.findOne({ 'blogs._id': req.params.id }, function (err, journey) {
    const blogSubdoc = journey.blogs.id(req.params.id);
    blogSubdoc.content = req.body.content;
    journey.save(function (err) {
      res.redirect(`/journeys/${journey._id}`);
    });
  });
}


async function deleteBlog(req, res) {
  try {
    const journeyDocument = await Journey.findOne({
      'blogs._id': req.params.id,
    })
    if (!journeyDocument) return res.redirect('/journeys');

    journeyDocument.blogs.remove(req.params.id)

    await journeyDocument.save();
    res.redirect(`/journeys/${journeyDocument._id}`)
  } catch (err) {
    console.log(err)
    res.send(err)
  }
}

