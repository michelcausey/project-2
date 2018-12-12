var db = require("../models");

module.exports = function(app) {
  // Get all patient info
  app.get("/api/patient", function(req, res) {
    db.Patient.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/patient/:id", (req, res) => {
    db.Patient.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(results) {
      res.json(results);
      console.log("load one");
    });
  });

  // Create a new patient
  app.post("/api/newpatient", function(req, res) {
    console.log(req.body);
    // create takes an argument of an obj)ect describing the item we want to
    // insert into our table. In this case we just we pass in an obFject with a text
    // and complete property (req.body)
    db.Patient.create({
      name: req.body.name,
      dob: req.body.dob,
      weight: req.body.weight,
      heightIN: req.body.heightIN,
      description: req.body.description
    }).then(function(results) {
      res.json(results);
    });
  });
};
