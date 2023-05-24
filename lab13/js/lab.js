//Lab 12 - Loops!
//Learning how to use loops with fizz buzz boom!
//Gabriella Frint <gfrint@ucsc.edu>
//May 2023

for (var i=0; i<200; i++) {
  if (i % 15 == 0) {
    $("#output").append("<div>" + "Fizzbuzz");
  }

  else if (i % 5 == 0) {
  $("#output").append("<div>" + "Buzz");
    }

  else if (i % 3 == 0) {
    $("#output").append("<div>" + "Fizz");
    
  }
  else {
    $("#output").append("<div>" + i);
  }
  
}