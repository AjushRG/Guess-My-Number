'use strict';

let randomNum = Math.trunc(Math.random() * 20) + 1;
let scoreNum = 20;
let highscoreNum = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guessNum = Number(document.querySelector('.guess').value);
  document.querySelector('.score').textContent = scoreNum;

  if (scoreNum > 1) {
    if (!guessNum) {
      displayMessage('🛑 No Number!!');
    } else if (guessNum === randomNum) {
      displayMessage('🏆🎊 WINNER 🥳🥂');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = Number(randomNum);
      console.log('Win');
      if (scoreNum > highscoreNum) highscoreNum = scoreNum;
      document.querySelector('.highscore').textContent = highscoreNum;
    } else {
      guessNum < randomNum
        ? displayMessage('👇📉 Too LOW')
        : displayMessage('👆📈 Too HIGH');
      document.querySelector('.score').textmessage = --scoreNum;
    }
  } else {
    document.querySelector('.message').textmessage = '📛 GAME OVER!!!';
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  scoreNum = 20;
  document.querySelector('.score').textContent = scoreNum;
  randomNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
