let interval_Id;

// Take sections of timer
const displayHour = document.getElementById("hourTime");
const displayMinutes = document.getElementById("minutesTime");
const displaySecounds = document.getElementById("secoundsTime");

// Take control buttons
const btnStart = document.getElementById("start");
const btnStop = document.getElementById("stop");

let hours = 0;
let minutes = 0;
let secounds = 0;

//Render clear timer display
window.onload = function(){
    displayHour.innerHTML = "00";
    displayMinutes.innerHTML = ": 00 :";
    displaySecounds.innerHTML = "00";
}

// Set value for timer from buttons + update timer display
function setTime(clicked_id){
    if(clicked_id == "addHour"){
        hours = hours + 1;
    }
    if(clicked_id == "subHour"){
        hours = hours - 1;
        if(hours < 0){
            hours = 0;
        }
    }
    if(clicked_id == "addMinutes"){
        minutes = minutes + 1;
        if(minutes>59){
            minutes = 0;
        }
    }
    if(clicked_id == "subMinutes"){
        minutes = minutes - 1;
        if(minutes<0){
            minutes = 59;
        }
    }
    if(clicked_id == "addSecounds"){
        secounds = secounds + 1;
        if(secounds>59){
            secounds = 0;
        }
    }
    if(clicked_id == "subSecounds"){
        secounds = secounds - 1;
        if(secounds<0){
            secounds = 59;
        }
    }

    // Set numbers to double e.g. 00 or 09
     preparedHours = String(hours).padStart(2, '0');
     preparedMinutes = String(minutes).padStart(2, '0');
     preparedSecounds = String(secounds).padStart(2, '0');

    //Render in timer display
    displayHour.innerHTML = preparedHours;
    displayMinutes.innerHTML = ": "+preparedMinutes+" :";
    displaySecounds.innerHTML = preparedSecounds;
}

// Start count down
function startTimer(){
    interval_Id = setInterval(changeTime, 1000);

    //Change button status
    btnStart.disabled = true;
    btnStart.style.backgroundColor = "rgba(41, 41, 41, 0.25)";
    btnStop.disabled = false;
    btnStop.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
}

// Set new time value
function changeTime(){

    //Decrement appropriate timer section
    if(secounds>0){
        secounds--;
    }
    else if(minutes>0 && secounds<=0){
        minutes--;
        secounds = 59;
    }
    else if(hours>0 && minutes<=0 && secounds<=0){
        hours--;
        minutes = 59;
        secounds = 59;
    }

    if(hours<=0 && minutes<=0 && secounds<=0){
        stopTimer();
    }

    // Set numbers to double e.g. 00 or 09
    preparedHours = String(hours).padStart(2, '0');
    preparedMinutes = String(minutes).padStart(2, '0');
    preparedSecounds = String(secounds).padStart(2, '0');

    //Render in timer display
    displayHour.innerHTML = preparedHours;
    displayMinutes.innerHTML = ": "+preparedMinutes+" :";
    displaySecounds.innerHTML = preparedSecounds;
}

// Stop count down
function stopTimer(){
    clearInterval(interval_Id);

    //Change button status
    btnStart.disabled = false;
    btnStart.style.backgroundColor = "rgba(51, 185, 10, 0.2)";
    btnStop.disabled = true;
    btnStop.style.backgroundColor = "rgba(41, 41, 41, 0.25)";
}
