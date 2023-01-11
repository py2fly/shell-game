/* Imports */
const shell1Button = document.getElementById('shell1-button');
const shell2Button = document.getElementById('shell2-button');
const shell3Button = document.getElementById('shell3-button');

const shell1Container = document.getElementById('shell1-container');
const shell2Container = document.getElementById('shell2-container');
const shell3Container = document.getElementById('shell3-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

let correctGuesses = 0;
let totalGuesses = 0;

/* Get DOM Elements */
shell1Button.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('shell1', correctSpot);
    console.log(correctSpot);
});

shell2Button.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('shell2', correctSpot);
    console.log(correctSpot);
});

shell3Button.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('shell3', correctSpot);
    console.log(correctSpot);
});

/* State */
function getRandomHidingSpot() {
    const hidingPlaces = ['shell1', 'shell2', 'shell3'];
    const index = Math.floor(Math.random() * hidingPlaces.length);
    const correctSpot = hidingPlaces[index];
    console.log(correctSpot);
    return correctSpot;
}
/* Events */
function handleGuess(userGuess, correctSpot) {
    shell1Container.classList.remove('shell-b.png');
    shell2Container.classList.remove('shell-b.png');
    shell3Container.classList.remove('shell-b.png');

    totalGuesses++;

    const correctHidingPlace = document.getElementById(`${correctSpot}-container`);
    correctHidingPlace.classList.add('shell-b.png');

    if (userGuess === correctSpot) {
        correctGuesses++;
    }
    /* Display Functions */
    winsEl.textContent = correctGuesses;
    lossesEl.textContent = totalGuesses - correctGuesses;
    totalEl.textContent = totalGuesses;
}

// (don't forget to call any display functions you want to run on page load!)
