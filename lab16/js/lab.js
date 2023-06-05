//Lab 16 - JSON and APIs!
//Putting a comic into our webpage using JSON and APIs!
//Gabriella Frint <gfrint@ucsc.edu>
//June 2023

function getComic(num) {
    if (typeof num === 'undefined') {
      numStr = "";
    } else {
      numStr = num.toString() + "/";
    }

$.ajax({
    url: "https://xkcd.com/614/info.0.json",
    type: "GET",
})

.done(function(data) {
    var imageUrl = data.img;
    var title = data.title;
    var alt = data.alt;
    var comicNum = data.num;
    var html = `<div id="imageblock">
        <h2>${title}</h2>
        <img src="${imageUrl}" title="${alt}"><br>
        <button id="prev">Previous</button><button id="next">Next</button>
      </div>`
    $("#output").html(html);
    $("#prev").click(function(){
      getComic(comicNum - 1);
    });
    $("#next").click(function(){
      getComic(comicNum + 1);
    });
})
.fail(function(){
})
}
getComic();