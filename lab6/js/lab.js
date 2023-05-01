//Array and Objects
//Assigning Array and Objects to a car we did from last assignment!
//Gabriella Frint <gfrint@ucsc.edu>
//May 2023

function main(){
  console.log("Main functin started.");
//basics
  carMake = "Toyota";
  carModel = "Sedan";
  carColor = "teal blue";
  carYear = 1995;

///Defining Age
  carAge = 2023 - carYear

//the myTransport
  myTransport = ["walking", "bus", "Toyota Sedan"];

//the var myMainTransport
  var myMainRide = {
    carMake: "Toyota",
    carModel: "Sedan",
    carColor: "Teal blue",
    carYear: 1995,
    carAge: function() {
        return 2023 - this.year;
    }
  }

  myMainRide.carAge()

//writeL!n not writeIn!
  document.writeln("The kinds of transportaton I use to get around are...", myTransport, "</b>");
  document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
}