import makeGame from '..';
import getRandomNumber from '../utils';

const isEven = num => num % 2 === 0;

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
const gameMechanics = () => {
  const currentTask = getRandomNumber(0, 100);
  const correctAnswer = isEven(currentTask) ? 'yes' : 'no';
  return { currentTask, correctAnswer };
};

export default () => {
  makeGame(gameDescription, gameMechanics);
};
