var hour  = 0;
var min  = 0;
var sec  = 0;
var μSec = 0;


function start() {
TimerId = setInterval(function() {
μSec ++;
if (μSec == 10) {
 sec++;
 μSec = 0;
}
if (sec == 60) {
 min++;
 sec = 0;
}
if (min == 60) {
 hour++;
 min = 0;
}

document.getElementById('time').innerHTML = hour + ":" + min + ":" + sec + ":" + μSec;
},100);
};

function stop(){
clearInterval(TimerId);
}

function reset(){
document.getElementById('time').innerHTML = '0:0:0:0';
hour = 0;
min = 0;
sec = 0;
μSec = 0;
}

function startBtn() {
 btn_start.disabled = true;
 btn_stop.disabled = false;
 btn_reset.disabled = true;

 start();
}


function stopBtn() {
 btn_start.disabled = false;
 btn_stop.disabled = true;
 btn_reset.disabled = false;

 stop();
}

function resetBtn() {
 btn_start.disabled = false;
 btn_stop.disabled = true;
 btn_reset.disabled = true;

 reset();
}




