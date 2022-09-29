// Code for setting current date in header
var today = moment();
$("#currentDay").text("Today is " + today.format("MMM Do, YYYY") + "!");
//////////////////////////////////////////////

// loop to populate rows for time
var contain=$('#plan');

//This for loop should repeat 24 times for 24 hours in a day 12:00AM to 11:00 PM
//There should be 24 rows
for (var i=0; i<23; i++) {
    // rowdiv inside for loop to reset every time
    var rowdiv=$('<div class = row>');
    //column for time should take up only 1/6 of screen on large screens same with save button
    //on smaller screens should take up 1/4 of screen time, save button 1/12 of screen, and text should have the rest
    //use bootstrap classes for this
    var timecol = $('<div class = col-lg-2 col-xs-3>1</div>');
    rowdiv.append(timecol);
    //for time column the rest is still 8/12 for smaller screens
    var textcol = $('<div class = col-lg-8>2</div>');
    rowdiv.append(textcol);
    var savecol = $('<div class = col-lg-2 col-xs-1>3</div>');
    rowdiv.append(savecol);
    contain.append(rowdiv);
    //Set time for each box
}

function timeDet() {
    
}