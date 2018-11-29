var db = require("../models");
const Op = db.sequelize.Op;
module.exports = function(app) {
  // Find all Authors and return them to the user with res.json
  app.get("/authors", function(req, res) {
    db.Author.findAll({
      include: [db.Books, db.Forsale]
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.get("/authors/:author", function(req, res) {
    // Find one Author with the id in req.params.id and return them to the user with res.json
    db.Author.findOne({
      where: {
        author: req.params.author
      },
      include: [db.Books, db.Forsale]
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

  app.get("/books", function(req, res) {
    db.Book.findAll({
      include: [db.Authors, db.Forsale]
    }).then(function(dbBook) {
      res.json(dbBook);
    });
  });

  app.get("/books/:title", function(req, res) {
    // Find one Book with the id in req.params.id and return them to the user with res.json
    db.Book.findOne({
      where: {
        title: req.params.title,
        include: [db.Authors, db.Forsale]
      }
    }).then(function(dbBook) {
      res.json(dbBook);
    });
  });
  app.get("/books/:genre", function(req, res) {
    // Find one Book with the id in req.params.id and return them to the user with res.json
    db.Book.findOne({
      where: {
        genre: req.params.genre,
        include: [db.Authors, db.Forsale]
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

  app.get("/forsale", function(req, res) {
    db.ForSale.findAll({
      include: [db.Authors,db.Books]
    }).then(function(dbForSale) {
      res.json(dbForSale);
    });
  });

  app.get("/forsale/:newused", function(req, res) {
    // Find one ForSale with the id in req.params.id and return them to the user with res.json
    db.ForSale.findOne({
      where: {
        newused: req.params.newused
      },
      include: [db.Authors,db.Books]
    }).then(function(dbForSale) {
      res.json(dbForSale);
    });
  });

  app.get("/forsale/:priceMin:priceMax", function(req, res) {
    // Find one ForSale with the id in req.params.id and return them to the user with res.json
    db.ForSale.findOne({
      where: {
        price: { 
          [Op.gte]: req.params.priceMin,
          [Op.lte]: req.params.priceMax
        }
      },
      include: [db.Authors,db.Books]
    }).then(function(dbForSale) {
      res.json(dbForSale);
    });
  });

  app.get("/forsale/:priceMin:priceMax:newused", function(req, res) {
    // Find one ForSale with the id in req.params.id and return them to the user with res.json
    db.ForSale.findOne({
      where: {
        newused: req.params.newused,
        price: { 
            [Op.gte]: req.params.priceMin,
            [Op.lte]: req.params.priceMax
        }
      },
      include: [db.Authors,db.Books]
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

  app.delete("/forsale/:id", function(req, res) {
    // Delete the ForSale with the id available to us in req.params.id
    db.ForSale.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbForSale) {
      res.json(dbForSale);
    });
  });

  app.get("/user", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.get("/user/:email:", function(req, res) {
    // Find one User with the id in req.params.id and return them to the user with res.json
    db.User.findOne({
      where: {
        email: req.params.email
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/user", function(req, res) {
    // Create an User with the data available to us in req.body
    console.log(req.body);
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.delete("/user/:email", function(req, res) {
    // Delete the User with the id available to us in req.params.id
    db.User.destroy({
      where: {
        email: req.params.email
      }
    }).then(function(dbUser) {
      res.json(dbUser);
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
  /* app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.handlebars"));
  });
  app.get("/", function(req, res) {
    res.render( "index");
  });*/
  app.get("/", function(req, res) {
   // res.sendFile(path.join(__dirname, "index"));
    res.render("index");
  }); 

  app.get("/buyer", function(req, res) {
    res.sendFile(path.join(__dirname, "/views/layouts/buyer"));
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