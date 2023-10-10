var time = 0;
var hour  = 0;
var min  = 0;
var sec  = 0;
var mSec = 0;


function start() {
time = setInterval(function() {
mSec ++;
if (mSec == 10) {
 sec++;
 mSec = 0;
}
if (sec == 60) {
 min++;
 sec = 0;
}
if (min == 60) {
 hour++;
 min = 0;
}

document.getElementById('time').innerHTML = hour + ":" + min + ":" + sec + ":" + mSec;
},100);
};

function stop(){
clearInterval(time);
}

function reset(){
document.getElementById('time').innerHTML = '0:0:0:0';
hour = 0;
min = 0;
sec = 0;
mSec = 0;
}

function startBtn() {
 btn_start.disabled = true;
 btn_stop.disabled = false;
 btn_reset.disabled = false;

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


