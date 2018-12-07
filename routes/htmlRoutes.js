var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");

// HTML Pages to route:

module.exports = function (app) {

  app.get("/", function (req, res) {
    res.render("index")
  });

  app.get("/patient", function (req, res) {
    db.Patient.findAll({}).then(function (dbPatient) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbPatient
      });
    });
  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("login");
  });

  app.get("/signup", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("signup");
  });

  app.get("/staff", isAuthenticated, function(req, res) {
    res.render("/staff");
  });

  // Load example page and pass in an example by id
  app.get("/patient/:id", function (req, res) {
    db.Patient.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbPatient) {
      res.render("patient", {
        example: dbPatient
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};