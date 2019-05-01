import readlineSync from 'readline-sync';

const showGreeting = () => console.log('Welcome to the Brain Games!');

const getName = () => readlineSync.question('May I have your name? ');

const sayHi = (username) => {
  console.log(`Hello, ${username}!\n`);
};

const showGameRules = (gameRules) => {
  console.log(`${gameRules}\n`);
};

const askQuestion = (num) => {
  console.log(`Question: ${num}`);
};

const getAnswer = () => readlineSync.question('Your answer: ');

const showWinMessage = (username) => {
  console.log(`Congratulations, ${username}!`);
};

const showLoseMessage = (username, userAnswer, rightAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${username}!`);
};

const showCorrectMessage = () => {
  console.log('Correct!');
};

const getRandomNumber = (min = 0, max = 10) => Math.round(min + Math.random() * (max - min));

const getRandomSign = () => {
  switch (getRandomNumber(0, 2)) {
    case 0:
      return '+';
    case 1:
      return '-';
    case 2:
      return '*';
    default:
      return null;
  }
};

const makeGame = (gameRules, gameMechanics) => {
  showGreeting();
  showGameRules(gameRules);
  const username = getName();
  sayHi(username);

  const numberOfRounds = 3;

  const runGameRound = (roundCounter) => {
    if (roundCounter === numberOfRounds) {
      showWinMessage(username);
      return true;
    }

    const gameVariables = gameMechanics();
    const task = gameVariables.currentTask;
    askQuestion(task);
    const userAnswer = getAnswer();
    const rightAnswer = gameVariables.correctAnswer;

    if (userAnswer !== rightAnswer) {
      showLoseMessage(username, userAnswer, rightAnswer);
      return false;
    }

    showCorrectMessage();
    return runGameRound(roundCounter + 1);
  };

  runGameRound(0);
};

export {
  getRandomNumber,
  getRandomSign,
  makeGame,
  showGreeting,
  getName,
  sayHi,
};
