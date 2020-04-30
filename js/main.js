var idInterwalu;

// var hourSet = 0,
//     minutesSet = 0,
//     secoundsSet = 0;

// var houers = hourSet,
//     minutes = minutesSet,
//     secounds = secoundsSet;

var houers = document.getElementById("hour").value,
    minutes = document.getElementById("minutes").value,
    secounds = document.getElementById("secounds").value;

var displayHour = document.getElementById("hourTime"),
    displayMinutes = document.getElementById("minutesTime"),
    displaySecounds = document.getElementById("secoundsTime");

var maxMinutes = 59,
    maxSecounds = 59;

function startTimer(){
    idInterwalu = setInterval(changeBackground, 1000);
}

function changeBackground(){
    var display = document.getElementById("timerDisplay");

    houers = ("0" + houers).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    secounds = ("0" + secounds).slice(-2);

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

    // display.innerHTML = houers+":"+minutes+":"+secounds;
}

function stopTimer(){
    clearInterval(idInterwalu);
}

//Set Time
