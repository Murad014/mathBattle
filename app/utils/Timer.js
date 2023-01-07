

export function toMMSSMS(mint, sec, mSec){
    mSec = (mSec <= 9) ? "00" + mSec : mSec;
    mSec = (mSec < 100 && mSec >= 9) ? "0" + mSec : mSec;
    sec = (sec <= 9) ? "0" + sec : sec;
    mint = (mint <= 9) ? "0" + mint : mint

    return mint + ":" + sec + ":" + mSec;
}

export function calcTimer(result){
    let mSec = 0, sec = 0, mint = 0;
    mSec = result % 1000;
    sec = Math.floor(result / 1000) % 60;
    mint = Math.floor(result / 60000);

    return {
        "mSec": mSec,
        "sec": sec,
        "mint": mint
    }
}




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


