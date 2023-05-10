//Lab 9 - Javascript for the Web
//Learning how to use elements to change elements!
//Gabriella Frint <gfrint@ucsc.edu>
//May 2023

window.onload = function () {
    document.getElementById("output");
    var outputEl = document.getElementById("output");

    document.createElement("p");
    var new1El = document.createElement("p");
    new1El.innerHTML = " I dunno, don't look here";

    document.createElement("j");
    var new2El = document.createElement("j");
    new2El.innerHTML = "Dunno why you're looking here either...";

    outputEl.appendChild(new1El);

    outputEl.appendChild(new2El);

    outputEl.style.color = "aquamarine";
    outputEl.style.fontFamily = "timesNewRoman";
    outputEl.style.marginLeft = "750px";

    var photoEl = document.getElementById("lab-9-javascript");
    var newEl = document.createElement("button");
    photoEl.appendChild(newEl);
    newEl.innerHTML = "Look here!"

}