var db = require("../models");

module.exports = function(app) {
  // GET route for getting all of the books
  app.get("/api/books", function(req, res) {
    var query = {};
    if (req.query.authors_id) {
      query.AuthorsId = req.query.authors_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Books.findAll({
      where: query,
      include: [db.Authors, db.Forsale]
    }).then(function(Books) {
      res.json(Books);
    });
  });

  // Get route for retrieving a single books by title
  app.get("/api/books/:title", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Books.findOne({
      where: {
        title: req.params.title
      },
      include: [db.Authors, db.Forsale]
    }).then(function(Books) {
      res.json(Books);
    });
  });

  // Get route for retrieving books by genre
  app.get("/api/books/:genre", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Books.findAll({
      where: {
        genre: req.params.genre
      },
      include: [db.Authors, db.Forsale]
    }).then(function(Books) {
      res.json(Books);
    });
  });
  // Books route for saving a new Books
  app.post("/api/books", function(req, res) {
    db.Books.create(req.body).then(function(Books) {
      res.json(Books);
    });
  });
};
