$(document).ready(function() {
  var name = $("#name-input");
  var dob = $("#dob-input");
  var height = $("#height-input");
  var weight = $("#weight-input");
  var description = $("#description-input");

  // function to add a new patient from the form, and add it to the database

  function addPatient() {
    // Adding an event listener for when the form is submitted
    $("#button").on("click", function handleFormSubmit(event) {
      event.preventDefault();

      // Constructing a newPost object to hand to the database
      var newPatient = {
        name: name.val().trim(),
        dob: dob.val().trim(),
        height: height.val().trim(),
        weight: weight.val().trim(),
        description: description.val().trim()
      };

      console.log(newPatient);
      submitPatient(newPatient);
    });
  }

  addPatient();
  getPatients();

  // AJAX POST call to add new patients in the patient-container

  function getPatients() {
    $.get("/api/patient", function(patients) {
      patients.forEach(element => {
        $("#patient-list").append("--------- Patient Info ----------<br>");
        $("#patient-list").append("Patient ID: " + element.id + "<br>");
        $("#patient-list").append("Name: " + element.name + "<br>");
        $("#patient-list").append("Date of Birth: " + element.dob + "<br>");
        $("#patient-list").append("Height (in): " + element.heightIN + "<br>");
        $("#patient-list").append("Weight: " + element.weight + "<br>");
        $("patient-list").append("Description: " + element.description);
      });
    });
  }
});

function submitPatient(Patient) {
  $.post("/api/newpatient", Patient, function() {
    window.location.href = "/staff";
  });
}
