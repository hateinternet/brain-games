import makeGame from '..';
import getRandomNumber from '../utils';

const isEven = num => num % 2 === 0;

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
const gameData = () => {
  const question = getRandomNumber(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => {
  makeGame(gameDescription, gameData);
};
