$(document).ready(function() {
  var patientContainer = $(".patient-container");

  // function to add a new patient from the form, and add it to the database

  function addPatient() {
    $("#button").click(function(event) {
      event.preventDefault();
      // when clicking the button add "Patient" into the field
      patientContainer.append("<p>info</p>");
    });
  }
  addPatient();
});

getPatients();

// AJAX POST call to add new patients in the patient-container

function getPatients() {
  $.get("/api/patient", function(patients) {
    patients.forEach(element => {
      $("#patient-list").append("<br>----- Patient Data -----" + "<br>")
      $("#patient-list").append("Name: " + element.name + "<br>")
      $("#patient-list").append("Date of Birth: " + element.dob + "<br>")
      $("#patient-list").append("Height (in): " + element.heightIN + "<br>")
      $("#patient-list").append("Weight: " + element.weight + "<br>")
      $("patient-list").append("Description: " + element.description + "<br>")
    });
  });
}
