import readlineSync from 'readline-sync';

const showGreeting = () => console.log('Welcome to the Brain Games!');

const getName = () => readlineSync.question('May I have your name? ');

const sayHi = (username) => {
  console.log(`Hello, ${username}!\n`);
};

const showGameRules = (gameRules) => {
  console.log(`${gameRules}\n`);
};

const askQuestion = (task) => {
  console.log(`Question: ${task}`);
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

const numberOfRounds = 3;

const makeGame = (gameRules, gameMechanics) => {
  showGreeting();
  showGameRules(gameRules);
  const username = getName();
  sayHi(username);

  const runGameRound = (roundCounter) => {
    if (roundCounter === numberOfRounds) {
      return showWinMessage(username);
    }

    const { currentTask, correctAnswer } = gameMechanics();
    askQuestion(currentTask);
    const userAnswer = getAnswer();

    if (userAnswer !== correctAnswer) {
      return showLoseMessage(username, userAnswer, correctAnswer);
    }

    showCorrectMessage();
    return runGameRound(roundCounter + 1);
  };

  runGameRound(0);
};

export default makeGame;
