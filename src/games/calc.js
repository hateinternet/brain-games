import makeGame from '..';
import getRandomNumber from '../utils';

const gameDescription = 'What is the result of the expression?';
const gameData = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  switch (getRandomNumber(0, 2)) {
    case 0:
      return {
        question: `${num1} + ${num2}`,
        correctAnswer: String(num1 + num2),
      };
    case 1:
      return {
        question: `${num1} - ${num2}`,
        correctAnswer: String(num1 - num2),
      };
    case 2:
      return {
        question: `${num1} * ${num2}`,
        correctAnswer: String(num1 * num2),
      };
    default:
      return null;
  }
};

export default () => {
  makeGame(gameDescription, gameData);
};
