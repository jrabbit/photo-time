// GPLv3 Jrabbit (C) 2011
var film;
var steps = [prewet,developer,waterrinse, stop,waterrinse,fixer,waterrinse,hypo,waterbath];
var recycle = {developer: false, stop: true, fixer: true, hypo: false}
var reels = 1;
var temp = 68;
var currentStep = 0;

var end;

/*[function() { return "alpha"; }, function() { return "bravo"; }][0]() */

function hideElement(id){
    document.getElementById(id).style.display = 'none';
}
function showElement(id){
    document.getElementById(id).style.display = 'block';
}

function start(){
    hideElement('button1');
    showElement('film-select');

}
function directionsDeveloper(){
    film = document.getElementById('film-select').value
    showElement('developer')
    hideElement('film-select');
    showElement('n0');
    showElement('timer');
}
function next(){
    steps[currentStep + 1]()
    showElement('n' + currentStep)
    currentStep = ++currentStep
}

function prewet(){}
function waterrinse(){}
function stop(){
    end = Date.now() + 1000*30 // 30 seconds
    setInterval(countdown, 1000)
}
function fixer(){
    end = Date.now() + 5*1000*60 // 5 Minutes
    setInterval(countdown, 1000)
}
function hypo(){
    end = Date.now() + 2.5*1000*60 // 2:30
    setInterval(countdown, 1000)
}
function waterbath(){
    end = Date.now() + 5*1000*60 // 5 Minutes
    setInterval(countdown, 1000)
}
function developer(){
    var time = {k9000: 6,toaster: 6, hps400: 8, fp4125:7,delta3200:7,delta100:7,k100:7,k400:8,ktri400:8, a400:8, ilf400:7.5}
    var recycle = false;
    hideElement('n0')
    end = Date.now() + (time[film]*1000*60);
    setInterval(countdown, 1000)
}

function resolveTime(wait){
    min = Math.floor( wait / (1000*60))
    secs  = Math.floor( wait / 1000 );
    wait_sec = secs - min * 60;
    if (wait_sec < 10){
        wait_sec="0"+wait_sec}
    return min + ":" +wait_sec
}
function countdown(min){
/* take # minutes and display a countdown */
    var curtime = Date.now();
    var wait = end - curtime;
    document.getElementById('timer').innerHTML = resolveTime(wait) ;
}