import makeGame from '..';
import getRandomNumber from '../utils';

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

const gameDescription = 'What is the result of the expression?';
const gameMechanics = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const sign = getRandomSign();
  const currentTask = `${num1} ${sign} ${num2}`;
  let correctAnswer;
  switch (sign) {
    case '+':
      correctAnswer = String(num1 + num2);
      break;
    case '-':
      correctAnswer = String(num1 - num2);
      break;
    case '*':
      correctAnswer = String(num1 * num2);
      break;
    // no default
  }
  return { currentTask, correctAnswer };
};

export default () => {
  makeGame(gameDescription, gameMechanics);
};
