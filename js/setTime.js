/*
Script for buttons below and above timer sections
NOT WORKING YET
*/

var hourSet = 00,
    minutesSet = 00,
    secoundsSet = 00;

function setTime(clicked_id){
    if(clicked_id == "addHour"){
        hourSet += 1;
    }
    if(clicked_id == "subHour"){
        hourSet -= 1;
    }
    if(clicked_id == "addMinutes"){
        minutesSet += 1;
    }
    if(clicked_id == "subMinutes"){
        minutesSet -= 1;
    }
    if(clicked_id == "addSecounds"){
        secoundsSet += 1;
    }
    if(clicked_id == "subSecounds"){
        secoundsSet -= 1;
    }
}
