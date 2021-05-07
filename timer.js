const startButton = document.getElementById('startButton')
const stopButton = document.getElementById("stopButton")

var mm = 24
var ss = 60

var cron;

function start(){
    cron = setInterval(() => { timer(); }, 1000);
   startButton.style.visibility ='hidden'
   stopButton.style.visibility = 'visible'
}
function pause() {
    clearInterval(cron);
    startButton.style.visibility ='visible'
   stopButton.style.visibility = 'hidden'
}

function timer(){
    ss--;
    if(ss == 0){
        ss = 60
        mm --
    }
    if(mm == 0){
        alert('Podepaaa')
        
    }

    var format = (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss)
    document.getElementById('display').innerText = format

    return format
}
