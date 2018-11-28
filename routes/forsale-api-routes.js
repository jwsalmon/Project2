var db = require("../models");

const Op = db.sequelize.Op;

module.exports = function(app) {
// GET route for getting all of the books for sale
  app.get("/api/forsale", function(req, res) {
    var query = {};
    if (req.query.forsale_id) {
      query.ForsaleId = req.query.forsale_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, db.Authors and db.Books
    db.Forsale.findAll({
      where: query,
      include: [db.Authors,db.Books]
    }).then(function(Forsale) {
      res.json(Forsale);
    });
  });

  app.get("/api/forsale/:newused", function(req, res) {
    db.Forsale.findAll({
        where: {
            newused: req.params.newused
        },
        include: [db.Authors, db.Books]
    }).then(function (Forsale) {
        res.json(Forsale);
    });
  });

  app.get("/api/forsale/:priceMin:priceMax", function(req, res) {
    db.Forsale.findAll({
        where: {
            price: { 
                [Op.gte]: req.params.priceMin,
                [Op.lte]: req.params.priceMax
            }
        },
        include: [db.Authors, db.Books]
    }).then(function (Forsale) {
        res.json(Forsale);
    });
  });

  app.get("/api/forsale:newused/:priceMin:priceMax", function(req,res){
    db.Forsale.findAll({
        where: {
            newused: req.params.newused,
            price: { 
                [Op.gte]: req.params.priceMin,
                [Op.lte]: req.params.priceMax
            }
        },
        include: [db.Authors, db.Books]
    }).then(function (Forsale) {
        res.json(Forsale);
    })
  });

  app.post("/api/forsale", function (req, res) {
    db.Forsale.create(req.body).then(function (Forsale) {
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