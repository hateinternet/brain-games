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
    if (num % divider === 0) {
      return false;
    }
    if (divider >= num / 2) {
      return true;
    }
    return iter(divider + 1);
  };
  return iter(2);
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gameMechanics = () => {
  const currentTask = getRandomNumber(0, 100);
  const correctAnswer = isPrime(currentTask) ? 'yes' : 'no';
  return { currentTask, correctAnswer };
};

export default () => {
  makeGame(gameDescription, gameMechanics);
};
