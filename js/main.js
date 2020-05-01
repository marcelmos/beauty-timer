var idInterwalu;

/*
var hourSet = 0,
    minutesSet = 0,
    secoundsSet = 0;
                                // Variables for buttons above and below timer sections
var houers = hourSet,
    minutes = minutesSet,
    secounds = secoundsSet;
*/

// Take sections of timer
var displayHour = document.getElementById("hourTime"),
    displayMinutes = document.getElementById("minutesTime"),
    displaySecounds = document.getElementById("secoundsTime");

// Take control buttons
var btnStart = document.getElementById("start");
var btnStop = document.getElementById("stop");

var houers,
    minutes,
    secounds;

const maxMinutes = 59,
    maxSecounds = 59;

// Set value for timer from input fields
function setHours(){
    if(btnStart.disabled == false)
    houers = document.getElementById("hour").value;

    displayHour.innerHTML = houers;
}

function setMinutes(){
    if(btnStart.disabled == false)
    minutes = document.getElementById("minutes").value;

    displayMinutes.innerHTML = minutes;
}

function setSecounds(){
    if(btnStart.disabled == false)
    secounds = document.getElementById("secounds").value;

    displaySecounds.innerHTML = secounds;
}

// Start count down
function startTimer(){
    idInterwalu = setInterval(changeTime, 1000);
    btnStart.disabled = true;
    btnStart.style.backgroundColor = "rgba(41, 41, 41, 0.25)";
    btnStop.disabled = false;
    btnStop.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
}

// Set new time value
function changeTime(){

    // Set numbers to double e.g. 00 or 09
    if(houers<10){
        houers = ("0" + houers).slice(-2);
    }
    minutes = ("0" + minutes).slice(-2);
    secounds = ("0" + secounds).slice(-2);

    // If minutes or secounds are bigger then 59 set to 59
    if(minutes>59){
        minutes = 59;
    }
    if(secounds>59){
        secounds = 59;
    }

    if(secounds>0){
        secounds--;
        secounds = ("0" + secounds).slice(-2);
    }
    else if(minutes>0 && secounds<=0){
        minutes--;
        minutes = ("0" + minutes).slice(-2);
        secounds = maxSecounds;
    }
    else if(houers>0 && minutes<=0 && secounds<=0){
        houers--;
        houers = ("0" + houers).slice(-2);
        minutes = maxMinutes;
        secounds = maxSecounds;
    }

    if(houers<=0 && minutes<=0 && secounds<=0){
        stopTimer();
    }

    displayHour.innerHTML = houers;
    displayMinutes.innerHTML = minutes;
    displaySecounds.innerHTML = secounds;
}

// Stop count down
function stopTimer(){
    clearInterval(idInterwalu);
    btnStart.disabled = false;
    btnStart.style.backgroundColor = "rgba(51, 185, 10, 0.1)";
    btnStop.disabled = true;
    btnStop.style.backgroundColor = "rgba(41, 41, 41, 0.25)";
}
