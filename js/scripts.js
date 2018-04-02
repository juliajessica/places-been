// Business Logic

// User Interface Logic
$(document).ready(function() {
  $("#new-location").submit(function(event) {
    event.preventDefault();

    var place = $("#place").val();
    var time = $("#time").val();
    var notes = $("#notes").val();

    $("ul#location").append("<li>" + place + "</li>");
  });
});
