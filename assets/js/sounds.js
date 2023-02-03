
let soundRain = document.querySelector('#audioRain');
let soundNight = document.querySelector('#audioNight');
let soundCoffee = document.querySelector('#audioCoffee');
let count = 0;

function playSound (chosenSound) {
    let sound = chosenSound;
    if(count == 0) {
        count = 1;
        sound.play();
    }else {
        count = 0;
        sound.pause();
    }
}