import makeGame from '..';
import getRandomNumber from '../utils';

const getGameMechanics = (num1, num2) => {
  switch (getRandomNumber(0, 2)) {
    case 0:
      return {
        queston: `${num1} + ${num2}`,
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

const gameDescription = 'What is the result of the expression?';
const gameMechanics = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const { question, correctAnswer } = getGameMechanics(num1, num2);
  return { question, correctAnswer };
};

export default () => {
  makeGame(gameDescription, gameMechanics);
};
