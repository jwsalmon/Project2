var db = require("../models");

module.exports = function(app) {
      // GET route for getting all of the books for sale
  app.get("/api/forsale", function(req, res) {
    var query = {};
    if (req.query.book_id) {
      query.BooksId = req.query.books_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Forsale.findAll({
      where: query,
      include: [db.Authors,db.Books]
    }).then(function(Forsale) {
      res.json(Forsale);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/forsale/:id", function(req, res) {
    db.Forsale.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbForsale) {
      res.json(dbForsale);
    });
  });
};