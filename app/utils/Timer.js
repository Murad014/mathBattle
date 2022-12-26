
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



