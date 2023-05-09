//Lab 8 - Anon Functions and Callbacks
//Using Arrays and anonomous functions!
//Gabriella Frint <gfrint@ucsc.edu>
//May 2023

function multiply(x,y){
    var product = x * y;
    return product;
}

console.log("The product of your numbers is...", multiply(7,5));
console.log("The product of your numbers is...", multiply(14,17));

array = [54, 78, 63, 23, 71, 109, 47]
console.log("This is my array!", array);

var result = array.map(multiply);
console.log("Lets see the results when we multiply our array!", result);

var result = array.map(function(x,y){
    return x,y * 0.5;
})

console.log("Now lets divide our array now!", result)