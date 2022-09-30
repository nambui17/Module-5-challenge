// Code for setting current date in header
var today = moment();
$("#currentDay").text("Today is " + today.format("MMM Do, YYYY") + "!");
//

// What is the current hour. Will round down and is an integer.
var currentHour = today.hours();
//

// loop to populate rows for time
var contain = $('#plan');

//This for loop should repeat 8 times for 8 hours in work day from 9:00 AM to 5:00 PM
var time = 0;
for (var i = 0; i < 25; i++) {
    // rowdiv inside for loop to reset every time
    var rowdiv = $('<div class = "row">');
    //column for time should take up only 1/6 of screen on large screens same with save button
    //on smaller screens should take up 1/4 of screen time, save button 1/12 of screen, and text should have the rest
    //use bootstrap classes for this
    var timecol = $('<div class = "col-lg-2 col-xs-3 text-center hour"></div>');
    rowdiv.append(timecol);
    //for time column the rest is still 8/12 for smaller screens
    var textcol = $('<input class = "col-lg-8 textarea" type = "text"></input>');
    rowdiv.append(textcol);
    var savecol = $('<div class = "col-lg-2 col-xs-1 saveBtn text-center"></div>');
    savecol.text("Save");
    rowdiv.append(savecol);
    contain.append(rowdiv);
    //Set time for each box in 12 hour time
    if (time > 0 && time < 12) {
        timecol.text(time + " A.M.");
    } else if (time == 12) {
        timecol.text(time + " P.M.");
    } else if (time == 0) {
        timecol.text(time + 12 + " A.M.")
    } else {
        timecol.text(time - 12 + " P.M.");
    }
    time += 1;
}

//Need a setInterval function to automatically update time as time passes and then during this will update color
setInterval(function() {
    colorCode();
},5000);
//Refresh every 5 seconds
//If only use once then time will not update while using website.
function colorCode() {
    currentHour = today.hours();
    for (var i = 0; i < 25; i++) {
        //If current hour is passed, has yet to pass, or current hour, the if else statement will color code
        contain.children().eq(i).addClass
        if (currentHour < i) {
            contain.children().eq(i).children().eq(1).addClass("past");
        } else if (currentHour == i) {
            contain.children().eq(i).children().eq(1).addClass("present");
        } else {
            contain.children().eq(i).children().eq(1).addClass("future");
        }
    }
}


//Call the function at webpage load
colorCode();
