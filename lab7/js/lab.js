//Function
//Making our own index.html as well as learning how to program functions!
//Gabriella Frint <gfrint@ucsc.edu>
//May 2023

function sortUserName(userName){
    var userName = window.prompt("Hello there! Please enter your name here!");
    var nameArray = userName.split('');
    var nameArraySort = nameArray.sort().reverse();
    var nameSorted = nameArraySort.join('');
    return nameSorted;

}
function main() {
    document.writeln("This is what I came up with using your name! Here it is: ",
        JSON.stringify(sortUserName(), "</br>"));
}

main();