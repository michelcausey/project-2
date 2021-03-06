var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");

// HTML Pages to route:

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
    console.log("index page loaded")
  });

  app.get("/service", function(req, res) {
    res.render("service");
    console.log("service page loaded")
  });

  app.get("/staff", function(req, res) {
    res.render("staff");
    console.log("staff page loaded");
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/staff");
    }
    res.render("login");
    console.log("login page loaded");
  });

  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/staff");
    }
    res.render("signup");
    console.log("signup page loaded");
  });

  app.get("/staff", isAuthenticated, function(req, res) {
    res.render("/staff");
  });

  // Load example page and pass in an example by id
  app.get("/patient/:id", function(req, res) {
    db.Patient.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbPatient) {
      res.render("patient", {
        example: dbPatient
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
