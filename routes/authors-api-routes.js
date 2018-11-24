var db = require("../models");

module.exports = function (app) {
    app.get("/api/authors", function (req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Books, and db.Forsale
        db.Authors.findAll({
            include: [db.Books, db.Forsale]
        }).then(function (dbAuthors) {
            res.json(dbAuthors);
        });
    });

    app.get("/api/authors/:id", function (req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Books, and db.Forsale
        db.Authors.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Books, db.Forsale]
        }).then(function (dbAuthors) {
            res.json(dbAuthors);
        });
    });

    app.post("/api/authors", function (req, res) {
        db.Author.create(req.body).then(function (dbAuthors) {
            res.json(dbAuthors);
        });
    });


};