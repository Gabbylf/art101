//Lab 11 - Libraries & jQuery
//The start of learning how to use jQuery instead of full javascript!
//Gabriella Frint <gfrint@ucsc.edu>
//May 2023

$("#challenge").append("<button id='c-button'>Why</button>");
$("#problem").append("<button id='p-button'>Don't</button>");
$("#reflection").append("<button id='r-button'>You</button>");
$("#results").append("<button id='e-button'>Click?</button>");

$("#c-button").click(function(){
    $(this).text("To be able to add and use jquery in our html!");
    $(this).css('color','purple');
    $(this).parent().css({"color": "purple"});
    $(this).toggleClass("special");
});

$("#p-button").click(function(){
    $(this).text("to be able to use the class special as they were intended. However found lots of other ways to use jQuery in the process of researching what to do!");
    $(this).css('color','red');
    $(this).parent().css({"color": "red"});
    $(this).toggleClass("special");
});

$("#r-button").click(function(){
    $(this).text("through this, we learned a lot about jquery and how to add it. Making it far more convenient than using the pure javascript when adding in these types of elements. Less words too to code...");
    $(this).css('color','orange');
    $(this).parent().css({"color": "orange"});
    $(this).toggleClass("special");
});

$("#e-button").click(function(){
    $(this).text("Speaks for themselves!");
    $(this).css('color','yellow');
    $(this).parent().css({"color": "yellow"});
    $(this).toggleClass("special");
});