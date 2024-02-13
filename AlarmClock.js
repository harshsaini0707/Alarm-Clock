const TIME = document.querySelector("h1");
let hour = document.getElementById("hur");
let min = document.getElementById("min");
let span = document.getElementById("TIMEE");
let set = document.getElementById("set");
const sound = document.getElementById("sound");
let stop = document.getElementById("stop");


// setInterval(function(){
//     let date = new Date();
//     let time = date.toLocaleTimeString();
//     TIME.innerHTML = time;
// }, 1000);
setInterval(function(){
    let date = new Date();
    let options = { hour12: true };
    let time = date.toLocaleTimeString([], options);
    TIME.innerHTML = time;
}, 1000);


function setAlarm(){
    let hr = hour.value;
    let m = min.value;
    span.innerHTML = hr + ":" + m + ":00";
}

set.addEventListener("click", function(){
    setAlarm();
});

stop.addEventListener("click", function(){
    location.reload();
});

let Check = setInterval(() => {
    let alrmtime = span.innerHTML;
    alrmtime = alrmtime.split(":");
     
    let alrmhr = alrmtime[0];
    let almmin = alrmtime[1];

    let systime = new Date();
    let sysh = systime.getHours();
    let sysm = systime.getMinutes();
console.log("hello");
    if(sysh>12){
        sysh = sysh-12;
    } 

    if (alrmhr == sysh && almmin == sysm) {
      sound.play();
    
    }

}, 1000);





