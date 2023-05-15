//Lab 10 - Javascript Events and Forms
//Learning how to use add buttons, events and forms!
//Gabriella Frint <gfrint@ucsc.edu>
//May 2023

function sortUserName(userName){
    var nameArray = userName.split('');
    var nameArraySort = nameArray.sort().reverse();
    var nameSorted = nameArraySort.join('');
    return nameSorted;

}

function sawThisOnModesWebsite(str) {
    return str.replace(
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}


buttonEl = document.getElementById("button");
console.log("button element:", buttonEl);
inputEl = document.getElementById("name");
console.log("input element:", inputEl);
outputEl = document.getElementById("output");
console.log("output element:", outputEl);


buttonEl.addEventListener("click", function(){
    var userName = inputEl.value;
    var newName = sawThisOnModesWebsite(sortUserName(userName));
    outputEl.innerHTML = "<p id=name-results>" + newName + "</p>";
});