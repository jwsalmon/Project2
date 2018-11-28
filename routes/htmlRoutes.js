var db = require("../models");

module.exports = function(app) {
  // Find all Authors and return them to the user with res.json
  app.get("/authors", function(req, res) {
    db.Author.findAll({}).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.get("/authors/:id", function(req, res) {
    // Find one Author with the id in req.params.id and return them to the user with res.json
    db.Author.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.post("/authors", function(req, res) {
    // Create an Author with the data available to us in req.body
    console.log(req.body);
    db.Author.create(req.body).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.delete("/authors/:author", function(req, res) {
    // Delete the Author with the id available to us in req.params.id
    db.Author.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.get("/books", function(req, res) {
    db.Book.findAll({}).then(function(dbBook) {
      res.json(dbBook);
    });
  });

  app.get("/books/:id", function(req, res) {
    // Find one Book with the id in req.params.id and return them to the user with res.json
    db.Book.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbBook) {
      res.json(dbBook);
    });
  });

  app.post("/books", function(req, res) {
    // Create a Book with the data available to us in req.body
    console.log(req.body);
    db.Book.create(req.body).then(function(dbBook) {
      res.json(dbBook);
    });
  });

  app.delete("/books/:books", function(req, res) {
    // Delete the Book with the id available to us in req.params.id
    db.Book.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBook) {
      res.json(dbBook);
    });
  });

  app.get("/forsale", function(req, res) {
    db.ForSale.findAll({}).then(function(dbForSale) {
      res.json(dbForSale);
    });
  });

  app.get("/forsale/:id", function(req, res) {
    // Find one ForSale with the id in req.params.id and return them to the user with res.json
    db.ForSale.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbForSale) {
      res.json(dbForSale);
    });
  });

  app.post("/forsale", function(req, res) {
    // Create a ForSale with the data available to us in req.body
    console.log(req.body);
    db.ForSale.create(req.body).then(function(dbForSale) {
      res.json(dbForSale);
    });
  });

  app.delete("/forsale/:forsale", function(req, res) {
    // Delete the ForSale with the id available to us in req.params.id
    db.ForSale.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbForSale) {
      res.json(dbForSale);
    });
  });

  app.get("/index", function(req, res) {
    db.Index.findAll({}).then(function(dbIndex) {
      res.json(dbIndex);
    });
  });

  app.get("/index/:id", function(req, res) {
    // Find one Index with the id in req.params.id and return them to the user with res.json
    db.Index.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbIndex) {
      res.json(dbIndex);
    });
  });

  app.post("/index", function(req, res) {
    // Create an Index with the data available to us in req.body
    console.log(req.body);
    db.Index.create(req.body).then(function(dbIndex) {
      res.json(dbIndex);
    });
  });

  app.delete("/index/:index", function(req, res) {
    // Delete the Index with the id available to us in req.params.id
    db.Index.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbIndex) {
      res.json(dbIndex);
    });
  });

  app.get("/usertable", function(req, res) {
    db.UserTable.findAll({}).then(function(dbUserTable) {
      res.json(dbUserTable);
    });
  });

  app.get("/usertable/:id", function(req, res) {
    // Find one UserTable with the id in req.params.id and return them to the user with res.json
    db.UserTable.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbUserTable) {
      res.json(dbUserTable);
    });
  });

  app.post("/usertable", function(req, res) {
    // Create an UserTable with the data available to us in req.body
    console.log(req.body);
    db.UserTable.create(req.body).then(function(dbUserTable) {
      res.json(dbUserTable);
    });
  });

  app.delete("/usertable/:usertable, function(req, res) {
    // Delete the UserTable with the id available to us in req.params.id
    db.UserTable.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUserTable) {
      res.json(dbUserTable);
    });
  });
};

// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index"));
  });


  app.get("/buyer", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/layouts/buyer"));
  });

 
  app.get("/seller", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/layouts/seller"));
  });

};
// I know I am missing some more...
// Routes: Michael
// Get buy author - search
// Get by genre - search
// Get by price range - search
// Get by new used - search
// Get by author,genre,price range,new/used
// Add book - add
// Buy book - delete/destroy (edited)