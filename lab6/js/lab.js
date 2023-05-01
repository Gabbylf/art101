//Array and Objects
//Assigning Array and Objects to a car we did from last assignment!
//Gabriella Frint <gfrint@ucsc.edu>
//May 2023

//basics
function main() {
  console.log("Main Function started.");
  make = "Toyota";
  model = "Sedan";
  color = "teal blue";
  year = 1995;

  ///Defining Age
  carAge = 2023 - carYear

  //the myTransport
  myTransport = ["walking", "bus", "Toyota Sedan"];

  //the var myMainTransport
  var myMainRide = {
    make: "Toyota",
    model: "Sedan",
    color: "Teal blue",
    year: 1995,
    age: function() {
        return 2023 - this.year;
    }
  }

  myMainRide.age()

  //writeL!n not writeIn!
  document.writeln("The kinds of transportaton I use to get around are...", myTransport, "</b>");
  document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
}


main();
