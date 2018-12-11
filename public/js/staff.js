// alert("linked thru staff handlebars");

$(document).ready(function() {
  var patientContainer = $(".patient-container");

  // function to add a new patient from the form, and add it to the database

  function addPatient() {
    $(".button").click(function() {
      // when clicking the button add "Patient" into the field
      patientContainer.append("Enter Data Here");
    });
  }
  addPatient();
});
