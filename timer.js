const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const pauseButton = document.getElementById("pauseButton");
const alertContainer = document.getElementById("alert");
var mm = 0;
var ss = 10;

var cron;

function start() {
  cron = setInterval(() => {
    timer();
  }, 1000);

  startButton.style.visibility = "hidden";
  stopButton.style.visibility = "visible";
}
function pause() {
  clearInterval(cron);
  startButton.style.visibility = "visible";
  stopButton.style.visibility = "hidden";
}
function stopCicle() {
  if (mm | ss != 0) {
    alertContainer.style.display = "block";
  }
}
function chill() {
    document.getElementById("display").innerText = "05:00";
  alertContainer.style.display = "none";
  
  mm = 5;
  ss = 1;
  pause();

 
}

function hideAlert() {
  alertContainer.style.display = "none";
}

function timer() {
  ss--;
  if (ss == 0) {
    ss = 60;
    mm--;
  } 
    if( mm < 0 ){
    chill()
} 
  

  var format = (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss);
  document.getElementById("display").innerText = format;

  return format;
}

end()