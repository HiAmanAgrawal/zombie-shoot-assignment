document.addEventListener('DOMContentLoaded', function() {
// Iteration 1: Declare variables required for this game
const body = document.getElementById('game-body');
const timer = document.getElementById('timer');
const beat = new Audio("./assets/shotgun.wav");
const bgBeat = new Audio("./assets/bgm.mp3");
let zombieId = 0;
let zombie;
let timerId;

// Iteration 1.2: Add shotgun sound
body.onclick = () => {
    beat.play();
};

// Iteration 1.3: Add background sound
bgBeat.play();
bgBeat.loop = true;

// Iteration 1.4: Add lives
var life = 4;

// Iteration 2: Write a function to make a zombie
function makeZombie() {
    body.innerHTML += `<img id="zombie${zombieId}" class=zombie-image src="./assets/zombie-${randomNum(1,6)}.png">`;
    zombie = document.getElementById('zombie' + zombieId);
    zombie.style.animationDuration = `${randomNum(2, 5)}s`;
    zombie.style.transform = `translateX(${randomNum(20, 80)}vw)`;
    zombie.onclick = () => {
        delZombie(zombie);
    };
}

// Iteration 3: Write a function to check if the player missed a zombie
function checkCollision(zombie) {
    if (zombie.getBoundingClientRect().top <= 0) {
        life--;
        return true;
    }
    return false;
}

// Iteration 4: Write a function to destroy a zombie when it is shot or missed
function delZombie(zombie) {
    zombie.style.display = 'none';
    zombieId++;
    makeZombie();
}

// Iteration 5: Creating timer
var time = 60;

// Iteration 6: Write a code to start the game by calling the first zombie
timerId = setInterval(() => {
    time--;
    timer.innerText = time;
    console.log(timer);
    console.log(time);
    if (time == 0) {
        window.location = 'win.html';
    }
}, 1000);

setInterval(() => {
    if (checkCollision(zombie) == true) {
        delZombie(zombie);
        if (life == 0) {
            clearInterval(timer);
            window.location = 'win.html';
        }
    }
}, 100);

// Iteration 6: Write a code to start the game by calling the first zombie
makeZombie();

// Iteration 7: Write the helper function to get random integer
function randomNum(mini, maxi) {
    return Math.floor(Math.random() * ((maxi + 1) - mini)) + mini;
}

});