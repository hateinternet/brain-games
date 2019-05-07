import makeGame from '..';
import getRandomNumber from '../utils';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  const iter = (divider) => {
    if (divider >= num / 2) {
      return true;
    }
    if (num % divider === 0) {
      return false;
    }
    return iter(divider + 1);
  };
  return iter(2);
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gameMechanics = () => {
  const question = getRandomNumber(0, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => {
  makeGame(gameDescription, gameMechanics);
};
