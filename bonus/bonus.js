//objects to hold image values
const rps = {
  paper: '/images/paper.png',
  rock: '/images/rock.png',
  scissors: '/images/scissors.png',
  spock: '/images/spock.png',
  lizard: '/images/lizard.png',
};

let scores = 0;

//user Selection handler
const pickUserHandler = (pickHand) => {
  let hand = document.querySelector('.pick');
  hand.style.display = 'none';
  let match = document.querySelector('.match');
  match.style.display = 'flex';

  //setting user pick
  const userPick = document.getElementById('u-pick');
  userPick.src = rps[pickHand];
  let cpu = cpuPickHandler();
  referee(pickHand, cpu);
};

//Cpu selection handler
const cpuPickHandler = () => {
  let picks = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
  let cpu = picks[Math.floor(Math.random() * picks.length)];
  const cpuPick = document.getElementById('cpu-pick');
  cpuPick.src = rps[cpu];
  return cpu;
};

//pulsing animation for winner
const userWinner = () => {
  const userWon = document.getElementById('u-pick');
  const cpuWon = document.getElementById('cpu-pick');
  if (cpuWon.classList.contains('visible')) {
    cpuWon.classList.remove('visible');
  }
  userWon.classList.add('winner');
};

const cpuWinner = () => {
  const cpuWon = document.getElementById('cpu-pick');
  const userWon = document.getElementById('u-pick');
  if (userWon.classList.contains('visible')) {
    userWon.classList.remove('visible');
  }
  cpuWon.classList.add('winner');
};
const tie = () => {
  const userWon = document.getElementById('u-pick');
  const cpuWon = document.getElementById('cpu-pick');
  userWon.classList.remove('winner');
  cpuWon.classList.remove('winner');
};

const referee = (user, cpu) => {
  if (user == 'paper' && cpu == 'scissors') {
    decider('YOU LOSE');
    setScore(scores - 1);
    cpuWinner();
  }
  if (user == 'paper' && cpu == 'rock') {
    decider('YOU WIN');
    setScore(scores + 1);
    userWinner();
  }
  if (user == 'paper' && cpu == 'paper') {
    decider("It's a tie");
    tie();
  }
  if (user == 'paper' && cpu == 'spock') {
    decider('YOU WIN');
    setScore(scores + 1);
    userWinner();
  }
  if (user == 'paper' && cpu == 'lizard') {
    decider('YOU LOSE');
    setScore(scores - 1);
    cpuWinner();
  }
  if (user == 'rock' && cpu == 'scissors') {
    decider('YOU WIN');
    setScore(scores + 1);
    userWinner();
  }
  if (user == 'rock' && cpu == 'paper') {
    decider('YOU LOSE');
    setScore(scores - 1);
    cpuWinner();
  }
  if (user == 'rock' && cpu == 'rock') {
    decider("It's a tie");
    tie();
  }
  if (user == 'rock' && cpu == 'spock') {
    decider('YOU LOSE');
    setScore(scores - 1);
    cpuWinner();
  }
  if (user == 'rock' && cpu == 'lizard') {
    decider('YOU WIN');
    setScore(scores + 1);
    userWinner();
  }
  if (user == 'scissors' && cpu == 'scissors') {
    decider("It's a tie");
    tie();
  }
  if (user == 'scissors' && cpu == 'rock') {
    decider('YOU LOSE');
    setScore(scores - 1);
    cpuWinner();
  }
  if (user == 'scissors' && cpu == 'paper') {
    decider('YOU WIN');
    setScore(scores + 1);
    userWinner();
  }
  if (user == 'scissors' && cpu == 'spock') {
    decider('YOU LOSE');
    setScore(scores - 1);
    cpuWinner();
  }
  if (user == 'scissors' && cpu == 'lizard') {
    decider('YOU WIN');
    setScore(scores + 1);
    userWinner();
  }
  if (user == 'spock' && cpu == 'scissors') {
    decider('YOU WIN');
    setScore(scores + 1);
    userWinner();
  }
  if (user == 'spock' && cpu == 'paper') {
    decider('YOU LOSE');
    setScore(scores - 1);
    cpuWinner();
  }
  if (user == 'spock' && cpu == 'rock') {
    decider('YOU WIN');
    setScore(scores + 1);
    userWinner();
  }
  if (user == 'spock' && cpu == 'lizard') {
    decider('YOU LOSE');
    setScore(scores - 1);
    cpuWinner();
  }
  if (user == 'spock' && cpu == 'spock') {
    decider("It's a tie");
    tie();
  }
  if (user == 'lizard' && cpu == 'scissors') {
    decider('YOU WIN');
    setScore(scores + 1);
    userWinner();
  }
  if (user == 'lizard' && cpu == 'rock') {
    decider('YOU LOSE');
    setScore(scores - 1);
    cpuWinner();
  }
  if (user == 'lizard' && cpu == 'paper') {
    decider('YOU WIN');
    setScore(scores + 1);
    userWinner();
  }
  if (user == 'lizard' && cpu == 'spock') {
    decider('YOU WIN');
    setScore(scores + 1);
    userWinner();
  }
  if (user == 'lizard' && cpu == 'lizard') {
    decider("It's a tie");
    tie();
  }
};
const decider = (decide) => {
  let decision = document.querySelector('.who-won');
  decision.innerText = decide;
  console.log(decide);
};

const setScore = (score) => {
  scores = score;
  const scoreBoard = document.querySelector('.score-div h1');
  scoreBoard.innerText = score;
  console.log(scoreBoard);
};

const resetGame = () => {
  let hand = document.querySelector('.pick');
  hand.style.display = 'flex';
  let match = document.querySelector('.match');
  match.style.display = 'none';
  tie();
};

const rulesHandler = () => {
  console.log('iwork');
  const modalBg = document.querySelector('.modal-bg');
  const modal = document.querySelector('.modal');
  modalBg.style.display = 'block';
  modal.style.display = 'block';
};

const closeModalHandler = () => {
  const modalBg = document.querySelector('.modal-bg');
  const modal = document.querySelector('.modal');
  modalBg.style.display = 'none';
  modal.style.display = 'none';
};

const newGame = document.querySelector('.new-game');
newGame.addEventListener('click', resetGame);

const rules = document.querySelector('.rules-btn');
rules.addEventListener('click', rulesHandler);

const close = document.querySelector('.close');
close.addEventListener('click', closeModalHandler);
