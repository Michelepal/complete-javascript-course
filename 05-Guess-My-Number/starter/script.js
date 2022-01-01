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

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;
