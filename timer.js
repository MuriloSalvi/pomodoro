const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const pauseButton = document.getElementById("pauseButton");
const alertContainer = document.getElementById("alert");
let mm = 24;
let ss = 60;
let mode  = 0;
let cron;

function toggleEstate(){}

function setTimer(){
  mm = 0
  ss = 15
}

//inicia o timer
function start() {
  cron = setInterval(() => {
    timer();
  }, 1000);

  startButton.style.visibility = "hidden";
  stopButton.style.visibility = "visible";
}

//pausa o timer
function pause() {
  clearInterval(cron);
  startButton.style.visibility = "visible";
  stopButton.style.visibility = "hidden";
}

//muda o modo
function stopCicle() {
  if (mm | ss != 0) {
    alertContainer.style.display = "block";
  }
}
function chill() {
  pause();
    document.getElementById("display").innerText = "05:00";
  alertContainer.style.display = "none";
  mm = 5
  ss = 0

  if(mm<0){
    setTimer()
  }
}
 //esconde o hover
function hideAlert() {
  alertContainer.style.display = "none";
}
//muda o modo

function toggleMode(){
  if(mode == 0){
    mode = 1
    chill()
  }
  else if(mode == 1){
    mode = 0
    mm = 25
  }
}

//dispensa apresentações
function timer() {
  ss--;
  if (ss <= 0) {
    ss = 60;
    mm--;
  } 
    if( mm < 0 ){
    toggleMode()
    pause()
} 
  

  var format = (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss);
  document.getElementById("display").innerText = format;

  return format;
}

