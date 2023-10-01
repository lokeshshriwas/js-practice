const randomNumber = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function (e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number")
    } else if(guess < 0 ){
        alert("enter the valid value between 1-100")
    } else if(guess > 100){
        alert('enter the valid value between 1-100 ')
    } else{
        prevGuess.push(guess)
        if(numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game over. Random number was ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess);
        }
    } 
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`you guessed it right`)
        endGame()
    } else if(guess < randomNumber){
        displayMessage(`Number is TOO low`)
    } else if(guess > randomNumber){
        displayMessage(`Number is TOO high`)
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value= '';
    userInput.setAttribute('disabled', '');
    p.innerHTML = `<button id ="newGame">Start new Game</button>`
    startOver.appendChild(p)
    playGame = false;
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e){
        randomNumber = parseInt(Math.random()*100 + 1);
        prevGuess = []
        numGuess = 1
        remaining.innerHTML = `${11 - numGuess}`;
        startOver.removeChild(p)
        guessSlot.innerHTML = '';
        userInput.removeAttribute('disabled')
        playGame = true;
    })
}


