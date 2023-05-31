//Lab 15 - AJAX!
//Learning how to use AJAX to link websites and images into your code!
//Gabriella Frint <gfrint@ucsc.edu>
//May 2023

function yesNo() {
  $.ajax({
    url: "https://yesno.wtf//api",
    type: "GET",
    data: {},
  })
  
  .done(function(data) {
    var yes = data.answer;
    var no = data.image;
    $("#output").html("<h2>" + yes);
    $("#output").append("<img src=" + no + ">");
  })
}

$("button").click(yesNo);