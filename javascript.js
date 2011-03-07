var film;
var steps = [prewet,developer,waterrinse, stop,waterrinse,fixer,waterrinse,fixer,hypo,waterbath];
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
    
    if (document.getElementById('film-select').value = "k9000");
        film = 'k9000';
        showElement('k9000-developer');
        
}
function next(){
    steps[currentStep + 1]()
    currentStep = ++currentStep
}
function developer(){
    var recycle = false;
    countdown(150); //2:30
    hideElement(film + '-developer');
    
}
function countdown(){
}