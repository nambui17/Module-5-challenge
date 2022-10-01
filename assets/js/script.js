// Code for setting current date in header
var today = moment();
$("#currentDay").text("Today is " + today.format("MMM Do, YYYY h:mm A") + "!");
//

// What is the current hour. Will round down and is an integer.
var currentHour = today.hours();
//

// loop to populate rows for time
var contain = $('#plan');

//This for loop should repeat 8 times for 8 hours in work day from 9:00 AM to 5:00 PM
for (var i = 9; i < 18; i++) {
    // rowdiv inside for loop to reset every time
    var rowdiv = $('<div class = "row">');
    //column for time should take up only 1/6 of screen on large screens same with save button
    //on smaller screens should take up 1/4 of screen time, save button 1/12 of screen, and text should have the rest
    //use bootstrap classes for this
    var timecol = $('<div class = "col-lg-2 col-xs-3 text-center hour"></div>');
    rowdiv.append(timecol);
    //for time column the rest is still 8/12 for smaller screens
    var textcol = $('<textarea class = "col-lg-9" type = "text"></textarea>');
    rowdiv.append(textcol);
    var savecol = $('<button type = "button" class = "btn  btn-lg col-lg-1 col-xs-1 saveBtn text-center"></button>');
    savecol.text("Save");
    rowdiv.append(savecol);
    contain.append(rowdiv);
    //Set time for each box in 12 hour time
    if (i > 0 && i < 12) {
        timecol.text(i + " A.M.");
    } else if (i == 12) {
        timecol.text(i + " P.M.");
    } else if (i == 0) {
        timecol.text(i + 12 + " A.M.")
    } else {
        timecol.text(i - 12 + " P.M.");
    }
}

//Need a setInterval function to automatically update time as time passes and then during this will update color
setInterval(function() {
    //Refresh time every 5 seconds in header
    today=moment();
    $("#currentDay").text("Today is " + today.format("MMM Do, YYYY h:mm A") + "!");
    colorCode();
},5000);

//Refresh every 5 seconds
//If only use once then time will not update while using website.
function colorCode() {
    currentHour = today.hours();
    for (var i = 0; i < contain.children().length; i++) {
        //If current hour is passed, has yet to pass, or current hour, the if else statement will color code
        contain.children().eq(i).addClass
        //Have to add 9 since first time block starts at 9:00 AM.
        if (currentHour < i+9) {
            contain.children().eq(i).children().eq(1).addClass("future");
        } else if (currentHour == i+9) {
            contain.children().eq(i).children().eq(1).addClass("present");
        } else {
            contain.children().eq(i).children().eq(1).addClass("past");
        }
    }
}


//Call the function at webpage load
colorCode();

//Save button functionality takes time as string as key and then the input value of text box as value
var save = $('button');
save.click(function() {
    var plan = $(this).siblings("textarea").val();
    var t = $(this).siblings("div").text();
    localStorage.setItem(t,plan);
})

//populate text boxes with local storage data
// use localStorage.getItem("key") to get value of that key and on load of page will keep local storage data
function load() {
    for (var i=0;i< contain.children().length ;i++) {
        var timetext = contain.children().eq(i).children().eq(0).text();
        var stored = localStorage.getItem(timetext);
        contain.children().eq(i).children().eq(1).val(stored);
    }
}

load();
