import readlineSync from 'readline-sync';
import { greet, getNameSayHi } from '..';

const showGameRules = () => {
  const gameRules = 'Answer "yes" if number even otherwise answer "no".\n';
  console.log(gameRules);
};

const getRandomNumber = (min = -100, max = 100) => {
  const num = Math.round(min + Math.random() * (max - min));
  return num;
};

const askQuestion = (num) => {
  console.log(`Question: ${num}`);
};

const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const isEven = num => num % 2 === 0;

const showWinMessage = (username) => {
  console.log(`Congratulations, ${username}!`);
};

const showLoseMessage = (username, answer, correctAnswer) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${username}!`);
};

const conductGameRounds = (username, numberOfRounds) => {
  for (let roundCounter = 0; roundCounter < numberOfRounds; roundCounter += 1) {
    const currentNum = getRandomNumber();
    askQuestion(currentNum);

    const answer = getAnswer();

    if ((isEven(currentNum) && answer === 'yes') || (!isEven(currentNum) && answer === 'no')) {
      console.log('Correct!');
    } else {
      const correctAnswer = isEven(currentNum) ? 'yes' : 'no';
      showLoseMessage(username, answer, correctAnswer);
      return false;
    }
  }

  showWinMessage(username);
  return true;
};

export default () => {
  greet();
  showGameRules();
  const username = getNameSayHi();
  const numberOfQuestions = 3;
  conductGameRounds(username, numberOfQuestions);
};
