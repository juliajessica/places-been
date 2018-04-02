// Business Logic
// Location constructor, creates location object
function Location(place, time, notes){
  this.place = place;
  this.time = time;
  this.notes = notes;
};

// Captures users location objects in an array
var places = [];
function locationArray(object){
  places.push(object);
}

// User Interface Logic
$(document).ready(function() {
  $("#new-location").submit(function(event) {
    event.preventDefault();
    // Takes user inputs and converts to variables
    var inputPlace = $("#place").val();
    var inputTime = $("#time").val();
    var inputNotes = $("#notes").val();
    // Creates instance called newLocation using Location contructor passing user inputs as arguments
    var newLocation  = new Location(inputPlace, inputTime, inputNotes);

    // Appends list item of instance.place property to bottom of the page, gives it a class of location and appends delete btn
    $("ul#location").append("<li><span class='location'>" + newLocation.place + "</span> &nbsp;<button class='btn btn-danger btn-sm deleteBtn'>delete me</button></li>");

    // Clears user input form
    $("input#place").val("");
    $("input#time").val("");
    $("input#notes").val("");

    // Creates click function on last instance.place list item that was appended
    $(".location").last().click(function(){
      $("#show-location").show();
      $("#show-location h2").text(newLocation.place);
      $(".time").text(newLocation.time);
      $(".notes").text(newLocation.notes);
    });
    //creates the click function on the delete button
    $(".deleteBtn").click(function() {
      $(this).parent().remove();
    });

    // Calls the locationArray function that stores the instance
    locationArray(newLocation);
  });
});
