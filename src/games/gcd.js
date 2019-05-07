import makeGame from '..';
import getRandomNumber from '../utils';

const getGCD = (num1, num2) => {
  if (num2 === 0) {
    return Math.abs(num1);
  }
  return getGCD(num2, num1 % num2);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';
const gameMechanics = () => {
  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGCD(num1, num2));
  return { question, correctAnswer };
};

export default () => {
  makeGame(gameDescription, gameMechanics);
};
