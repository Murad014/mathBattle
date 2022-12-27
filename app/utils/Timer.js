
let date2 = new Date();
export default function toMMSSMS(mint, sec, mSec){
    mSec = (mSec <= 9) ? "00" + mSec : mSec;
    mSec = (mSec < 100 && mSec >= 9) ? "0" + mSec : mSec;
    sec = (sec <= 9) ? "0" + sec : sec;
    mint = (mint <= 9) ? "0" + mint : mint

    return mint + ":" + sec + ":" + mSec;
}


document.addEventListener('keypress', (event) => {
    let name = event.key;
    let code = event.code;


})


// let mSec = 0, sec = 0, mint = 0;
// let date = Date.now();
//
// /* FOR TIMER */
// setInterval(() => {
//     let root2 = document.getElementById("timerH2");
//     let date2 = Date.now();
//     let result =  date2 - date;
//
//     mSec = result % 1000;
//     sec = Math.floor(result / 1000) % 60;
//     mint = Math.floor(result / 60000);
//
//     root2.innerHTML = toMMSSMS(mint, sec, mSec);
//
// },0);
// /* END - FOR TIMER */


