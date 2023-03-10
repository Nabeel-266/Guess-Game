const input = document.querySelector('.userInput');
const checkButton = document.querySelector('.checkButton');
const hint = document.querySelector('.hint-txt');
const remainChances = document.querySelector('.chances');
const expression = document.querySelector('.expression');

// Set the Focu on Input Field
input.focus();

let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
let chance = 10;

// ---------- Listen for the click event on the check button ----------
checkButton.addEventListener('click', () => {

    // decreament the chance variable on every click
    chance--;

    // get the value from the input field
    let inputValue = input.value;

    // check if the input value is equal to the random Number
    if(inputValue == randomNumber){

        // update guessed content, disabled input, check button text, eapression visible
        hint.textContent = "Congrats! You have done it";
        input.disabled = true;
        [checkButton.textContent, hint.style.color] = ["Replay", "#fff"];
        expression.style.display = 'block';
    }
    
    // check if input value is > random number within between 1-99 range
    else if(inputValue > randomNumber + 20 && inputValue < 100){

        hint.textContent = 'Your Guessing is too High';
        remainChances.textContent = chance;
    } 
    else if(inputValue > randomNumber + 10 && inputValue < 100){

        hint.textContent = 'Your Guessing is High';
        remainChances.textContent = chance;
    }
    else if(inputValue > randomNumber && inputValue < 100){

        hint.textContent = 'Your Guessing is High but too Close';
        remainChances.textContent = chance;
    }

    // check if input value is < random number within between 1-99 range
    else if(inputValue < randomNumber - 20 && inputValue < 100){

        hint.textContent = 'Your Guessing is too Low';
        remainChances.textContent = chance;
    } 
    else if(inputValue < randomNumber - 10 && inputValue < 100){

        hint.textContent = 'Your Guessing is Low';
        remainChances.textContent = chance;
    }
    else if(inputValue < randomNumber && inputValue < 100){

        hint.textContent = 'Your Guessing is Low but too Close';
        remainChances.textContent = chance;
    }

    // if the input value is not within the range between 1-99 
    else{

        hint.textContent = 'Your number is Invalid';
        hint.style.color = '#de0611';
        remainChances.textContent = chance;
    }

    if(chance == 0){

        // update check button , disabled input and clear input value
        // update hint number text and color to indiacte user loss
        [checkButton.textContent, input.disabled, inputValue] = ["Replay", true, ""];
        [hint.textContent, hint.style.color] = ["Oops! You Lost the Game", '#de0611'];
        expression.style.display = 'block';
        expression.textContent = "Don't Worry! Play Again";
        expression.style.animation = 'none'
        expression.style.color = '#ff709b'

    }
    else if (chance < 0){

        window.location.reload();

    }

})

const tips = document.querySelector('.tips');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const refresh = document.querySelector('.restart')


tips.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
})

overlay.addEventListener('click', () => {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
})

close.addEventListener('click', () => {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
})

refresh.addEventListener('click', () => {
    window.location.reload();
})