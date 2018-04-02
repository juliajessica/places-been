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
    $("#location").append("<li><span class='locationClickable'>" + newLocation.place + "</span>&nbsp;<button class='btn btn-danger btn-sm deleteBtn'>X</button>&nbsp;<button class='btn btn-success btn-sm enjoyedBtn'>Loved It!</button>&nbsp;<button class='btn btn-warning btn-sm hatedBtn'>Hated It!</button></li>");

    // Clears user input form
    $("input#place").val("");
    $("input#time").val("");
    $("input#notes").val("");

    // Creates click function on last instance.place list item that was appended using span class locationClickable
    $(".locationClickable").last().click(function(){
      $("#show-location").show();
      $("#show-location h2").text(newLocation.place);
      $(".time").text(newLocation.time);
      $(".notes").text(newLocation.notes);
    });

    //creates the click function on the delete button
    $(".deleteBtn").click(function() {
      $(this).parent().remove();
    });

    // Creates click function on last enjoyedBtn that was created with a list item, create click function on the text so you can toggle it to the right side of the screen
    $(".enjoyedBtn").last().click(function(){
      $(".enjoyed").show();
      $("#enjoyed").append("<li><span class='locationEnjoyed'>" + newLocation.place + "</span></li>");
      $(".locationEnjoyed").last().click(function(){
        $("#show-location").show();
        $("#show-location h2").text(newLocation.place);
        $(".time").text(newLocation.time);
        $(".notes").text(newLocation.notes);
      });
      $(this).parent().remove();
    });

    // Creates click function on last hatedBtn that was created with a list item, create click function on the text so you can toggle it to the right side of the screen
    $(".hatedBtn").last().click(function(){
      $(".hated").show();
      $("#hated").append("<li><span class='locationHated'>" + newLocation.place + "</span></li>");
      $(".locationHated").last().click(function(){
        $("#show-location").show();
        $("#show-location h2").text(newLocation.place);
        $(".time").text(newLocation.time);
        $(".notes").text(newLocation.notes);
      });
      $(this).parent().remove();
    });

    // Calls the locationArray function that stores the instance
    locationArray(newLocation);
  });
});
