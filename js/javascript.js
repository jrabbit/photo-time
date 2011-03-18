var film;
var steps = [prewet,developer,waterrinse, stop,waterrinse,fixer,waterrinse,hypo,waterbath];
var recycle = {developer: false, stop: true, fixer: true, hypo: false};
var reels = 1;
var temp = 68;
var currentStep = 0;
var end;
var devo;

/*[function() { return "alpha"; }, function() { return "bravo"; }][0]() */

function start(){
    $('#button1').hide();
    $('#film-select').show();
}


function next(){
    steps[currentStep + 1]();
    $('#n'+currentStep).show();
    $('#n'+(currentStep -1)).hide();
    currentStep = ++currentStep;
    $('#timer').show();
}

$(document).ready(function() {
    //setup film select list
    $('#film-select').change(function directionsDeveloper(){
        film = $('#film-select').val();
        $('#developer').show();
        $('#n0').show();
        $('#film-select').hide();
        $('#timer').show();
    });
    // Hide Buttons
    $('.next').click(next);
    $(window).konami(function(){
        //alert('Konami Code Activated');
        main();
    if (/chrome/.test( navigator.userAgent.toLowerCase() )){
        if (window.webkitNotifications.checkPermission() !== 0){
            $('.auth').show();}
    }
    });
});

function resolveTime(wait){
    min = Math.floor( wait / (1000*60));
    secs  = Math.floor( wait / 1000 );
    wait_sec = secs - min * 60;
    if (wait_sec < 10)
    {
        wait_sec="0"+wait_sec;
    }
    return min + ":" +wait_sec;
}

function countdown(){
/* take # minutes and display a countdown */
    var t = new Date();
    var curtime  = t.getTime();
    var wait = end - curtime;
    if (wait < 0){
        clearInterval(devo);
        $('#timer').hide();
        delete end;
        delete devo;
        next();
    }
    $('#timer').html(resolveTime(wait));
}

function prewet(){} // No.
function waterrinse(){} // Are you kidding me?
function stop(){
    end = Date.now() + (1000*30); // 30 seconds
    devo = setInterval(countdown, 1000);
}
function fixer(){
    end = Date.now() + (5*1000*60); // 5 Minutes
    devo = setInterval(countdown, 1000);
}
function hypo(){
    end = Date.now() + (2.5*1000*60); // 2:30
    devo = setInterval(countdown, 1000);
}
function waterbath(){
    end = Date.now() + (5*1000*60); // 5 Minutes
    devo = setInterval(countdown, 1000);
}
function developer(){
    var time = {k9000: 6,toaster: .3, hps400: 8, fp4125:7,delta3200:7,delta100:7,k100:7,k400:8,ktri400:8, a400:8, ilf400:7.5}
    var recycle = false;
   // $('#n0').hide();
    end = Date.now() + (time[film]*1000*60);
    devo = setInterval(countdown, 1000);
}

function shake(time, seconds){
    // interval  = (seconds * 1000);
    // if Math.abs(1 - (time / interval))
    //if wait_sec == 30{
    //notify()
    //}
    
}

function RequestPermission(callback) {
    window.webkitNotifications.requestPermission(callback);
}

function notify(words){
    if (typeof(PhoneGap) == "undefined"){
        //Non Phone notification methods
        if (/chrome/.test( navigator.userAgent.toLowerCase() )){
            console.log("chrome detected")
            //broken chrome notifications
            if (window.webkitNotifications.checkPermission() > 0) {
                RequestPermission(notify);
            } 
            else{
                notification = window.webkitNotifications.createNotification("favicon.ico", "Photo Time!", words);
                notification.show();
            }
        }
    }
    // end non-phone work
    else{
        navigator.notification.beep(2);
        navigator.notification.vibrate(2000);
    }
}


