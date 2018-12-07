var db = require("../models");

module.exports = function(app) {
  // Get all patient info
  app.get("/api/patient", function(req, res) {
    db.Patient.findAll({}).then(function(dbPatient) {
      res.json(dbPatient);
    });
  });

  // Create a new patient
  app.post("/api/patient", function(req, res) {
    db.Patient.create(req.body).then(function(dbPatient) {
      res.json(dbPatient);
    });
  });

  // close patient case -- use "app.update"
  app.delete("/api/examples/:id", function(req, res) {
    db.Patient.destroy({ where: { id: req.params.id } }).then(function(dbPatient) {
      res.json(dbPatient);
    });
  });
};
