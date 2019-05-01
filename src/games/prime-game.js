import {
  getRandomNumber,
  makeGame,
} from '..';

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

export default () => {
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const gameMechanics = () => {
    const currentTask = getRandomNumber(0, 100);
    const correctAnswer = isPrime(currentTask) ? 'yes' : 'no';
    return { currentTask, correctAnswer };
  };

  makeGame(gameRules, gameMechanics);
};
