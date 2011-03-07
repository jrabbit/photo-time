var film;
var steps = [prewet,developer,waterrinse, stop,waterrinse,fixer,waterrinse,fixer,hypo,waterbath];
var reels = 1;
const temp = 68;
var currentStep;
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
}
function next(){
    steps[currentStep + 1]()
    currentStep = ++currentStep
}
function prewet(){}
function waterrinse(){}
function stop(){}
function fixer(){}
function hypo(){}
function waterbath(){}
function developer(){
    var time = {k9000: 9001,toaster: -1, hps400: 8, fp4125:7,delta3200:7,delta100:7,k100:7,k400:8,ktri400:8, a400:8, ilf400:7.5}
    var recycle = false;
    countdown(time[film]);
    hideElement('developer');
    
}
function countdown(){
/* take # minutes and display a countdown */
}