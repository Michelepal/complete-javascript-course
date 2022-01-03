'use strict';

/* //lezione 1 - selezione elementi DOM


document.querySelector('.message').textContent = 'Correct Number!';

//lezione 2 - selezione elementi DOM 2

document.querySelector('.score').textContent = 10;

document.querySelector('.number').textContent = 13;

document.querySelector('.guess').value =  23;

*/

//lezione 3 - Listener eventi click

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  const displayMessage = function(message) {
    document.querySelector('.message').textContent =  message;

  }

  if (!guess) {
    displayMessage('No Number');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');

    //lezione 4 modifica del csss.
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //lezione 5 implementazione dell'highscore
    if (highscore > score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  
    // lezione 6 - refactoring code 
  } else if (guess !== secretNumber) {

      if (score > 1) {
        displayMessage( guess > secretNumber ? 'Too high!' : 'Too Low');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('You Lost!');
        document.querySelector('.score').textContent = 0;
      }
    }

/*     else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost!';
      document.querySelector('.score').textContent = 0;
    }
  } */
});

let hightscore = 0;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = 0;
});
