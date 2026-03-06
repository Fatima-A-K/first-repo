//assigns a .wav file that we get from Mixkit. Using the Audio() custructor, we assign the path of bell sound as a parameter
const bells = new Audio("./sounds/bell.wav");

//selecting elements through class selectors w/ .querySelector
const startBtn = document.querySelector(".btn-start");
const session = document.querySelector(".minutes");

let myInterval;

//defining when the application is running , if yeas-> timer will progress, if no-> alert to notify that session has started
let state = true;

//explanation see sceernshot
const appTimer = () => {
    const sessionAmount = Number.parseInt(session.textContent);

    if (state) {
        state = false;
        let totalSeconds = sessionAmount * 60;

        const updateSeconds = () => {
            //Function code
            const minuteDiv = document.querySelector(".minutes");
            const secondDiv = document.querySelector(".seconds");

            totalSeconds--;

            let minutesLeft = Math.floor(totalSeconds / 60);
            let secondsLeft = totalSeconds % 60;

            if (secondsLeft < 10) {
                secondDiv.textContent = "0" + secondsLeft;
            }else {
                secondDiv.textContent = secondsLeft;
            }
            minuteDiv.textContent = `${minutesLeft}`;

            if (minutesLeft === 0 && secondsLeft === 0){
                bells.play();
                clearInterval(myInterval);
            }
        };
        myInterval = setInterval(updateSeconds, 1000);
    } else {
        alert("Session has already started.");
    }
};

const updateSeconds = () => {
    const minuteDiv = document.querySelector(".minutes");
    const secondDiv = document.querySelector(".seconds");

    totalSeconds--;

    let minutesLeft = Math.floor(totalSeconds / 60);
    let secondsLeft = totalSeconds % 60;
};

if (secondsLeft < 10){
    secondDiv.textContent = "0" + secondsLeft;
}else {
    secondDiv.textContent = secondsLeft;
}
minuteDiv.textContent = `${minutsLeft}`;

if (minutesLeft === 0 && secondsLeft === 0){
    bells.play();
    clearIntervall(myInterval);
}