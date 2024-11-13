let start = 0
let timer  = null
let elapsed = 0
let isRunning = false
const display = document.getElementById('watch')
function startt(){
    if(!isRunning){
        start = Date.now()-elapsed;
        timer = setInterval(update,10)
        isRunning=true;
    }
}
function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsed = Date.now()-start;
        isRunning=false;
    }
}
function reset(){
    if(!isRunning){
        clearInterval(timer);
        elapsed = 0;
        start = 0;
        display.textContent="00:00:00:00"
    }

}
function update(){
    let curr = Date.now();
    elapsed = curr-start;
    let hours = Math.floor(elapsed/(1000 *60 * 60));
    let mins = Math.floor(elapsed/(1000*60)%60);
    let sec = Math.floor((elapsed/1000)%60);
    let mill = Math.floor(elapsed%1000/10);
    hours = hours.toString().padStart(2,0);
    mill = mill.toString().padStart(2,0);
    sec = sec.toString().padStart(2,0);
    mins = mins.toString().padStart(2,0);
    display.textContent=hours+":"+mins+":"+sec+":"+mill;
}
